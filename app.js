/*
 * SYMQ APPLICATION CONTROLLER
 * Pure Vanilla JS
 */

// Configuration
const CATEGORIES = [
    { id: 'all', title: 'الكل', icon: 'squares-four', desc: 'تصفح جميع الاختصارات المتاحة.' },
    { id: 'windows', title: 'ويندوز', icon: 'windows-logo', desc: 'اختصارات نظام التشغيل لزيادة الإنتاجية.' },
    { id: 'editing', title: 'تحرير عام', icon: 'pencil-simple', desc: 'أوامر النسخ، اللصق، والتراجع الأساسية.' },
    { id: 'word', title: 'وورد', icon: 'file-doc', desc: 'تنسيق النصوص وإدارة المستندات.' },
    { id: 'excel', title: 'إكسل', icon: 'file-xls', desc: 'المعادلات، التنقل، وإدارة الجداول.' },
    { id: 'powerpoint', title: 'بوربوينت', icon: 'presentation', desc: 'إدارة الشرائح والعروض التقديمية.' },
    { id: 'browser', title: 'المتصفح', icon: 'globe', desc: 'إدارة علامات التبويب والتصفح السريع.' },
    { id: 'arabic_symbols', title: 'رموز عربية', icon: 'translate', desc: 'التشكيل وعلامات الترقيم العربية.' }
];

const app = {
    state: {
        currentCategory: 'all',
        searchQuery: '',
        allItems: []
    },

    elements: {
        categoryList: document.getElementById('categoryList'),
        mobileSelect: document.getElementById('mobileCategorySelect'),
        grid: document.getElementById('shortcutsGrid'),
        title: document.getElementById('currentCategoryTitle'),
        desc: document.getElementById('currentCategoryDesc'),
        count: document.getElementById('itemCount'),
        emptyState: document.getElementById('emptyState'),
        search: document.getElementById('searchInput'),
        toast: document.getElementById('toast')
    },

    init() {
        this.processData();
        this.renderCategories();
        this.renderGrid();
        this.setupEventListeners();
    },

    // Flatten data for easier searching
    processData() {
        let flat = [];
        Object.keys(RAW_DATA).forEach(key => {
            RAW_DATA[key].forEach(item => {
                flat.push({ ...item, categoryId: key });
            });
        });
        this.state.allItems = flat;
    },

    // Render Sidebar & Mobile Select
    renderCategories() {
        // Sidebar
        this.elements.categoryList.innerHTML = CATEGORIES.map(cat => {
            const count = cat.id === 'all' 
                ? this.state.allItems.length 
                : RAW_DATA[cat.id]?.length || 0;
                
            return `
                <li class="nav-item ${cat.id === this.state.currentCategory ? 'active' : ''}" 
                    onclick="app.setCategory('${cat.id}')">
                    <span>${cat.title}</span>
                    <span class="nav-count">${count}</span>
                </li>
            `;
        }).join('');

        // Mobile Dropdown
        this.elements.mobileSelect.innerHTML = CATEGORIES.map(cat => 
            `<option value="${cat.id}">${cat.title}</option>`
        ).join('');
    },

    // Switch Category Logic
    setCategory(id) {
        this.state.currentCategory = id;
        this.elements.mobileSelect.value = id;
        
        // Update Header
        const catInfo = CATEGORIES.find(c => c.id === id);
        this.elements.title.textContent = catInfo.title;
        this.elements.desc.textContent = catInfo.desc;

        this.renderCategories(); // Re-render to update active class
        this.renderGrid();
    },

    // Generate HTML for Keycaps (Ctrl + C becomes [Ctrl] [C])
    renderShortcutKeys(shortcutString) {
        // Split by "+" but keep special handling for actual plus symbol if needed
        const keys = shortcutString.split('+').map(k => k.trim());
        
        return `
            <div class="shortcut-display">
                ${keys.map((key, index) => `
                    <span class="kbd">${key}</span>
                    ${index < keys.length - 1 ? '<span class="kbd-separator">+</span>' : ''}
                `).join('')}
            </div>
        `;
    },

    // Main Render Function
    renderGrid() {
        const query = this.state.searchQuery.toLowerCase();
        let data = [];

        // Filter by Category
        if (this.state.currentCategory === 'all') {
            data = this.state.allItems;
        } else {
            data = RAW_DATA[this.state.currentCategory] || [];
        }

        // Filter by Search
        if (query) {
            data = data.filter(item => 
                item.arabicName.toLowerCase().includes(query) ||
                item.englishName.toLowerCase().includes(query) ||
                item.shortcut.toLowerCase().includes(query) ||
                item.description.toLowerCase().includes(query)
            );
        }

        // Update UI
        this.elements.count.textContent = data.length;
        
        if (data.length === 0) {
            this.elements.grid.classList.add('hidden');
            this.elements.emptyState.classList.remove('hidden');
        } else {
            this.elements.grid.classList.remove('hidden');
            this.elements.emptyState.classList.add('hidden');
            
            this.elements.grid.innerHTML = data.map(item => `
                <div class="card" onclick="app.copyToClipboard('${item.shortcut}')">
                    <div class="card-header">
                        ${this.renderShortcutKeys(item.shortcut)}
                    </div>
                    <div class="card-body">
                        <div class="card-title-ar">${item.arabicName}</div>
                        <div class="card-title-en">${item.englishName}</div>
                        <div class="card-desc" title="${item.description}">${item.description}</div>
                    </div>
                    <div class="card-footer">
                        <span class="program-badge badge-${item.categoryId === 'arabic_symbols' ? 'arabic' : item.categoryId}">
                            ${CATEGORIES.find(c => c.id === item.categoryId)?.title || item.categoryId}
                        </span>
                        <span class="level-badge">${item.level}</span>
                    </div>
                </div>
            `).join('');
        }
    },

    // Copy Functionality
    copyToClipboard(text) {
        navigator.clipboard.writeText(text).then(() => {
            this.elements.toast.classList.add('show');
            setTimeout(() => {
                this.elements.toast.classList.remove('show');
            }, 2000);
        });
    },

    // Search Reset
    resetSearch() {
        this.elements.search.value = '';
        this.state.searchQuery = '';
        this.setCategory('all');
    },

    // Event Listeners
    setupEventListeners() {
        // Search Input
        this.elements.search.addEventListener('input', (e) => {
            this.state.searchQuery = e.target.value;
            this.renderGrid();
        });

        // Mobile Select Change
        this.elements.mobileSelect.addEventListener('change', (e) => {
            this.setCategory(e.target.value);
        });

        // Keyboard Shortcut (/)
        document.addEventListener('keydown', (e) => {
            if (e.key === '/' && document.activeElement !== this.elements.search) {
                e.preventDefault();
                this.elements.search.focus();
            }
        });
    }
};

// Start App
document.addEventListener('DOMContentLoaded', () => {
    app.init();
});