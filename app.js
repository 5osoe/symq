document.addEventListener('DOMContentLoaded', () => {

    // ─── Configuration ───────────────────────────────────────────────────────
    const DEBOUNCE_DELAY = 250;

    // ─── Nav Hierarchy ────────────────────────────────────────────────────────
    const NAV_TREE = [
        { label: 'الكل' },
        { label: 'المفضلة', isFavorites: true },
        {
            label: 'الرموز', isGroup: true, children: [
                { label: 'التشكيل'         },
                { label: 'علامات الترقيم'  },
                { label: 'رموز علمية'      },
                { label: 'الأسس والمؤشرات'},
                { label: 'العملات'         },
            ]
        },
        {
            label: 'الاختصارات', isGroup: true, children: [
                { label: 'ويندوز'          },
                { label: 'macOS'           },
                { label: 'Linux'           },
                { label: 'مستكشف الملفات' },
                { label: 'تحرير عام'       },
                { label: 'المتصفح'         },
                { label: 'Word'            },
                { label: 'Excel'           },
                { label: 'PowerPoint'      },
                { label: 'Photoshop'       },
                { label: 'Illustrator'     },
                { label: 'CorelDRAW'       },
                { label: 'Premiere'        },
                { label: 'VS Code'         },
                { label: 'AutoCAD'         },
                { label: 'Terminal'        },
            ]
        },
    ];

    const SYMBOL_CATS   = new Set(['التشكيل','علامات الترقيم','رموز علمية','الأسس والمؤشرات','العملات']);
    const SHORTCUT_CATS = new Set(['ويندوز','macOS','Linux','مستكشف الملفات','تحرير عام','المتصفح','Word','Excel','PowerPoint','Photoshop','Illustrator','CorelDRAW','Premiere','VS Code','AutoCAD','Terminal']);

    // ─── Data ─────────────────────────────────────────────────────────────────
    const ALL_DATA = [
        ...(typeof DATA_DIACRITICS   !== 'undefined' ? DATA_DIACRITICS   : []),
        ...(typeof DATA_PUNCTUATION  !== 'undefined' ? DATA_PUNCTUATION  : []),
        ...(typeof DATA_SCIENCE      !== 'undefined' ? DATA_SCIENCE      : []),
        ...(typeof DATA_SUPERSUB     !== 'undefined' ? DATA_SUPERSUB     : []),
        ...(typeof DATA_CURRENCY     !== 'undefined' ? DATA_CURRENCY     : []),
        ...(typeof DATA_WINDOWS      !== 'undefined' ? DATA_WINDOWS      : []),
        ...(typeof DATA_MACOS        !== 'undefined' ? DATA_MACOS        : []),
        ...(typeof DATA_LINUX        !== 'undefined' ? DATA_LINUX        : []),
        ...(typeof DATA_EDITING      !== 'undefined' ? DATA_EDITING      : []),
        ...(typeof DATA_WORD         !== 'undefined' ? DATA_WORD         : []),
        ...(typeof DATA_EXCEL        !== 'undefined' ? DATA_EXCEL        : []),
        ...(typeof DATA_POWERPOINT   !== 'undefined' ? DATA_POWERPOINT   : []),
        ...(typeof DATA_BROWSER      !== 'undefined' ? DATA_BROWSER      : []),
        ...(typeof DATA_EXPLORER     !== 'undefined' ? DATA_EXPLORER     : []),
        ...(typeof DATA_PHOTOSHOP    !== 'undefined' ? DATA_PHOTOSHOP    : []),
        ...(typeof DATA_ILLUSTRATOR  !== 'undefined' ? DATA_ILLUSTRATOR  : []),
        ...(typeof DATA_CORELDRAW    !== 'undefined' ? DATA_CORELDRAW    : []),
        ...(typeof DATA_VSCODE       !== 'undefined' ? DATA_VSCODE       : []),
        ...(typeof DATA_TERMINAL     !== 'undefined' ? DATA_TERMINAL     : []),
        ...(typeof DATA_AUTOCAD      !== 'undefined' ? DATA_AUTOCAD      : []),
        ...(typeof DATA_PREMIERE     !== 'undefined' ? DATA_PREMIERE     : []),
    ];

    // Pre-build search strings once at init
    ALL_DATA.forEach(item => {
        const sym = item.symbol || '';
        item._searchText = [
            item.arabicName  || '',
            item.englishName || '',
            sym,
            sym.normalize('NFC'),
            sym.normalize('NFD'),
            item.shortcut    || '',
            item.description || '',
            item.subCategory || '',
            ...(item.keywords || []),
        ].join(' ').toLowerCase();
    });

    // Per-category index
    const CAT_INDEX = {};
    ALL_DATA.forEach(item => {
        if (!CAT_INDEX[item.category]) CAT_INDEX[item.category] = [];
        CAT_INDEX[item.category].push(item);
    });

    // Pre-computed counts
    const CAT_COUNTS = { 'الكل': ALL_DATA.length };
    Object.entries(CAT_INDEX).forEach(([cat, items]) => { CAT_COUNTS[cat] = items.length; });

    // ─── Favorites ────────────────────────────────────────────────────────────
    const FAV_KEY = 'symq-favorites';

    function getFavIds() {
        try { return new Set(JSON.parse(localStorage.getItem(FAV_KEY)) || []); } catch { return new Set(); }
    }

    function saveFavIds(set) {
        localStorage.setItem(FAV_KEY, JSON.stringify([...set]));
    }

    function getFavItems() {
        const ids = getFavIds();
        return ALL_DATA.filter(item => ids.has(item._id));
    }

    function toggleFav(id) {
        const ids = getFavIds();
        ids.has(id) ? ids.delete(id) : ids.add(id);
        saveFavIds(ids);
    }

    function isFav(id) { return getFavIds().has(id); }

    // Assign stable _id to every item once
    ALL_DATA.forEach((item, i) => { item._id = i; });

    // ─── State ────────────────────────────────────────────────────────────────
    let state = { category: 'الكل', subCategory: 'الكل', search: '' };

    // ─── DOM ──────────────────────────────────────────────────────────────────
    const ui = {
        grid:               document.getElementById('symbolsGrid'),
        sidebarContent:     document.getElementById('sidebarContent'),
        sidebar:            document.getElementById('sidebar'),
        backdrop:           document.getElementById('backdrop'),
        searchInput:        document.getElementById('searchInput'),
        searchContainer:    document.getElementById('searchContainer'),
        title:              document.getElementById('activeCategoryTitle'),
        count:              document.getElementById('itemCount'),
        empty:              document.getElementById('emptyState'),
        mobileBtn:          document.getElementById('mobileFilterBtn'),
        mobileSearchToggle: document.getElementById('mobileSearchToggle'),
        closeBtn:           document.getElementById('closeSidebar'),
        resetBtn:           document.getElementById('resetSearch'),
        backToTop:          document.getElementById('backToTop'),
        contentHeader:      document.querySelector('.content-header'),
    };

    // Injected controls
    const subFilterSelect = document.createElement('select');
    subFilterSelect.id = 'subCategoryFilter';
    subFilterSelect.className = 'sub-filter hidden';
    ui.contentHeader.appendChild(subFilterSelect);

    const clearBtn = document.createElement('span');
    clearBtn.innerHTML = '&times;';
    clearBtn.className = 'search-clear hidden';
    clearBtn.title = 'مسح البحث';
    ui.searchContainer.appendChild(clearBtn);

    // Print (Cheat Sheet) button
    const printBtn = document.createElement('button');
    printBtn.className = 'print-btn hidden';
    printBtn.title = 'طباعة هذه الفئة';
    printBtn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg> طباعة`;
    printBtn.onclick = () => window.print();
    ui.contentHeader.appendChild(printBtn);

    // ─── Icons ────────────────────────────────────────────────────────────────
    const ICONS = {
        copy:  `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>`,
        check: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22C55E" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`,
    };

    // ─── Utilities ────────────────────────────────────────────────────────────
    function debounce(fn, wait) {
        let t;
        return (...args) => { clearTimeout(t); t = setTimeout(() => fn(...args), wait); };
    }

    // ─── Fuzzy Search (fallback) ───────────────────────────────────────────────
    function fuzzyMatch(text, query) {
        if (query.length < 2) return false;
        let ti = 0, qi = 0, gaps = 0;
        while (ti < text.length && qi < query.length) {
            if (text[ti] === query[qi]) { qi++; } else { gaps++; }
            ti++;
            if (gaps > query.length * 1.5) return false;
        }
        return qi === query.length;
    }

    // ─── Filtering ────────────────────────────────────────────────────────────
    function getFilteredData() {
        const query = state.search.toLowerCase().trim();
        const cat   = state.category;
        const sub   = state.subCategory;

        let pool;
        if      (cat === 'المفضلة')      pool = getFavItems();
        else if (cat === 'الكل')         pool = ALL_DATA;
        else if (cat === 'الرموز')       pool = ALL_DATA.filter(i => SYMBOL_CATS.has(i.category));
        else if (cat === 'الاختصارات')   pool = ALL_DATA.filter(i => SHORTCUT_CATS.has(i.category));
        else                              pool = CAT_INDEX[cat] || [];

        if (sub !== 'الكل') pool = pool.filter(i => i.subCategory === sub);

        if (query) {
            // Direct match first
            const exact = pool.filter(i => i._searchText.includes(query));
            // Symbol exact match
            const symExact = pool.filter(i => i.symbol && (i.symbol === query || i.symbol.normalize('NFC') === query.normalize('NFC')));
            if (symExact.length > 0) {
                const seen = new Set(symExact.map(i => i._id));
                return [...symExact, ...exact.filter(i => !seen.has(i._id))];
            }
            if (exact.length > 0) return exact;
            // Fuzzy fallback
            return pool.filter(i => fuzzyMatch(i._searchText, query));
        }

        return pool;
    }

    // ─── Render: Sidebar ──────────────────────────────────────────────────────
    function renderSidebar() {
        const frag = document.createDocumentFragment();
        const favCount = getFavItems().length;

        NAV_TREE.forEach((node) => {

            // "الكل" — top-level leaf
            if (!node.isGroup && !node.isFavorites) {
                const li = document.createElement('li');
                li.className = 'nav-item' + (state.category === 'الكل' ? ' active' : '');
                li.innerHTML = `<span class="nav-label">الكل</span><span class="nav-count">${CAT_COUNTS['الكل']}</span>`;
                li.onclick = () => setCategory('الكل');
                frag.appendChild(li);
                return;
            }

            // "المفضلة" — top-level leaf
            if (node.isFavorites) {
                const li = document.createElement('li');
                li.className = 'nav-item nav-fav-item' + (state.category === 'المفضلة' ? ' active' : '');
                li.innerHTML = `<span class="nav-label"><span class="fav-heart-nav">♥</span> المفضلة</span><span class="nav-count">${favCount}</span>`;
                li.onclick = () => setCategory('المفضلة');
                frag.appendChild(li);
                return;
            }

            // Separator before each group
            const sep = document.createElement('div');
            sep.className = 'nav-separator';
            frag.appendChild(sep);

            // Group header (clickable — selects entire group)
            const header = document.createElement('div');
            header.className = 'nav-group-header' + (state.category === node.label ? ' active' : '');
            header.innerHTML = `<span class="nav-group-label">${node.label}</span>`;
            header.onclick = () => setCategory(node.label);
            frag.appendChild(header);

            // Children
            const ul = document.createElement('ul');
            ul.className = 'nav-list';

            node.children.forEach(child => {
                if (!CAT_COUNTS[child.label]) return;
                const li = document.createElement('li');
                li.className = 'nav-item nav-child' + (state.category === child.label ? ' active' : '');
                li.innerHTML = `<span class="nav-label">${child.label}</span><span class="nav-count">${CAT_COUNTS[child.label]}</span>`;
                li.onclick = () => setCategory(child.label);
                ul.appendChild(li);
            });

            frag.appendChild(ul);
        });

        ui.sidebarContent.innerHTML = '';
        ui.sidebarContent.appendChild(frag);
    }

    // ─── Render: Sub-filters ──────────────────────────────────────────────────
    function renderSubFilters() {
        const cat    = state.category;
        const isLeaf = cat !== 'الكل' && cat !== 'المفضلة' && cat !== 'الرموز' && cat !== 'الاختصارات';

        if (isLeaf) {
            const subCats = [...new Set((CAT_INDEX[cat] || []).map(i => i.subCategory).filter(Boolean))].sort();
            if (subCats.length > 0) {
                subFilterSelect.innerHTML = '<option value="الكل">جميع الأقسام</option>';
                subCats.forEach(sub => {
                    const opt = document.createElement('option');
                    opt.value = sub; opt.textContent = sub;
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

    // ─── Render: Grid ─────────────────────────────────────────────────────────
    function renderGrid() {
        const data = getFilteredData();

        let titleText = state.search ? 'نتائج البحث' : state.category;
        ui.title.textContent = titleText;
        ui.count.textContent = `${data.length} عنصر`;

        clearBtn.classList.toggle('hidden', state.search.length === 0);

        // Show print button only for specific (non-global) categories
        const showPrint = !state.search && state.category !== 'الكل' && state.category !== 'المفضلة';
        printBtn.classList.toggle('hidden', !showPrint);

        if (data.length === 0) {
            ui.grid.innerHTML = '';
            ui.empty.classList.remove('hidden');
            const p = ui.empty.querySelector('p');
            if (state.category === 'المفضلة') {
                if (p) p.innerHTML = 'لا توجد عناصر في المفضلة بعد.<br><span class="fav-empty-hint">اضغط ♥ على أي رمز أو اختصار لحفظه هنا.</span>';
            } else {
                if (p) p.textContent = state.search ? `لا توجد نتائج لـ "${state.search}"` : 'لا توجد عناصر هنا.';
            }
            return;
        }

        ui.empty.classList.add('hidden');

        const badgeMap = {
            'tool-key': { label: '⌨ مفتاح أداة',      cls: 'badge-toolkey' },
            'cmd':      { label: '⌘ أمر Command Bar', cls: 'badge-cmd'     },
            'combo':    { label: '⌨ تركيبة مفاتيح',   cls: 'badge-combo'   },
        };

        const frag = document.createDocumentFragment();

        for (let i = 0; i < data.length; i++) {
            const item        = data[i];
            const isShortcut  = item.type === 'shortcut';
            const mainDisplay = isShortcut ? item.shortcut : item.symbol;
            const favActive   = isFav(item._id);

            let keyboardHTML = '';
            if (!isShortcut && item.keyboardMethod) {
                const k         = item.keyboardMethod;
                const hasLayout = k.layout      && k.layout.trim()      !== '';
                const hasCombo  = k.combination && k.combination.trim() !== '';
                const hasAlt    = k.altCode     && k.altCode.trim()     !== '';
                if (hasLayout || hasCombo || hasAlt) {
                    keyboardHTML = '<div class="symbol-keyboard">';
                    if (hasLayout) keyboardHTML += `<div class="kbd-row"><span class="kbd-label">التخطيط</span><span class="kbd-val">${k.layout}</span></div>`;
                    if (hasCombo)  keyboardHTML += `<div class="kbd-row"><span class="kbd-label">مفاتيح</span><span class="kbd-val">${k.combination}</span></div>`;
                    if (hasAlt)    keyboardHTML += `<div class="kbd-row"><span class="kbd-label">Alt</span><span class="kbd-val">${k.altCode}</span></div>`;
                    keyboardHTML += '</div>';
                }
            }

            // HTML Entity + Unicode for symbols only
            let entityHTML = '';
            if (!isShortcut && item.symbol) {
                const cp = item.symbol.codePointAt(0);
                if (cp !== undefined) {
                    const hex      = cp.toString(16).toUpperCase().padStart(4, '0');
                    const unicode  = `U+${hex}`;
                    const dec      = cp;
                    const entity   = `&#${dec};`;
                    entityHTML = `<div class="symbol-meta-row">
                        <span class="sym-meta-item" title="Unicode Code Point"><span class="sym-meta-label">Unicode</span><span class="kbd-val sym-meta-val">${unicode}</span></span>
                        <span class="sym-meta-item" title="HTML Entity"><span class="sym-meta-label">HTML</span><span class="kbd-val sym-meta-val">${entity}</span></span>
                    </div>`;
                }
            }

            let shortcutTypeBadge = '';
            if (isShortcut && item.shortcutType) {
                const b = badgeMap[item.shortcutType];
                if (b) shortcutTypeBadge = `<div class="shortcut-type-badge ${b.cls}">${b.label}</div>`;
            }

            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <button class="fav-btn${favActive ? ' fav-active' : ''}" title="${favActive ? 'إزالة من المفضلة' : 'إضافة للمفضلة'}" aria-label="مفضلة">♥</button>
                ${!isShortcut ? `<button class="copy-icon-btn" title="نسخ الرمز" aria-label="نسخ">${ICONS.copy}</button>` : ''}
                <div class="${isShortcut ? 'text-shortcut' : 'card-symbol'}">${mainDisplay}</div>
                ${shortcutTypeBadge}
                <div class="card-name-ar">${item.arabicName}</div>
                <div class="card-name-en">${item.englishName}</div>
                ${item.description ? `<div class="card-desc">${item.description}</div>` : '<div class="card-desc"></div>'}
                ${keyboardHTML}
                ${entityHTML}
                <div class="card-footer">
                    <div class="card-cat">${item.category}</div>
                    ${item.subCategory ? `<div class="tag-sub">${item.subCategory}</div>` : ''}
                </div>
            `;

            // Fav button
            const favBtn = card.querySelector('.fav-btn');
            favBtn.onclick = (e) => {
                e.stopPropagation();
                toggleFav(item._id);
                favBtn.classList.toggle('fav-active');
                favBtn.title = isFav(item._id) ? 'إزالة من المفضلة' : 'إضافة للمفضلة';
                renderSidebar();
                if (state.category === 'المفضلة') renderGrid();
            };

            if (!isShortcut) {
                const copyBtn = card.querySelector('.copy-icon-btn');
                if (copyBtn) copyBtn.onclick = (e) => { e.stopPropagation(); handleCopy(mainDisplay, copyBtn); };
                card.onclick = () => { const btn = card.querySelector('.copy-icon-btn'); if (btn) handleCopy(mainDisplay, btn); };
            }

            frag.appendChild(card);
        }

        // Remove old fuzzy notice if any
        const oldNotice = ui.grid.previousElementSibling;
        if (oldNotice && oldNotice.classList.contains('fuzzy-notice')) oldNotice.remove();

        // Show fuzzy notice if results came from fuzzy (no exact match existed)
        if (state.search) {
            const query = state.search.toLowerCase().trim();
            const hasExact = data.some(i => i._searchText.includes(query));
            if (!hasExact && data.length > 0) {
                const notice = document.createElement('div');
                notice.className = 'fuzzy-notice';
                notice.textContent = `نتائج تقريبية لـ "${state.search}"`;
                ui.grid.insertAdjacentElement('beforebegin', notice);
            }
        }

        ui.grid.innerHTML = '';
        ui.grid.appendChild(frag);
    }

    // ─── Actions ──────────────────────────────────────────────────────────────
    function setCategory(name) {
        state.category    = name;
        state.subCategory = 'الكل';
        clearSearch(false);
        renderSubFilters();
        renderSidebar();
        renderGrid();
        closeSidebar();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function clearSearch(shouldRender = true) {
        state.search         = '';
        ui.searchInput.value = '';
        if (shouldRender) renderGrid();
    }

    function handleCopy(text, btnEl) {
        navigator.clipboard.writeText(text).then(() => {
            btnEl.innerHTML = ICONS.check;
            btnEl.classList.add('copied');
            setTimeout(() => { btnEl.innerHTML = ICONS.copy; btnEl.classList.remove('copied'); }, 1500);
        });
    }

    // ─── Sidebar Drawer ───────────────────────────────────────────────────────
    function openSidebar()  { ui.sidebar.classList.add('open');    ui.backdrop.classList.add('open');    document.body.style.overflow = 'hidden'; }
    function closeSidebar() { ui.sidebar.classList.remove('open'); ui.backdrop.classList.remove('open'); document.body.style.overflow = '';       }

    // ─── Events ───────────────────────────────────────────────────────────────
    ui.mobileSearchToggle.addEventListener('click', () => {
        ui.searchContainer.classList.toggle('active');
        if (ui.searchContainer.classList.contains('active')) setTimeout(() => ui.searchInput.focus(), 100);
    });

    window.addEventListener('scroll', () => {
        ui.backToTop.classList.toggle('visible', window.scrollY > 300);
    }, { passive: true });

    ui.backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

    ui.searchInput.addEventListener('input', debounce((e) => {
        state.search = e.target.value;
        renderGrid();
    }, DEBOUNCE_DELAY));

    clearBtn.addEventListener('click', () => { clearSearch(); ui.searchInput.focus(); });

    document.addEventListener('keydown', (e) => {
        if (e.key === '/' && document.activeElement !== ui.searchInput) { e.preventDefault(); ui.searchInput.focus(); }
        if (e.key === 'Escape') {
            closeSidebar();
            ui.searchInput.blur();
            if (window.innerWidth <= 900) ui.searchContainer.classList.remove('active');
        }
    });

    ui.mobileBtn.addEventListener('click', openSidebar);
    ui.closeBtn.addEventListener('click', closeSidebar);
    ui.backdrop.addEventListener('click', closeSidebar);
    ui.resetBtn.addEventListener('click', () => { clearSearch(false); setCategory('الكل'); });

    subFilterSelect.addEventListener('change', (e) => {
        state.subCategory = e.target.value;
        renderGrid();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // ─── Dark Mode ────────────────────────────────────────────────────────────
    const darkBtn        = document.getElementById('darkModeBtn');
    const darkBtnMobile  = document.getElementById('darkModeBtnMobile');
    const iconMoon       = document.getElementById('iconMoon');
    const iconSun        = document.getElementById('iconSun');
    const iconMoonMobile = document.getElementById('iconMoonMobile');
    const iconSunMobile  = document.getElementById('iconSunMobile');
    const themeOverlay   = document.getElementById('themeOverlay');

    function applyTheme(dark, animate) {
        const setIcons = (d) => {
            iconMoon.style.display       = d ? 'none' : '';
            iconSun.style.display        = d ? ''     : 'none';
            iconMoonMobile.style.display = d ? 'none' : '';
            iconSunMobile.style.display  = d ? ''     : 'none';
        };
        if (!animate) {
            document.documentElement.classList.toggle('dark', dark);
            setIcons(dark);
            return;
        }
        themeOverlay.classList.add('visible');
        setTimeout(() => {
            document.documentElement.classList.toggle('dark', dark);
            setIcons(dark);
            setTimeout(() => themeOverlay.classList.remove('visible'), 250);
        }, 350);
    }

    function toggleDark() {
        const isDark = document.documentElement.classList.contains('dark');
        localStorage.setItem('symq-dark', isDark ? '0' : '1');
        applyTheme(!isDark, true);
    }

    // Init from saved preference
    applyTheme(localStorage.getItem('symq-dark') === '1', false);

    darkBtn.addEventListener('click', toggleDark);
    darkBtnMobile.addEventListener('click', toggleDark);

    // ─── Init ─────────────────────────────────────────────────────────────────
    renderSidebar();
    renderSubFilters();

    // ─── PWA Shortcut: read ?category= from URL ───────────────────────────────
    (function applyURLCategory() {
        const params = new URLSearchParams(window.location.search);
        const cat = params.get('category');
        if (!cat) { renderGrid(); return; }

        // Check if it's a group label (الرموز / الاختصارات)
        const isGroup = NAV_TREE.some(n => n.isGroup && n.label === cat);
        // Check if it's a child category
        const isChild = NAV_TREE.some(n => n.isGroup && n.children && n.children.some(c => c.label === cat));

        if (isGroup || isChild || cat === 'الكل' || cat === 'المفضلة') {
            state.category    = cat;
            state.subCategory = 'الكل';
            state.search      = '';
        }

        renderSidebar();
        renderSubFilters();
        renderGrid();

        // Clean URL without reload
        window.history.replaceState({}, '', '/');
    })();
});
