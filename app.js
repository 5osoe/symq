document.addEventListener('DOMContentLoaded', () => {
    
    // --- Configuration ---
    const DEBOUNCE_DELAY = 250; 
    
    // Group Definitions
    const GROUPS = {
        "الرموز": ["الكل", "التشكيل", "علامات الترقيم", "الرموز الرياضية", "الأسس والمؤشرات", "العملات"],
        "الاختصارات": ["ويندوز", "تحرير عام", "Word", "Excel", "PowerPoint", "المتصفح", "مستكشف الملفات"]
    };

    // --- Data Aggregation ---
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
        searchContainer: document.getElementById('searchContainer'),
        title: document.getElementById('activeCategoryTitle'),
        count: document.getElementById('itemCount'),
        empty: document.getElementById('emptyState'),
        mobileBtn: document.getElementById('mobileFilterBtn'),
        mobileSearchToggle: document.getElementById('mobileSearchToggle'),
        closeBtn: document.getElementById('closeSidebar'),
        resetBtn: document.getElementById('resetSearch'),
        backToTop: document.getElementById('backToTop'),
        contentHeader: document.querySelector('.content-header')
    };

    // Subfilter Dropdown
    let subFilterSelect = document.createElement('select');
    subFilterSelect.id = 'subCategoryFilter';
    subFilterSelect.className = 'sub-filter hidden';
    ui.contentHeader.appendChild(subFilterSelect);

    // Clear Button
    let clearBtn = document.createElement('span');
    clearBtn.innerHTML = '&times;';
    clearBtn.className = 'search-clear hidden';
    clearBtn.title = 'مسح البحث';
    ui.searchContainer.appendChild(clearBtn);

    // --- Core Logic ---

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
            if (state.category !== 'الكل' && item.category !== state.category) return false;
            if (state.subCategory !== 'الكل' && item.subCategory !== state.subCategory) return false;
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
                
                li.innerHTML = `<span>${catName}</span> <span>${count}</span>`;
                li.onclick = () => setCategory(catName);
                ul.appendChild(li);
            });

            ui.sidebarContent.appendChild(ul);
        }
    }

    function renderGrid() {
        const data = getFilteredData();
        
        ui.title.textContent = state.search ? 'نتائج البحث' : state.category;
        ui.count.textContent = `${data.length} عنصر`;

        ui.grid.innerHTML = '';
        
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
                
                let keyboardHTML = '';
                if (!isShortcut && item.keyboardMethod) {
                    const k = item.keyboardMethod;
                    const hasLayout = k.layout && k.layout.trim() !== '';
                    const hasCombo = k.combination && k.combination.trim() !== '';
                    const hasAlt = k.altCode && k.altCode.trim() !== '';

                    if (hasLayout || hasCombo || hasAlt) {
                        keyboardHTML += `<div class="symbol-keyboard">`;
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

                    <div class="card-actions">
                        <button class="card-action-btn copy-btn">نسخ</button>
                        <button class="card-action-btn download-btn">تحميل</button>
                    </div>
                `;
                
                // Add event listeners for buttons
                const copyBtn = card.querySelector('.copy-btn');
                const downloadBtn = card.querySelector('.download-btn');
                
                copyBtn.onclick = (e) => {
                    e.stopPropagation();
                    handleCopy(mainDisplay, copyBtn);
                };
                
                downloadBtn.onclick = (e) => {
                    e.stopPropagation();
                    handleDownload(card, item.englishName || 'symq-card');
                };

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
        
        clearSearch(false); 
        
        renderSubFilters();
        renderSidebar();
        renderGrid();
        closeSidebar();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    function clearSearch(shouldRender = true) {
        state.search = '';
        ui.searchInput.value = '';
        if(shouldRender) renderGrid();
    }

    function handleCopy(text, btnElement) {
        navigator.clipboard.writeText(text).then(() => {
            const originalText = btnElement.textContent;
            btnElement.textContent = "تم النسخ";
            btnElement.classList.add('success');
            
            setTimeout(() => {
                btnElement.textContent = originalText;
                btnElement.classList.remove('success');
            }, 1500);
        });
    }

    function handleDownload(cardElement, fileName) {
        cardElement.classList.add('capturing');
        
        if (typeof html2canvas === 'undefined') {
            alert('خطأ: مكتبة التحميل لم يتم تحميلها بشكل صحيح.');
            cardElement.classList.remove('capturing');
            return;
        }

        html2canvas(cardElement, {
            backgroundColor: "#ffffff",
            scale: 2 // High resolution
        }).then(canvas => {
            const link = document.createElement('a');
            link.download = `${fileName.replace(/\s+/g, '-').toLowerCase()}.png`;
            link.href = canvas.toDataURL();
            link.click();
            cardElement.classList.remove('capturing');
        }).catch(err => {
            console.error(err);
            cardElement.classList.remove('capturing');
        });
    }

    // --- Sidebar Handling (Mobile Scroll Lock) ---
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

    // Mobile Search Toggle
    ui.mobileSearchToggle.addEventListener('click', () => {
        ui.searchContainer.classList.toggle('active');
        if (ui.searchContainer.classList.contains('active')) {
            setTimeout(() => ui.searchInput.focus(), 100);
        }
    });

    // Back to Top Logic (Optimized with Passive Listener)
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            ui.backToTop.classList.add('visible');
        } else {
            ui.backToTop.classList.remove('visible');
        }
    }, { passive: true });

    ui.backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Input Events
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
            if (window.innerWidth <= 900) {
                ui.searchContainer.classList.remove('active');
            }
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
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // --- Init ---
    renderSidebar();
    renderGrid();
});