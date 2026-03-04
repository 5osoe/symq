document.addEventListener('DOMContentLoaded', () => {

    // ─── Configuration ───────────────────────────────────────────────────────
    const DEBOUNCE_DELAY = 250;

    // ─── Nav Hierarchy ────────────────────────────────────────────────────────
    const NAV_TREE = [
        { label: 'الكل' },
        {
            label: 'SYMBOLS', isGroup: true, children: [
                { label: 'التشكيل'         },
                { label: 'علامات الترقيم'  },
                { label: 'الرموز الرياضية' },
                { label: 'الأسس والمؤشرات'},
                { label: 'العملات'         },
            ]
        },
        {
            label: 'SHORTCUTS', isGroup: true, children: [
                { label: 'ويندوز'          },
                { label: 'مستكشف الملفات' },
                { label: 'تحرير عام'       },
                { label: 'المتصفح'         },
                { label: 'Word'            },
                { label: 'Excel'           },
                { label: 'PowerPoint'      },
                { label: 'Photoshop'       },
                { label: 'Illustrator'     },
                { label: 'Premiere'        },
                { label: 'VS Code'         },
                { label: 'AutoCAD'         },
                { label: 'Terminal'        },
            ]
        },
    ];

    const SYMBOL_CATS   = new Set(['التشكيل','علامات الترقيم','الرموز الرياضية','الأسس والمؤشرات','العملات']);
    const SHORTCUT_CATS = new Set(['ويندوز','مستكشف الملفات','تحرير عام','المتصفح','Word','Excel','PowerPoint','Photoshop','Illustrator','Premiere','VS Code','AutoCAD','Terminal']);

    // ─── Data ─────────────────────────────────────────────────────────────────
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

    // Pre-build search strings once at init
    ALL_DATA.forEach(item => {
        item._searchText = [
            item.arabicName  || '',
            item.englishName || '',
            item.symbol      || '',
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

    // ─── Filtering ────────────────────────────────────────────────────────────
    function getFilteredData() {
        const query = state.search.toLowerCase().trim();
        const cat   = state.category;
        const sub   = state.subCategory;

        let pool;
        if      (cat === 'الكل')      pool = ALL_DATA;
        else if (cat === 'SYMBOLS')   pool = ALL_DATA.filter(i => SYMBOL_CATS.has(i.category));
        else if (cat === 'SHORTCUTS') pool = ALL_DATA.filter(i => SHORTCUT_CATS.has(i.category));
        else                          pool = CAT_INDEX[cat] || [];

        if (sub !== 'الكل') pool = pool.filter(i => i.subCategory === sub);
        if (query)           pool = pool.filter(i => i._searchText.includes(query));

        return pool;
    }

    // ─── Render: Sidebar ──────────────────────────────────────────────────────
    function renderSidebar() {
        const frag = document.createDocumentFragment();

        NAV_TREE.forEach((node) => {

            // "الكل" — top-level leaf
            if (!node.isGroup) {
                const li = document.createElement('li');
                li.className = 'nav-item' + (state.category === 'الكل' ? ' active' : '');
                li.innerHTML = `<span class="nav-label">الكل</span><span class="nav-count">${CAT_COUNTS['الكل']}</span>`;
                li.onclick = () => setCategory('الكل');
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
        const isLeaf = cat !== 'الكل' && cat !== 'SYMBOLS' && cat !== 'SHORTCUTS';

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
        if (titleText === 'SYMBOLS')   titleText = 'الرموز';
        if (titleText === 'SHORTCUTS') titleText = 'الاختصارات';
        ui.title.textContent = titleText;
        ui.count.textContent = `${data.length} عنصر`;

        clearBtn.classList.toggle('hidden', state.search.length === 0);

        if (data.length === 0) {
            ui.grid.innerHTML = '';
            ui.empty.classList.remove('hidden');
            const p = ui.empty.querySelector('p');
            if (p) p.textContent = state.search ? `لا توجد نتائج لـ "${state.search}"` : 'لا توجد عناصر هنا.';
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
                if (copyBtn) copyBtn.onclick = (e) => { e.stopPropagation(); handleCopy(mainDisplay, copyBtn); };
                card.onclick = () => { const btn = card.querySelector('.copy-icon-btn'); if (btn) handleCopy(mainDisplay, btn); };
            }

            frag.appendChild(card);
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

    // ─── Init ─────────────────────────────────────────────────────────────────
    renderSidebar();
    renderSubFilters();
    renderGrid();
});
