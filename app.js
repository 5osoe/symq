document.addEventListener('DOMContentLoaded', () => {
    
    // --- Configuration ---
    const DEBOUNCE_DELAY = 250; // Faster response
    
    // Group Definitions
    const GROUPS = {
        "الرموز": ["الكل", "التشكيل", "علامات الترقيم", "الرموز الرياضية", "الأسس والمؤشرات", "العملات"],
        "الاختصارات": ["ويندوز", "تحرير عام", "Word", "Excel", "PowerPoint", "المتصفح", "مستكشف الملفات"]
    };

    // --- Data Aggregation ---
    // Safe spread in case files are missing
    const ALL_DATA = [
        ...(typeof DATA_DIACRITICS !== 'undefined' ? DATA_DIACRITICS : []),
        ...(typeof DATA_PUNCTUATION !== 'undefined' ? DATA_PUNCTUATION : []),
        ...(typeof DATA_MATH !== 'undefined' ? DATA_MATH : []),
        ...(typeof DATA_SUPERSUB !== 'undefined' ? DATA_SUPERSUB : []),
        ...(typeof DATA_CURRENCY !== 'undefined' ? DATA_CURRENCY : []),
        ...(typeof DATA_WINDOWS !== 'undefined' ? DATA_WINDOWS : []),
        ...(typeof DATA_EDITING !== 'undefined' ? DATA_EDITING : []),
        ...(typeof DATA_WORD !== 'undefined' ? DATA_WORD : []),
        ...(typeof DATA_EXCEL !== 'undefined' ? DATA_EXCEL : []),
        ...(typeof DATA_POWERPOINT !== 'undefined' ? DATA_POWERPOINT : []),
        ...(typeof DATA_BROWSER !== 'undefined' ? DATA_BROWSER : []),
        ...(typeof DATA_EXPLORER !== 'undefined' ? DATA_EXPLORER : [])
    ];

    // --- State ---
    let state = {
        category: 'الكل',
        subCategory: 'الكل',
        search: ''
    };

    // --- Elements ---
    const ui = {
        grid: document.getElementById('symbolsGrid'),
        sidebarContent: document.getElementById('sidebarContent'),
        sidebar: document.getElementById('sidebar'),
        backdrop: document.getElementById('backdrop'),
        searchInput: document.getElementById('searchInput'),
        searchContainer: document.querySelector('.search-bar-container'),
        title: document.getElementById('activeCategoryTitle'),
        count: document.getElementById('itemCount'),
        empty: document.getElementById('emptyState'),
        mobileBtn: document.getElementById('mobileFilterBtn'),
        closeBtn: document.getElementById('closeSidebar'),
        resetBtn: document.getElementById('resetSearch'),
        contentHeader: document.querySelector('.content-header')
    };

    // Subfilter Dropdown
    let subFilterSelect = document.createElement('select');
    subFilterSelect.id = 'subCategoryFilter';
    subFilterSelect.className = 'sub-filter hidden';
    ui.contentHeader.appendChild(subFilterSelect);

    // --- Phase 3: Add Clear Button ---
    let clearBtn = document.createElement('span');
    clearBtn.innerHTML = '&times;';
    clearBtn.className = 'search-clear hidden';
    clearBtn.title = 'مسح البحث';
    ui.searchContainer.appendChild(clearBtn);

    // --- Core Logic ---

    // Debounce Function
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    function getFilteredData() {
        const query = state.search.toLowerCase().trim();
        
        return ALL_DATA.filter(item => {
            // Category Filter
            if (state.category !== 'الكل' && item.category !== state.category) return false;
            
            // Subcategory Filter
            if (state.subCategory !== 'الكل' && item.subCategory !== state.subCategory) return false;

            // Search Filter
            if (!query) return true;
            
            const text = [
                item.arabicName,
                item.englishName,
                item.symbol || '',
                item.shortcut || '',
                item.description || '',
                item.subCategory || '',
                ...(item.keywords || [])
            ].join(' ').toLowerCase();

            return text.includes(query);
        });
    }

    // --- Rendering ---

    function renderSidebar() {
        ui.sidebarContent.innerHTML = '';

        for (const [groupName, categories] of Object.entries(GROUPS)) {
            const groupHasItems = categories.some(cat => {
                if(cat === 'الكل') return true;
                return ALL_DATA.some(d => d.category === cat);
            });

            if (!groupHasItems) continue;

            const title = document.createElement('div');
            title.className = 'nav-group-title';
            title.textContent = groupName;
            ui.sidebarContent.appendChild(title);

            const ul = document.createElement('ul');
            ul.className = 'nav-list';

            categories.forEach(catName => {
                if(catName !== 'الكل' && !ALL_DATA.some(d => d.category === catName)) return;

                const li = document.createElement('li');
                li.className = 'nav-item';
                if (catName === state.category) li.classList.add('active');
                
                let count = catName === 'الكل' ? ALL_DATA.length : ALL_DATA.filter(d => d.category === catName).length;
                
                // Simplified clean item
                li.innerHTML = `<span>${catName}</span> <span>${count}</span>`;
                li.onclick = () => setCategory(catName);
                ul.appendChild(li);
            });

            ui.sidebarContent.appendChild(ul);
        }
    }

    function renderGrid() {
        const data = getFilteredData();
        
        // Update UI Info
        ui.title.textContent = state.search ? 'نتائج البحث' : state.category;
        ui.count.textContent = `${data.length} عنصر`;

        // Empty State & Grid Clear
        ui.grid.innerHTML = '';
        
        // Manage Clear Button Visibility
        if (state.search.length > 0) {
            clearBtn.classList.remove('hidden');
        } else {
            clearBtn.classList.add('hidden');
        }

        if (data.length === 0) {
            ui.empty.classList.remove('hidden');
            const emptyP = ui.empty.querySelector('p');
            if(emptyP) emptyP.textContent = state.search ? `لا توجد نتائج لـ "${state.search}"` : "لا توجد عناصر هنا.";
        } else {
            ui.empty.classList.add('hidden');
            const fragment = document.createDocumentFragment();

            data.forEach(item => {
                const card = document.createElement('div');
                card.className = 'card';
                
                const isShortcut = item.type === 'shortcut';
                const mainDisplay = isShortcut ? item.shortcut : item.symbol;
                
                // --- Phase 2: Keyboard Logic (Preserved & Styled) ---
                let keyboardHTML = '';
                if (!isShortcut && item.keyboardMethod) {
                    const k = item.keyboardMethod;
                    const hasLayout = k.layout && k.layout.trim() !== '';
                    const hasCombo = k.combination && k.combination.trim() !== '';
                    const hasAlt = k.altCode && k.altCode.trim() !== '';

                    if (hasLayout || hasCombo || hasAlt) {
                        keyboardHTML += `<div class="symbol-keyboard">`;
                        // Removed header "طريقة الكتابة" to reduce noise, kept layout simple
                        if (hasLayout) {
                            keyboardHTML += `
                            <div class="kbd-row">
                                <span class="kbd-label">التخطيط</span>
                                <span class="kbd-val">${k.layout}</span>
                            </div>`;
                        }
                        if (hasCombo) {
                            keyboardHTML += `
                            <div class="kbd-row">
                                <span class="kbd-label">مفاتيح</span>
                                <span class="kbd-val">${k.combination}</span>
                            </div>`;
                        }
                        if (hasAlt) {
                            keyboardHTML += `
                            <div class="kbd-row">
                                <span class="kbd-label">Alt</span>
                                <span class="kbd-val">${k.altCode}</span>
                            </div>`;
                        }
                        keyboardHTML += `</div>`;
                    }
                }
                // -----------------------------
                
                card.innerHTML = `
                    <div class="${isShortcut ? 'text-shortcut' : 'card-symbol'}">${mainDisplay}</div>
                    <div class="card-name-ar">${item.arabicName}</div>
                    <div class="card-name-en">${item.englishName}</div>
                    ${item.description ? `<div class="card-desc">${item.description}</div>` : '<div class="card-desc"></div>'}
                    
                    ${keyboardHTML}

                    <div class="card-footer">
                        <div class="card-cat">${item.category}</div>
                        ${item.subCategory ? `<div class="tag-sub">${item.subCategory}</div>` : ''}
                    </div>
                `;
                
                card.onclick = () => handleCopy(mainDisplay, card);
                fragment.appendChild(card);
            });

            ui.grid.appendChild(fragment);
        }
    }

    function renderSubFilters() {
        const currentData = ALL_DATA.filter(i => i.category === state.category);
        const subCats = [...new Set(currentData.map(i => i.subCategory).filter(Boolean))];

        if (subCats.length > 0 && state.category !== 'الكل') {
            subFilterSelect.innerHTML = '<option value="الكل">جميع الأقسام</option>';
            subCats.sort().forEach(sub => {
                const opt = document.createElement('option');
                opt.value = sub;
                opt.textContent = sub;
                subFilterSelect.appendChild(opt);
            });
            subFilterSelect.value = state.subCategory;
            subFilterSelect.classList.remove('hidden');
        } else {
            subFilterSelect.classList.add('hidden');
            state.subCategory = 'الكل';
        }
    }

    // --- Actions ---

    function setCategory(name) {
        state.category = name;
        state.subCategory = 'الكل';
        // Clear search when switching categories? Usually better UX to keep it or clear it.
        // Let's clear it to show the category fully.
        clearSearch(false); 
        
        renderSubFilters();
        renderSidebar();
        renderGrid();
        closeSidebar();
    }

    function clearSearch(shouldRender = true) {
        state.search = '';
        ui.searchInput.value = '';
        if(shouldRender) renderGrid();
    }

    function handleCopy(text, card) {
        navigator.clipboard.writeText(text).then(() => {
            // Refined feedback: subtle border change
            card.style.borderColor = '#22c55e'; // Green
            card.style.background = '#f0fdf4';
            setTimeout(() => {
                card.style.borderColor = '';
                card.style.background = '';
            }, 400);
        });
    }

    // --- Sidebar Handling ---
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

    // --- Event Listeners ---

    ui.searchInput.addEventListener('input', debounce((e) => {
        state.search = e.target.value;
        renderGrid();
    }, DEBOUNCE_DELAY));

    // Clear Button Action
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
        }
    });

    ui.mobileBtn.addEventListener('click', openSidebar);
    ui.closeBtn.addEventListener('click', closeSidebar);
    ui.backdrop.addEventListener('click', closeSidebar);
    
    // Reset from empty state
    ui.resetBtn.addEventListener('click', () => {
        clearSearch(false);
        setCategory('الكل');
    });
    
    subFilterSelect.addEventListener('change', (e) => {
        state.subCategory = e.target.value;
        renderGrid();
    });

    // --- Init ---
    renderSidebar();
    renderGrid();
});