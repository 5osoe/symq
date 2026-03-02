/* 
 * SymQ Application Logic
 * Pure Vanilla JS - No Frameworks
 */

document.addEventListener('DOMContentLoaded', () => {
    App.init();
});

const App = {
    // State
    state: {
        activeCategory: 'all',
        searchQuery: '',
        allItems: [] // Flattened list for fast global search
    },

    // DOM Elements
    elements: {
        grid: document.getElementById('symbolsGrid'),
        categoriesList: document.getElementById('categoriesList'),
        globalSearch: document.getElementById('globalSearch'),
        mobileSearch: document.getElementById('mobileSearch'),
        activeTitle: document.getElementById('activeCategoryTitle'),
        activeDesc: document.getElementById('activeCategoryDesc'),
        resultCount: document.getElementById('resultCount'),
        totalCount: document.getElementById('totalCount'),
        emptyState: document.getElementById('emptyState'),
        toast: document.getElementById('toast')
    },

    // Initialization
    init() {
        this.flattenData();
        this.renderCategories();
        this.renderGrid();
        this.setupEventListeners();
        this.updateGlobalCount();
    },

    // Flatten all items into one array for easier "All" filtering
    flattenData() {
        let all = [];
        SYMBOLS_DATA.categories.forEach(cat => {
            if (cat.id !== 'all') {
                // Tag items with their category ID if needed
                const itemsWithCat = cat.items.map(item => ({...item, categoryId: cat.id}));
                all = [...all, ...itemsWithCat];
            }
        });
        this.state.allItems = all;
        
        // Link "All" category items in data object
        const allCat = SYMBOLS_DATA.categories.find(c => c.id === 'all');
        allCat.items = all;
    },

    // Render Sidebar Categories
    renderCategories() {
        this.elements.categoriesList.innerHTML = '';
        
        SYMBOLS_DATA.categories.forEach(cat => {
            const li = document.createElement('li');
            li.className = `cat-item ${cat.id === this.state.activeCategory ? 'active' : ''}`;
            li.onclick = () => this.switchCategory(cat.id);
            
            // Calculate count for this specific category
            const count = cat.items.length;

            li.innerHTML = `
                <span>${cat.title}</span>
                <span class="cat-count">${count}</span>
            `;
            
            this.elements.categoriesList.appendChild(li);
        });
    },

    // Switch Active Category
    switchCategory(id) {
        this.state.activeCategory = id;
        
        // Update UI Classes
        document.querySelectorAll('.cat-item').forEach(el => {
            el.classList.remove('active');
            if (el.innerText.includes(SYMBOLS_DATA.categories.find(c => c.id === id).title)) {
                el.classList.add('active');
            }
        });

        // Update Header Info
        const catData = SYMBOLS_DATA.categories.find(c => c.id === id);
        this.elements.activeTitle.textContent = catData.title;
        this.elements.activeDesc.textContent = catData.description;

        this.renderGrid();
    },

    // Main Filtering Logic
    getFilteredItems() {
        const catId = this.state.activeCategory;
        const query = this.state.searchQuery.toLowerCase().trim();
        
        // 1. Get items based on category
        let items = catId === 'all' 
            ? this.state.allItems 
            : SYMBOLS_DATA.categories.find(c => c.id === catId).items;

        // 2. Apply Search Filter
        if (query) {
            items = items.filter(item => {
                const searchStr = `
                    ${item.symbol} 
                    ${item.name.toLowerCase()} 
                    ${item.arabicName} 
                    ${item.altCode} 
                    ${item.shortcut.toLowerCase()} 
                    ${item.keywords ? item.keywords.join(' ') : ''}
                `.toLowerCase();
                
                return searchStr.includes(query);
            });
        }

        return items;
    },

    // Render Cards to Grid
    renderGrid() {
        const items = this.getFilteredItems();
        const fragment = document.createDocumentFragment();

        this.elements.grid.innerHTML = '';
        this.elements.resultCount.textContent = `${items.length} عنصر`;

        if (items.length === 0) {
            this.elements.grid.classList.add('hidden');
            this.elements.emptyState.classList.remove('hidden');
            return;
        } else {
            this.elements.grid.classList.remove('hidden');
            this.elements.emptyState.classList.add('hidden');
        }

        items.forEach(item => {
            const card = document.createElement('div');
            // Check if it's a "Shortcuts" type (text-heavy) or "Symbol" type
            const isShortcut = item.symbol.length > 2 && !item.symbol.startsWith('&');
            
            card.className = `card ${isShortcut ? 'is-shortcut' : ''}`;
            
            // Logic: Clicking anywhere copies
            card.onclick = () => this.copyToClipboard(item.symbol);

            card.innerHTML = `
                <div class="card-preview" dir="ltr">${item.symbol}</div>
                <div class="card-content">
                    <div class="card-title-ar">${item.arabicName}</div>
                    <div class="card-title-en">${item.name}</div>
                    
                    <div class="card-footer">
                        ${item.altCode ? `<span class="badge" title="Alt Code">Alt+${item.altCode}</span>` : ''}
                        ${item.shortcut ? `<span class="badge" title="Shortcut">${item.shortcut}</span>` : ''}
                        ${item.unicode && !isShortcut ? `<span class="badge" title="Unicode">${item.unicode}</span>` : ''}
                    </div>
                </div>
                
                <div class="copy-overlay">
                    <i class="ph ph-copy"></i>
                    <span>نسخ</span>
                </div>
            `;
            fragment.appendChild(card);
        });

        this.elements.grid.appendChild(fragment);
    },

    // Copy Action
    async copyToClipboard(text) {
        try {
            await navigator.clipboard.writeText(text);
            this.showToast();
        } catch (err) {
            console.error('Failed to copy', err);
        }
    },

    // Feedback UI
    showToast() {
        const toast = this.elements.toast;
        toast.classList.add('visible');
        setTimeout(() => {
            toast.classList.remove('visible');
        }, 2000);
    },

    // Setup Events
    setupEventListeners() {
        // Desktop Search
        this.elements.globalSearch.addEventListener('input', (e) => {
            this.state.searchQuery = e.target.value;
            this.renderGrid();
        });

        // Mobile Search
        this.elements.mobileSearch.addEventListener('input', (e) => {
            this.state.searchQuery = e.target.value;
            this.renderGrid();
        });

        // Keyboard Shortcut for Search (/)
        document.addEventListener('keydown', (e) => {
            if (e.key === '/' && document.activeElement !== this.elements.globalSearch) {
                e.preventDefault();
                this.elements.globalSearch.focus();
            }
        });
    },

    updateGlobalCount() {
        this.elements.totalCount.innerText = this.state.allItems.length;
    }
};

// Global Helpers for HTML attributes
function resetFilters() {
    document.getElementById('globalSearch').value = '';
    document.getElementById('mobileSearch').value = '';
    App.state.searchQuery = '';
    App.switchCategory('all');
    App.renderCategories(); // Reset active class
}

function copyUrl() {
    navigator.clipboard.writeText(window.location.href);
    alert('تم نسخ رابط الموقع!');
}