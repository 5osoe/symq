document.addEventListener('DOMContentLoaded', () => {
    init();
});

// State
let currentCategory = 'all';
let searchQuery = '';

// DOM Elements
const categoryListEl = document.getElementById('categoryList');
const symbolsGridEl = document.getElementById('symbolsGrid');
const searchInputEl = document.getElementById('searchInput');
const currentCategoryTitleEl = document.getElementById('currentCategoryTitle');
const itemCountEl = document.getElementById('itemCount');
const noResultsEl = document.getElementById('noResults');
const toastEl = document.getElementById('toast');

// Initialize
function init() {
    renderCategories();
    renderCards('all');

    // Event Listeners
    searchInputEl.addEventListener('input', (e) => {
        searchQuery = e.target.value.toLowerCase();
        renderCards(currentCategory);
    });
}

// Render Category Tabs
function renderCategories() {
    categoryListEl.innerHTML = '';
    
    SYMBOLS_DATA.categories.forEach(cat => {
        const li = document.createElement('li');
        const btn = document.createElement('button');
        btn.className = `cat-btn ${cat.id === currentCategory ? 'active' : ''}`;
        
        // Count items (real-time count logic)
        let count = 0;
        if(cat.id === 'all') {
             SYMBOLS_DATA.categories.forEach(c => { if(c.id !== 'all') count += c.items.length; });
        } else {
            count = cat.items.length;
        }

        btn.innerHTML = `
            <span>${cat.title}</span>
            <span style="opacity: 0.6; font-size: 0.8em">${count}</span>
        `;
        
        btn.onclick = () => {
            // Update Active State
            document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Switch Category
            currentCategory = cat.id;
            // Clear Search when switching category? No, let's keep search persistent
            // but we might want to reset if it feels better. Keeping it makes filtering easier.
            renderCards(currentCategory);
        };

        li.appendChild(btn);
        categoryListEl.appendChild(li);
    });
}

// Render Cards
function renderCards(catId) {
    symbolsGridEl.innerHTML = '';
    
    // Get Data
    const categoryData = getCategory(catId);
    let items = categoryData.items;

    // Update Title
    currentCategoryTitleEl.textContent = categoryData.title;

    // Filter Logic
    if (searchQuery) {
        items = items.filter(item => {
            return (
                item.symbol.toLowerCase().includes(searchQuery) ||
                item.name.toLowerCase().includes(searchQuery) ||
                item.arabicName.includes(searchQuery) ||
                item.altCode.includes(searchQuery) ||
                (item.unicode && item.unicode.toLowerCase().includes(searchQuery)) ||
                (item.keywords && item.keywords.some(k => k.toLowerCase().includes(searchQuery)))
            );
        });
        currentCategoryTitleEl.textContent = `نتائج البحث في: ${categoryData.title}`;
    }

    // Update Count
    itemCountEl.textContent = `${items.length} عنصر`;

    // Handle Empty
    if (items.length === 0) {
        noResultsEl.classList.remove('hidden');
    } else {
        noResultsEl.classList.add('hidden');
    }

    // Generate HTML
    items.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        card.onclick = () => copyToClipboard(item.symbol);

        // Check if it's a shortcut (text) or a symbol
        const isShortcut = item.symbol.length > 2 && !item.symbol.startsWith('&'); 
        
        card.innerHTML = `
            <div class="card-preview ${isShortcut ? 'is-shortcut' : ''}" dir="ltr">
                ${item.symbol}
            </div>
            <div class="card-info">
                <div class="card-name">${item.arabicName}</div>
                <div class="card-sub">${item.name}</div>
                
                <div class="card-meta">
                    ${item.altCode ? `<span class="meta-tag" title="Alt Code">Alt+${item.altCode}</span>` : ''}
                    ${item.unicode ? `<span class="meta-tag" title="Unicode">${item.unicode}</span>` : ''}
                </div>
            </div>
            
            <div class="copy-hint">
                <i class="ph ph-copy"></i>
                <span>نسخ</span>
            </div>
        `;
        
        symbolsGridEl.appendChild(card);
    });
}

// Copy Function
function copyToClipboard(text) {
    // If it's a shortcut description like "Ctrl+C", we usually don't copy that text to clipboard as a symbol
    // But for this app, copying the text "Ctrl+C" might be useful, or we just notify.
    // Let's assume we copy whatever is in the symbol field.
    
    navigator.clipboard.writeText(text).then(() => {
        showToast();
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}

// Toast Notification
function showToast() {
    toastEl.classList.add('show');
    setTimeout(() => {
        toastEl.classList.remove('show');
    }, 2000);
}

// Share Link (Mockup)
function copyLink() {
    alert('تم نسخ رابط الموقع!');
}