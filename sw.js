// SymQ Service Worker - v1.0.0
const CACHE_NAME = 'symq-v1';
const STATIC_CACHE = 'symq-static-v1';
const DATA_CACHE = 'symq-data-v1';

// Core files to cache immediately on install
const CORE_FILES = [
  '/',
  '/index.html',
  '/style.css',
  '/app.js',
  '/manifest.json',
  // Symbols data
  '/symbols-diacritics.js',
  '/symbols-punctuation.js',
  '/symbols-science.js',
  '/symbols-supersub.js',
  '/symbols-currency.js',
  // Shortcuts data
  '/shortcuts-windows.js',
  '/shortcuts-macos.js',
  '/shortcuts-linux.js',
  '/shortcuts-editing.js',
  '/shortcuts-word.js',
  '/shortcuts-excel.js',
  '/shortcuts-powerpoint.js',
  '/shortcuts-browser.js',
  '/shortcuts-explorer.js',
  '/shortcuts-photoshop.js',
  '/shortcuts-illustrator.js',
  '/shortcuts-coreldraw.js',
  '/shortcuts-vscode.js',
  '/shortcuts-terminal.js',
  '/shortcuts-autocad.js',
  '/shortcuts-premiere.js',
  // Icons
  '/icon-192x192.png',
  '/icon-512x512.png',
];

// External resources to cache (Google Fonts)
const EXTERNAL_FONTS = [
  'https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700&family=Roboto+Mono:wght@400;500;700&display=swap',
];

// ── Install ───────────────────────────────────────────────────────────────────
self.addEventListener('install', (event) => {
  event.waitUntil(
    (async () => {
      const staticCache = await caches.open(STATIC_CACHE);
      
      // Cache core files
      await Promise.allSettled(
        CORE_FILES.map(url =>
          staticCache.add(url).catch(err => console.warn('Failed to cache:', url, err))
        )
      );

      // Cache external fonts
      await Promise.allSettled(
        EXTERNAL_FONTS.map(url =>
          fetch(url, { mode: 'cors' })
            .then(res => staticCache.put(url, res))
            .catch(err => console.warn('Failed to cache font:', url, err))
        )
      );

      self.skipWaiting();
    })()
  );
});

// ── Activate ──────────────────────────────────────────────────────────────────
self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      // Remove old caches
      const cacheNames = await caches.keys();
      await Promise.all(
        cacheNames
          .filter(name => name !== STATIC_CACHE && name !== DATA_CACHE)
          .map(name => caches.delete(name))
      );
      self.clients.claim();
    })()
  );
});

// ── Fetch Strategy ────────────────────────────────────────────────────────────
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') return;

  // Skip chrome-extension and other non-http requests
  if (!url.protocol.startsWith('http')) return;

  // Google Fonts - Cache First
  if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
    event.respondWith(cacheFirst(request, STATIC_CACHE));
    return;
  }

  // App shell & data files - Cache First, Network Fallback
  if (url.origin === self.location.origin) {
    event.respondWith(cacheFirstWithNetworkFallback(request));
    return;
  }

  // Everything else - Network First
  event.respondWith(networkFirst(request));
});

// ── Strategies ────────────────────────────────────────────────────────────────

async function cacheFirst(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);
  if (cached) return cached;

  try {
    const response = await fetch(request);
    if (response.ok) cache.put(request, response.clone());
    return response;
  } catch {
    return new Response('Offline', { status: 503 });
  }
}

async function cacheFirstWithNetworkFallback(request) {
  const cache = await caches.open(STATIC_CACHE);
  const cached = await cache.match(request);
  if (cached) return cached;

  try {
    const response = await fetch(request);
    if (response.ok) {
      cache.put(request, response.clone());
    }
    return response;
  } catch {
    // Return index.html for navigation requests (SPA fallback)
    if (request.mode === 'navigate') {
      const indexPage = await cache.match('/index.html');
      if (indexPage) return indexPage;
    }
    return new Response(
      JSON.stringify({ error: 'أنت غير متصل بالإنترنت' }),
      { status: 503, headers: { 'Content-Type': 'application/json' } }
    );
  }
}

async function networkFirst(request) {
  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(DATA_CACHE);
      cache.put(request, response.clone());
    }
    return response;
  } catch {
    const cache = await caches.open(DATA_CACHE);
    const cached = await cache.match(request);
    return cached || new Response('Offline', { status: 503 });
  }
}

// ── Background Sync (for future use) ─────────────────────────────────────────
self.addEventListener('message', (event) => {
  if (event.data === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  if (event.data === 'GET_VERSION') {
    event.ports[0].postMessage({ version: CACHE_NAME });
  }
});
