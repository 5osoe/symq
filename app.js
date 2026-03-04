document.addEventListener('DOMContentLoaded', () => {

    // ─── Configuration ───────────────────────────────────────────────────────
    const DEBOUNCE_DELAY = 250;

    // ─── Category → URL slug map ─────────────────────────────────────────────
    const SLUG_MAP = {
        'الكل':               'all',
        'التشكيل':            'diacritics',
        'علامات الترقيم':     'punctuation',
        'الرموز الرياضية':    'math',
        'الأسس والمؤشرات':   'supersub',
        'العملات':            'currency',
        'ويندوز':             'windows',
        'مستكشف الملفات':     'explorer',
        'تحرير عام':          'editing',
        'المتصفح':            'browser',
        'Word':               'word',
        'Excel':              'excel',
        'PowerPoint':         'powerpoint',
        'Photoshop':          'photoshop',
        'Illustrator':        'illustrator',
        'Premiere':           'premiere',
        'VS Code':            'vscode',
        'AutoCAD':            'autocad',
        'Terminal':           'terminal',
    };
    // Reverse map: slug → category name
    const SLUG_TO_CAT = Object.fromEntries(
        Object.entries(SLUG_MAP).map(([cat, slug]) => [slug, cat])
    );

    // ─── Group / Hierarchy Definitions ───────────────────────────────────────
    // Each entry: { label, slug, children? }
    // Top-level items without children are leaf nodes.
    const NAV_TREE = [
        { label: 'الكل', slug: 'all' },
        { label: 'SYMBOLS', isGroup: true, children: [
            { label: 'التشكيل',          slug: 'diacritics'  },
            { label: 'علامات الترقيم',   slug: 'punctuation' },
            { label: 'الرموز الرياضية',  slug: 'math'        },
            { label: 'الأسس والمؤشرات', slug: 'supersub'    },
            { label: 'العملات',          slug: 'currency'    },
        ]},
        { label: 'SHORTCUTS', isGroup: true, children: [
            { label: 'ويندوز',           slug: 'windows'     },
            { label: 'مستكشف الملفات',   slug: 'explorer'    },
            { label: 'تحرير عام',        slug: 'editing'     },
            { label: 'المتصفح',          slug: 'browser'     },
            { label: 'Word',             slug: 'word'        },
            { label: 'Excel',            slug: 'excel'       },
            { label: 'PowerPoint',       slug: 'powerpoint'  },
            { label: 'Photoshop',        slug: 'photoshop'   },
            { label: 'Illustrator',      slug: 'illustrator' },
            { label: 'Premiere',         slug: 'premiere'    },
            { label: 'VS Code',          slug: 'vscode'      },
            { label: 'AutoCAD',          slug: 'autocad'     },
            { label: 'Terminal',         slug: 'terminal'    },
        ]},
    ];

    // Which categories belong to SYMBOLS / SHORTCUTS groups (for group-level filter)
    const SYMBOL_CATS  = new Set(['التشكيل','علامات الترقيم','الرموز الرياضية','الأسس والمؤشرات','العملات']);
    const SHORTCUT_CATS = new Set(['ويندوز','مستكشف الملفات','تحرير عام','المتصفح','Word','Excel','PowerPoint','Photoshop','Illustrator','Premiere','VS Code','AutoCAD','Terminal']);

    // ─── Data Aggregation ────────────────────────────────────────────────────
    const ALL_DATA = [
        ...(typeof DATA_DIACRITICS   !== 'undefined' ? DATA_DIACRITICS   : []),
        ...(typeof DATA_PUNCTUATION  !== 'undefined' ? DATA_PUNCTUATION  : []),
        ...(typeof DATA_MATH         !== 'undefined' ? DATA_MATH         : []),
        ...(typeof DATA_SUPERSUB     !== 'undefined' ? DATA_SUPERSUB     : []),
        ...(typeof DATA_CURRENCY     !== 'undefined' ? DATA_CURRENCY     : []),
        ...(typeof DATA_WINDOWS      !== 'undefined' ? DATA_WINDOWS      : []),
        ...(typeof DATA_EDITING      !== 'undefined' ? DATA_EDITING      : []),
        ...(typeof DATA_WORD         !== 'undefined' ? DATA_WORD         : []),
        ...(typeof DATA_EXCEL        !== 'undefined' ? DATA_EXCEL        : []),
        ...(typeof DATA_POWERPOINT   !== 'undefined' ? DATA_POWERPOINT   : []),
        ...(typeof DATA_BROWSER      !== 'undefined' ? DATA_BROWSER      : []),
        ...(typeof DATA_EXPLORER     !== 'undefined' ? DATA_EXPLORER     : []),
        ...(typeof DATA_PHOTOSHOP    !== 'undefined' ? DATA_PHOTOSHOP    : []),
        ...(typeof DATA_ILLUSTRATOR  !== 'undefined' ? DATA_ILLUSTRATOR  : []),
        ...(typeof DATA_VSCODE       !== 'undefined' ? DATA_VSCODE       : []),
        ...(typeof DATA_TERMINAL     !== 'undefined' ? DATA_TERMINAL     : []),
        ...(typeof DATA_AUTOCAD      !== 'undefined' ? DATA_AUTOCAD      : []),
        ...(typeof DATA_PREMIERE     !== 'undefined' ? DATA_PREMIERE     : []),
    ];

    // ─── Pre-build searchable strings (once, at init) ─────────────────────────
    // This prevents re-joining arrays on every keystroke / filter operation.
    ALL_DATA.forEach(item => {
        item._searchText = [
            item.arabicName   || '',
            item.englishName  || '',
            item.symbol       || '',
            item.shortcut     || '',
            item.description  || '',
            item.subCategory  || '',
            ...(item.keywords || []),
        ].join(' ').toLowerCase();
    });

    // ─── Pre-build per-category index ─────────────────────────────────────────
    const CAT_INDEX = {};
    ALL_DATA.forEach(item => {
        if (!CAT_INDEX[item.category]) CAT_INDEX[item.category] = [];
        CAT_INDEX[item.category].push(item);
    });

    // ─── Per-category item counts (pre-computed) ──────────────────────────────
    const CAT_COUNTS = { 'الكل': ALL_DATA.length };
    Object.entries(CAT_INDEX).forEach(([cat, items]) => { CAT_COUNTS[cat] = items.length; });

    // ─── State ────────────────────────────────────────────────────────────────
    let state = {
        category:    'الكل',   // leaf-level category OR group sentinel ('SYMBOLS'/'SHORTCUTS')
        subCategory: 'الكل',
        search:      '',
    };

    // ─── DOM References ───────────────────────────────────────────────────────
    const ui = {
        grid:              document.getElementById('symbolsGrid'),
        sidebarContent:    document.getElementById('sidebarContent'),
        sidebar:           document.getElementById('sidebar'),
        backdrop:          document.getElementById('backdrop'),
        searchInput:       document.getElementById('searchInput'),
        searchContainer:   document.getElementById('searchContainer'),
        title:             document.getElementById('activeCategoryTitle'),
        count:             document.getElementById('itemCount'),
        empty:             document.getElementById('emptyState'),
        mobileBtn:         document.getElementById('mobileFilterBtn'),
        mobileSearchToggle:document.getElementById('mobileSearchToggle'),
        closeBtn:          document.getElementById('closeSidebar'),
        resetBtn:          document.getElementById('resetSearch'),
        backToTop:         document.getElementById('backToTop'),
        contentHeader:     document.querySelector('.content-header'),
    };

    // ─── Injected Controls ────────────────────────────────────────────────────
    // Sub-filter dropdown
    const subFilterSelect = document.createElement('select');
    subFilterSelect.id = 'subCategoryFilter';
    subFilterSelect.className = 'sub-filter hidden';
    ui.contentHeader.appendChild(subFilterSelect);

    // Search clear button
    const clearBtn = document.createElement('span');
    clearBtn.innerHTML = '&times;';
    clearBtn.className = 'search-clear hidden';
    clearBtn.title = 'مسح البحث';
    ui.searchContainer.appendChild(clearBtn);

    // ─── SVG Icons ────────────────────────────────────────────────────────────
    const ICONS = {
        copy:  `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>`,
        check: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22C55E" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`,
    };

    // ─── Utilities ────────────────────────────────────────────────────────────
    function debounce(fn, wait) {
        let t;
        return (...args) => {
            clearTimeout(t);
            t = setTimeout(() => fn(...args), wait);
        };
    }

    // ─── URL Routing ──────────────────────────────────────────────────────────
    function slugFromCategory(cat) {
        return SLUG_MAP[cat] || 'all';
    }

    function categoryFromSlug(slug) {
        return SLUG_TO_CAT[slug] || 'الكل';
    }

    function pushRoute(cat) {
        const slug = slugFromCategory(cat);
        const path = slug === 'all' ? '/' : '/' + slug;
        if (window.location.pathname !== path) {
            history.pushState({ category: cat }, '', path);
        }
    }

    function readRoute() {
        const parts = window.location.pathname.replace(/^\//, '').split('/');
        const slug  = parts[0] || 'all';
        return categoryFromSlug(slug);
    }

    // ─── Filtering ────────────────────────────────────────────────────────────
    function getFilteredData() {
        const query = state.search.toLowerCase().trim();
        const cat   = state.category;
        const sub   = state.subCategory;

        // Determine the working dataset
        let pool;
        if (cat === 'الكل') {
            pool = ALL_DATA;
        } else if (cat === 'SYMBOLS') {
            // Group-level: all symbol categories
            pool = ALL_DATA.filter(item => SYMBOL_CATS.has(item.category));
        } else if (cat === 'SHORTCUTS') {
            pool = ALL_DATA.filter(item => SHORTCUT_CATS.has(item.category));
        } else {
            // Leaf category — use pre-built index for O(1) lookup
            pool = CAT_INDEX[cat] || [];
        }

        // Sub-category filter
        if (sub !== 'الكل') {
            pool = pool.filter(item => item.subCategory === sub);
        }

        // Text search (uses pre-built _searchText)
        if (query) {
            pool = pool.filter(item => item._searchText.includes(query));
        }

        return pool;
    }

    // ─── Rendering: Sidebar ───────────────────────────────────────────────────
    function renderSidebar() {
        const frag = document.createDocumentFragment();

        NAV_TREE.forEach((node, idx) => {
            if (!node.isGroup) {
                // Top-level leaf (ALL)
                const li = document.createElement('li');
                li.className = 'nav-item' + (state.category === 'الكل' ? ' active' : '');
                li.innerHTML = `<span>${node.label}</span><span>${CAT_COUNTS['الكل']}</span>`;
                li.onclick = () => setCategory('الكل');
                frag.appendChild(li);
            } else {
                // Group header with separator
                if (idx > 0) {
                    const sep = document.createElement('div');
                    sep.className = 'nav-separator';
                    frag.appendChild(sep);
                }

                const groupTitle = document.createElement('div');
                groupTitle.className = 'nav-group-title';
                groupTitle.textContent = node.label;
                // Group title is also clickable → selects entire group
                groupTitle.title = node.label === 'SYMBOLS' ? 'عرض جميع الرموز' : 'عرض جميع الاختصارات';
                groupTitle.onclick = () => setCategory(node.label); // 'SYMBOLS' or 'SHORTCUTS'
                frag.appendChild(groupTitle);

                const ul = document.createElement('ul');
                ul.className = 'nav-list';

                node.children.forEach(child => {
                    // Skip if no data for this category
                    if (!CAT_COUNTS[child.label]) return;

                    const li = document.createElement('li');
                    li.className = 'nav-item' + (state.category === child.label ? ' active' : '');
                    li.innerHTML = `<span>${child.label}</span><span>${CAT_COUNTS[child.label] || 0}</span>`;
                    li.onclick = () => setCategory(child.label);
                    ul.appendChild(li);
                });

                frag.appendChild(ul);
            }
        });

        ui.sidebarContent.innerHTML = '';
        ui.sidebarContent.appendChild(frag);
    }

    // ─── Rendering: Sub-filters ───────────────────────────────────────────────
    function renderSubFilters() {
        const cat = state.category;
        // Only show sub-filter for leaf categories (not group or ALL)
        const isLeaf = cat !== 'الكل' && cat !== 'SYMBOLS' && cat !== 'SHORTCUTS';

        if (isLeaf) {
            const pool     = CAT_INDEX[cat] || [];
            const subCats  = [...new Set(pool.map(i => i.subCategory).filter(Boolean))].sort();

            if (subCats.length > 0) {
                subFilterSelect.innerHTML = '<option value="الكل">جميع الأقسام</option>';
                subCats.forEach(sub => {
                    const opt = document.createElement('option');
                    opt.value = sub;
                    opt.textContent = sub;
                    subFilterSelect.appendChild(opt);
                });
                subFilterSelect.value = state.subCategory;
                subFilterSelect.classList.remove('hidden');
                return;
            }
        }

        subFilterSelect.classList.add('hidden');
        state.subCategory = 'الكل';
    }

    // ─── Rendering: Grid ──────────────────────────────────────────────────────
    function renderGrid() {
        const data = getFilteredData();

        // Update header
        let titleText = state.search ? 'نتائج البحث' : state.category;
        if (titleText === 'SYMBOLS')   titleText = 'الرموز';
        if (titleText === 'SHORTCUTS') titleText = 'الاختصارات';
        ui.title.textContent = titleText;
        ui.count.textContent = `${data.length} عنصر`;

        // Clear button visibility
        clearBtn.classList.toggle('hidden', state.search.length === 0);

        // Empty state
        if (data.length === 0) {
            ui.grid.innerHTML = '';
            ui.empty.classList.remove('hidden');
            const emptyP = ui.empty.querySelector('p');
            if (emptyP) emptyP.textContent = state.search
                ? `لا توجد نتائج لـ "${state.search}"`
                : 'لا توجد عناصر هنا.';
            return;
        }

        ui.empty.classList.add('hidden');

        // Build all cards in a fragment (single DOM write)
        const frag = document.createDocumentFragment();
        const badgeMap = {
            'tool-key': { label: '⌨ مفتاح أداة',      cls: 'badge-toolkey' },
            'cmd':      { label: '⌘ أمر Command Bar', cls: 'badge-cmd'     },
            'combo':    { label: '⌨ تركيبة مفاتيح',   cls: 'badge-combo'   },
        };

        for (let i = 0; i < data.length; i++) {
            const item       = data[i];
            const isShortcut = item.type === 'shortcut';
            const mainDisplay = isShortcut ? item.shortcut : item.symbol;

            // Keyboard method HTML (symbols only)
            let keyboardHTML = '';
            if (!isShortcut && item.keyboardMethod) {
                const k          = item.keyboardMethod;
                const hasLayout  = k.layout      && k.layout.trim()      !== '';
                const hasCombo   = k.combination && k.combination.trim() !== '';
                const hasAlt     = k.altCode     && k.altCode.trim()     !== '';

                if (hasLayout || hasCombo || hasAlt) {
                    keyboardHTML = '<div class="symbol-keyboard">';
                    if (hasLayout) keyboardHTML += `<div class="kbd-row"><span class="kbd-label">التخطيط</span><span class="kbd-val">${k.layout}</span></div>`;
                    if (hasCombo)  keyboardHTML += `<div class="kbd-row"><span class="kbd-label">مفاتيح</span><span class="kbd-val">${k.combination}</span></div>`;
                    if (hasAlt)    keyboardHTML += `<div class="kbd-row"><span class="kbd-label">Alt</span><span class="kbd-val">${k.altCode}</span></div>`;
                    keyboardHTML += '</div>';
                }
            }

            // Shortcut type badge
            let shortcutTypeBadge = '';
            if (isShortcut && item.shortcutType) {
                const b = badgeMap[item.shortcutType];
                if (b) shortcutTypeBadge = `<div class="shortcut-type-badge ${b.cls}">${b.label}</div>`;
            }

            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                ${!isShortcut ? `<button class="copy-icon-btn" title="نسخ الرمز" aria-label="نسخ">${ICONS.copy}</button>` : ''}
                <div class="${isShortcut ? 'text-shortcut' : 'card-symbol'}">${mainDisplay}</div>
                ${shortcutTypeBadge}
                <div class="card-name-ar">${item.arabicName}</div>
                <div class="card-name-en">${item.englishName}</div>
                ${item.description ? `<div class="card-desc">${item.description}</div>` : '<div class="card-desc"></div>'}
                ${keyboardHTML}
                <div class="card-footer">
                    <div class="card-cat">${item.category}</div>
                    ${item.subCategory ? `<div class="tag-sub">${item.subCategory}</div>` : ''}
                </div>
            `;

            if (!isShortcut) {
                const copyBtn = card.querySelector('.copy-icon-btn');
                if (copyBtn) {
                    copyBtn.onclick = (e) => { e.stopPropagation(); handleCopy(mainDisplay, copyBtn); };
                }
                card.onclick = () => {
                    const btn = card.querySelector('.copy-icon-btn');
                    if (btn) handleCopy(mainDisplay, btn);
                };
            }

            frag.appendChild(card);
        }

        // Single DOM write
        ui.grid.innerHTML = '';
        ui.grid.appendChild(frag);
    }

    // ─── Actions ──────────────────────────────────────────────────────────────
    function setCategory(name, pushToHistory = true) {
        state.category    = name;
        state.subCategory = 'الكل';
        clearSearch(false);
        if (pushToHistory) pushRoute(name);
        renderSubFilters();
        renderSidebar();
        renderGrid();
        closeSidebar();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function clearSearch(shouldRender = true) {
        state.search       = '';
        ui.searchInput.value = '';
        if (shouldRender) renderGrid();
    }

    function handleCopy(text, btnEl) {
        navigator.clipboard.writeText(text).then(() => {
            btnEl.innerHTML = ICONS.check;
            btnEl.classList.add('copied');
            setTimeout(() => {
                btnEl.innerHTML = ICONS.copy;
                btnEl.classList.remove('copied');
            }, 1500);
        });
    }

    // ─── Sidebar Drawer ───────────────────────────────────────────────────────
    function openSidebar() {
        ui.sidebar.classList.add('open');
        ui.backdrop.classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    function closeSidebar() {
        ui.sidebar.classList.remove('open');
        ui.backdrop.classList.remove('open');
        document.body.style.overflow = '';
    }

    // ─── Event Listeners ──────────────────────────────────────────────────────
    ui.mobileSearchToggle.addEventListener('click', () => {
        ui.searchContainer.classList.toggle('active');
        if (ui.searchContainer.classList.contains('active')) {
            setTimeout(() => ui.searchInput.focus(), 100);
        }
    });

    window.addEventListener('scroll', () => {
        ui.backToTop.classList.toggle('visible', window.scrollY > 300);
    }, { passive: true });

    ui.backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    ui.searchInput.addEventListener('input', debounce((e) => {
        state.search = e.target.value;
        renderGrid();
    }, DEBOUNCE_DELAY));

    clearBtn.addEventListener('click', () => {
        clearSearch();
        ui.searchInput.focus();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === '/' && document.activeElement !== ui.searchInput) {
            e.preventDefault();
            ui.searchInput.focus();
        }
        if (e.key === 'Escape') {
            closeSidebar();
            ui.searchInput.blur();
            if (window.innerWidth <= 900) ui.searchContainer.classList.remove('active');
        }
    });

    ui.mobileBtn.addEventListener('click', openSidebar);
    ui.closeBtn.addEventListener('click', closeSidebar);
    ui.backdrop.addEventListener('click', closeSidebar);

    ui.resetBtn.addEventListener('click', () => {
        clearSearch(false);
        setCategory('الكل');
    });

    subFilterSelect.addEventListener('change', (e) => {
        state.subCategory = e.target.value;
        renderGrid();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Browser back/forward support
    window.addEventListener('popstate', (e) => {
        const cat = e.state?.category || readRoute();
        state.category    = cat;
        state.subCategory = 'الكل';
        clearSearch(false);
        renderSubFilters();
        renderSidebar();
        renderGrid();
    });

    // ─── Init ─────────────────────────────────────────────────────────────────
    const initialCat = readRoute();
    state.category = initialCat;
    // Replace current history entry so back-button works correctly
    history.replaceState({ category: initialCat }, '', window.location.pathname);

    renderSidebar();
    renderSubFilters();
    renderGrid();
});
