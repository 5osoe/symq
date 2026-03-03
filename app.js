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
                
                // --- Keyboard Data Extraction ---
                let keyboardHTML = '';
                let keyboardTextValue = "-";
                let layoutValue = "-";
                let unicodeValue = null;

                if (!isShortcut && item.keyboardMethod) {
                    const k = item.keyboardMethod;
                    const hasLayout = k.layout && k.layout.trim() !== '';
                    const hasCombo = k.combination && k.combination.trim() !== '';
                    const hasAlt = k.altCode && k.altCode.trim() !== '';

                    // For HTML Display
                    if (hasLayout || hasCombo || hasAlt) {
                        keyboardHTML += `<div class="symbol-keyboard">`;
                        if (hasLayout) {
                            keyboardHTML += `<div class="kbd-row"><span class="kbd-label">التخطيط</span><span class="kbd-val">${k.layout}</span></div>`;
                            layoutValue = k.layout;
                        }
                        if (hasCombo) {
                            keyboardHTML += `<div class="kbd-row"><span class="kbd-label">مفاتيح</span><span class="kbd-val">${k.combination}</span></div>`;
                        }
                        if (hasAlt) {
                            keyboardHTML += `<div class="kbd-row"><span class="kbd-label">Alt</span><span class="kbd-val">${k.altCode}</span></div>`;
                            unicodeValue = k.altCode;
                        }
                        keyboardHTML += `</div>`;

                        // For Export (Combine keys and alt)
                        let parts = [];
                        if (k.combination) parts.push(k.combination);
                        if (k.altCode) parts.push(k.altCode);
                        if (parts.length > 0) keyboardTextValue = parts.join(" / ");
                    }
                } else if (isShortcut) {
                    // For Shortcuts, the "Symbol" IS the keyboard text essentially
                    keyboardTextValue = item.shortcut;
                }
                
                // --- Card HTML ---
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
                    // Call the New Canvas Export Function
                    exportCardCanvas({
                        symbol: mainDisplay,
                        shortcut: isShortcut ? item.shortcut : null,
                        arabicName: item.arabicName,
                        englishName: item.englishName,
                        keyboardText: keyboardTextValue,
                        layout: layoutValue,
                        category: item.category,
                        code: unicodeValue
                    }, downloadBtn);
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
        window.scrollTo({ top: 0, behavior: "smooth" });
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

    // --- Layout 2.0: Professional Canvas Export ---
    async function exportCardCanvas(data, btnElement) {
        
        // UI Feedback
        const originalText = btnElement.textContent;
        btnElement.textContent = "جاري...";
        btnElement.disabled = true;

        try {
            await document.fonts.ready;

            const size = 2200; // High resolution
            const canvas = document.createElement("canvas");
            canvas.width = size;
            canvas.height = size;

            const ctx = canvas.getContext("2d");

            // 1. Background
            ctx.fillStyle = "#ffffff";
            ctx.fillRect(0, 0, size, size);

            ctx.textAlign = "center";

            // ===== 2. SYMBOL =====
            ctx.fillStyle = "#111111";
            ctx.direction = "rtl";
            // Reduce size if text is long (e.g. shortcut)
            const mainText = data.symbol || data.shortcut;
            const fontSize = mainText.length > 5 ? 280 : 480;
            ctx.font = `bold ${fontSize}px sans-serif`;
            ctx.fillText(mainText, size / 2, 650);

            // ===== 3. ARABIC NAME =====
            ctx.font = "bold 160px 'Cairo', sans-serif";
            ctx.fillStyle = "#000000";
            ctx.fillText(data.arabicName, size / 2, 950);

            // ===== 4. ENGLISH NAME =====
            ctx.direction = "ltr";
            ctx.fillStyle = "#666666";
            ctx.font = "120px 'Cairo', sans-serif";
            ctx.fillText(data.englishName || "", size / 2, 1100);

            // ===== 5. DIVIDER =====
            ctx.strokeStyle = "#EAEAEA";
            ctx.lineWidth = 6;
            ctx.beginPath();
            ctx.moveTo(400, 1250);
            ctx.lineTo(size - 400, 1250);
            ctx.stroke();

            // ===== 6. DETAILS SECTION =====
            ctx.fillStyle = "#222222";
            ctx.font = "110px 'Cairo', sans-serif"; // Using Cairo/Sans

            // Layout (Right side)
            ctx.direction = "rtl";
            ctx.fillText("التخطيط: " + (data.layout || "-"), size - 600, 1450);

            // Category
            ctx.fillText("الفئة: " + (data.category || "-"), size - 600, 1600);

            // Keyboard (Left side) - Using Monospace for keys
            ctx.direction = "ltr";
            ctx.font = "110px 'Roboto Mono', sans-serif"; 
            ctx.fillText("Keys: " + (data.keyboardText || "-"), 600, 1450);

            // Code (if exists)
            if (data.code) {
                ctx.fillText("Code: " + data.code, 600, 1600);
            }

            // ===== 7. BRANDING =====
            ctx.fillStyle = "#E10600";
            ctx.font = "bold 100px 'Roboto Mono', monospace";
            ctx.textAlign = "center";
            ctx.fillText("SymQ", size / 2, 1950);

            // 8. Download
            const link = document.createElement("a");
            const safeName = (data.englishName || data.arabicName || 'card').replace(/\s+/g, '-').toLowerCase();
            link.download = `symq-${safeName}.png`;
            link.href = canvas.toDataURL("image/png", 1.0);
            link.click();

        } catch (err) {
            console.error(err);
            alert('حدث خطأ أثناء التصدير.');
        } finally {
            btnElement.textContent = originalText;
            btnElement.disabled = false;
        }
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

    // Mobile Search Toggle
    ui.mobileSearchToggle.addEventListener('click', () => {
        ui.searchContainer.classList.toggle('active');
        if (ui.searchContainer.classList.contains('active')) {
            setTimeout(() => ui.searchInput.focus(), 100);
        }
    });

    // Back to Top Logic
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