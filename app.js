/*
 * SymQ Phase 3 (Production)
 * Modular Architecture
 */

const App = (() => {
    
    // --- State ---
    const State = {
        activeCategory: 'All',
        searchQuery: '',
        data: [],
        categories: {
            symbols: ["Arabic Diacritics", "Punctuation", "Mathematical"],
            shortcuts: ["Windows", "Editing", "Word", "Excel", "Browser"]
        }
    };

    // --- Elements ---
    const DOM = {
        gridMain: document.getElementById('gridMain'),
        gridPopular: document.getElementById('gridPopular'),
        sectionPopular: document.getElementById('sectionPopular'),
        sectionMain: document.getElementById('sectionMain'),
        mainGridTitle: document.getElementById('mainGridTitle'),
        listSymbols: document.getElementById('navSymbols'),
        listShortcuts: document.getElementById('navShortcuts'),
        title: document.getElementById('categoryTitle'),
        count: document.getElementById('itemCount'),
        emptyState: document.getElementById('emptyState'),
        searchInput: document.getElementById('searchInput'),
        sidebar: document.getElementById('sidebar'),
        mobileBtn: document.getElementById('mobileMenuBtn'),
        closeBtn: document.getElementById('closeSidebarBtn'),
        resetBtn: document.getElementById('resetSearchBtn')
    };

    // --- Init ---
    function init() {
        State.data = [...SYMBOLS_DATA, ...SHORTCUTS_DATA];
        Render.sidebar();
        filterAndRender();
        setupEvents();
    }

    // --- Logic ---
    function getFilteredItems() {
        const q = State.searchQuery.toLowerCase().trim();
        const cat = State.activeCategory;

        return State.data.filter(item => {
            // Category Filter
            const matchCat = cat === 'All' || item.category === cat;
            if(!matchCat) return false;

            // Search Filter
            if(!q) return true;
            const text = [
                item.arabicName, 
                item.englishName, 
                item.symbol || '', 
                item.shortcut || '',
                ...(item.keywords || [])
            ].join(' ').toLowerCase();
            
            return text.includes(q);
        });
    }

    function setActiveCategory(cat) {
        State.activeCategory = cat;
        State.searchQuery = ''; // Optional: Clear search on cat switch
        DOM.searchInput.value = '';
        Render.updateSidebarActive();
        filterAndRender();
        
        // Mobile UX
        if(window.innerWidth <= 900) {
            DOM.sidebar.classList.remove('open');
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function filterAndRender() {
        const items = getFilteredItems();
        const isSearch = State.searchQuery.length > 0;
        
        // Update Metadata
        DOM.title.textContent = isSearch ? `Search: "${State.searchQuery}"` : (State.activeCategory === 'All' ? 'Overview' : State.activeCategory);
        DOM.count.textContent = `${items.length} items`;

        // Split Data for "Most Used" (Only show if not searching, and category is All, Windows, or Editing)
        const showPopular = !isSearch && ['All', 'Windows', 'Editing'].includes(State.activeCategory);
        
        let popularItems = [];
        let mainItems = items;

        if (showPopular) {
            popularItems = items.filter(i => i.popular);
            mainItems = items.filter(i => !i.popular);
        }

        // Render
        if (items.length === 0) {
            DOM.sectionPopular.classList.add('hidden');
            DOM.sectionMain.classList.add('hidden');
            DOM.emptyState.classList.remove('hidden');
        } else {
            DOM.emptyState.classList.add('hidden');
            
            // Render Popular
            if (showPopular && popularItems.length > 0) {
                DOM.sectionPopular.classList.remove('hidden');
                DOM.mainGridTitle.classList.remove('hidden');
                Render.grid(DOM.gridPopular, popularItems);
            } else {
                DOM.sectionPopular.classList.add('hidden');
                DOM.mainGridTitle.classList.add('hidden');
            }

            // Render Main
            if (mainItems.length > 0) {
                DOM.sectionMain.classList.remove('hidden');
                Render.grid(DOM.gridMain, mainItems);
            } else {
                DOM.sectionMain.classList.add('hidden');
            }
        }
    }

    // --- Rendering ---
    const Render = {
        sidebar: () => {
            const buildList = (cats, container) => {
                container.innerHTML = '';
                cats.forEach(cat => {
                    const li = document.createElement('li');
                    li.className = 'nav-item';
                    li.dataset.cat = cat;
                    
                    // Calc count
                    const count = State.data.filter(i => i.category === cat).length;
                    
                    li.innerHTML = `<span>${cat}</span><span class="count-badge">${count}</span>`;
                    li.onclick = () => setActiveCategory(cat);
                    container.appendChild(li);
                });
            };

            buildList(State.categories.symbols, DOM.listSymbols);
            buildList(State.categories.shortcuts, DOM.listShortcuts);
        },

        updateSidebarActive: () => {
            document.querySelectorAll('.nav-item').forEach(el => {
                el.classList.toggle('active', el.dataset.cat === State.activeCategory);
            });
        },

        grid: (container, items) => {
            container.innerHTML = '';
            const frag = document.createDocumentFragment();

            items.forEach(item => {
                const card = document.createElement('div');
                card.className = 'card';
                card.dataset.type = item.type;

                const display = item.type === 'symbol' 
                    ? item.symbol 
                    : item.shortcut;
                
                const meta = item.type === 'symbol'
                    ? `<span class="cat-tag">${item.category}</span>`
                    : `<span class="cat-tag">${item.program}</span>`;

                card.innerHTML = `
                    <div class="display-area">${display}</div>
                    <div class="info-area">
                        <h3>${item.arabicName}</h3>
                        <p>${item.englishName}</p>
                        ${item.description ? `<p class="desc">${item.description}</p>` : ''}
                    </div>
                    <div class="meta-area">
                        ${meta}
                    </div>
                `;
                frag.appendChild(card);
            });
            container.appendChild(frag);
        }
    };

    // --- Utilities ---
    function debounce(func, wait) {
        let timeout;
        return function(...args) {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), wait);
        };
    }

    function setupEvents() {
        // Search
        DOM.searchInput.addEventListener('input', debounce((e) => {
            State.searchQuery = e.target.value;
            filterAndRender();
        }, 150)); // Fast 150ms debounce

        // Keyboard /
        document.addEventListener('keydown', (e) => {
            if(e.key === '/' && document.activeElement !== DOM.searchInput) {
                e.preventDefault();
                DOM.searchInput.focus();
            }
        });

        // Mobile Menu
        DOM.mobileBtn.addEventListener('click', () => DOM.sidebar.classList.add('open'));
        DOM.closeBtn.addEventListener('click', () => DOM.sidebar.classList.remove('open'));

        // Reset
        DOM.resetBtn.addEventListener('click', () => {
            DOM.searchInput.value = '';
            State.searchQuery = '';
            filterAndRender();
        });
    }

    return { init };

})();

// Start
document.addEventListener('DOMContentLoaded', App.init);