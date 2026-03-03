document.addEventListener('DOMContentLoaded', () => {
    
    // --- Configuration ---
    const DEBOUNCE_DELAY = 300;
    
    // Group Definitions
    const GROUPS = {
        "الرموز": ["الكل", "التشكيل", "علامات الترقيم", "رياضيات", "الأسس والمؤشرات", "العملات"],
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

        // Iterate through defined groups
        for (const [groupName, categories] of Object.entries(GROUPS)) {
            // Check if group has any items
            const groupHasItems = categories.some(cat => {
                if(cat === 'الكل') return true;
                return ALL_DATA.some(d => d.category === cat);
            });

            if (!groupHasItems) continue;

            // Group Title
            const title = document.createElement('div');
            title.className = 'nav-group-title';
            title.textContent = groupName;
            ui.sidebarContent.appendChild(title);

            // List
            const ul = document.createElement('ul');
            ul.className = 'nav-list';

            categories.forEach(catName => {
                // Skip empty categories
                if(catName !== 'الكل' && !ALL_DATA.some(d => d.category === catName)) return;

                const li = document.createElement('li');
                li.className = 'nav-item';
                if (catName === state.category) li.classList.add('active');
                
                let count = catName === 'الكل' ? ALL_DATA.length : ALL_DATA.filter(d => d.category === catName).length;
                
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

        ui.grid.innerHTML = '';
        
        if (data.length === 0) {
            ui.empty.classList.remove('hidden');
        } else {
            ui.empty.classList.add('hidden');
            const fragment = document.createDocumentFragment();

            data.forEach(item => {
                const card = document.createElement('div');
                card.className = 'card';
                
                const isShortcut = item.type === 'shortcut';
                const mainDisplay = isShortcut ? item.shortcut : item.symbol;
                
                card.innerHTML = `
                    <div class="${isShortcut ? 'text-shortcut' : 'card-symbol'}">${mainDisplay}</div>
                    <div class="card-name-ar">${item.arabicName}</div>
                    <div class="card-name-en">${item.englishName}</div>
                    ${item.description ? `<div class="card-desc">${item.description}</div>` : '<div class="card-desc"></div>'}
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
        state.search = '';
        ui.searchInput.value = '';
        
        renderSubFilters();
        renderSidebar(); // Update active state
        renderGrid();
        closeSidebar();
    }

    function handleCopy(text, card) {
        navigator.clipboard.writeText(text).then(() => {
            // Subtle feedback
            card.style.borderColor = '#22c55e'; // Green
            card.style.backgroundColor = '#f0fdf4';
            setTimeout(() => {
                card.style.borderColor = '';
                card.style.backgroundColor = '';
            }, 300);
        });
    }

    // --- Sidebar Handling ---
    function openSidebar() {
        ui.sidebar.classList.add('open');
        ui.backdrop.classList.add('open');
        document.body.style.overflow = 'hidden'; // Prevent scroll
    }

    function closeSidebar() {
        ui.sidebar.classList.remove('open');
        ui.backdrop.classList.remove('open');
        document.body.style.overflow = '';
    }

    // --- Event Listeners ---

    // Search with Debounce
    ui.searchInput.addEventListener('input', debounce((e) => {
        state.search = e.target.value;
        renderGrid();
    }, DEBOUNCE_DELAY));

    // Keyboard Shortcuts
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
    ui.resetBtn.addEventListener('click', () => setCategory('الكل'));
    
    subFilterSelect.addEventListener('change', (e) => {
        state.subCategory = e.target.value;
        renderGrid();
    });

    // --- Init ---
    renderSidebar();
    renderGrid();
});