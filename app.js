document.addEventListener('DOMContentLoaded', () => {

    const DEBOUNCE_DELAY = 250;

    // ── URL slug ↔ category ──────────────────────────
    const SLUG_MAP = {
        'all':'الكل','diacritics':'التشكيل','punctuation':'علامات الترقيم',
        'math':'الرموز الرياضية','supersub':'الأسس والمؤشرات','currency':'العملات',
        'windows':'ويندوز','editing':'تحرير عام','word':'Word','excel':'Excel',
        'powerpoint':'PowerPoint','browser':'المتصفح','explorer':'مستكشف الملفات',
        'photoshop':'Photoshop','illustrator':'Illustrator','vscode':'VS Code',
        'terminal':'Terminal','autocad':'AutoCAD','premiere':'Premiere',
    };
    const CAT_TO_SLUG = Object.fromEntries(Object.entries(SLUG_MAP).map(([k,v])=>[v,k]));

    // ── Translations ─────────────────────────────────
    const TR = {
        ar:{
            dir:'rtl',lang:'ar',searchPlaceholder:'بحث (مثال: نسخ، F5)...',
            browseTitle:'تصفح الأقسام',all:'الكل',
            items:n=>`${n} عنصر`,searchResults:'نتائج البحث',
            noResults:q=>q?`لا توجد نتائج لـ "${q}"`:'لا توجد عناصر هنا.',
            showAll:'عرض الكل',allSubs:'جميع الأقسام',langLabel:'EN',
            groups:{'الرموز':'الرموز','الاختصارات':'الاختصارات'},
            badges:{'tool-key':'⌨ مفتاح أداة','cmd':'⌘ أمر Command Bar','combo':'⌨ تركيبة مفاتيح'},
            kbd:{layout:'التخطيط',keys:'مفاتيح',alt:'Alt'},copySymbol:'نسخ الرمز',
        },
        en:{
            dir:'ltr',lang:'en',searchPlaceholder:'Search (e.g. copy, F5)...',
            browseTitle:'Browse Sections',all:'All',
            items:n=>`${n} item${n!==1?'s':''}`,searchResults:'Search Results',
            noResults:q=>q?`No results for "${q}"`:'Nothing here.',
            showAll:'Show All',allSubs:'All Sections',langLabel:'عر',
            groups:{'الرموز':'Symbols','الاختصارات':'Shortcuts'},
            badges:{'tool-key':'⌨ Tool Key','cmd':'⌘ Command Bar','combo':'⌨ Key Combo'},
            kbd:{layout:'Layout',keys:'Keys',alt:'Alt'},copySymbol:'Copy Symbol',
        },
    };

    // ── Groups ───────────────────────────────────────
    const GROUPS = {
        "الرموز":["الكل","التشكيل","علامات الترقيم","الرموز الرياضية","الأسس والمؤشرات","العملات"],
        "الاختصارات":["ويندوز","تحرير عام","Word","Excel","PowerPoint","المتصفح","مستكشف الملفات","Photoshop","Illustrator","VS Code","Terminal","AutoCAD","Premiere"]
    };

    // ── Data ─────────────────────────────────────────
    const ALL_DATA = [
        ...(typeof DATA_DIACRITICS  !=='undefined'?DATA_DIACRITICS:[]),
        ...(typeof DATA_PUNCTUATION !=='undefined'?DATA_PUNCTUATION:[]),
        ...(typeof DATA_MATH        !=='undefined'?DATA_MATH:[]),
        ...(typeof DATA_SUPERSUB    !=='undefined'?DATA_SUPERSUB:[]),
        ...(typeof DATA_CURRENCY    !=='undefined'?DATA_CURRENCY:[]),
        ...(typeof DATA_WINDOWS     !=='undefined'?DATA_WINDOWS:[]),
        ...(typeof DATA_EDITING     !=='undefined'?DATA_EDITING:[]),
        ...(typeof DATA_WORD        !=='undefined'?DATA_WORD:[]),
        ...(typeof DATA_EXCEL       !=='undefined'?DATA_EXCEL:[]),
        ...(typeof DATA_POWERPOINT  !=='undefined'?DATA_POWERPOINT:[]),
        ...(typeof DATA_BROWSER     !=='undefined'?DATA_BROWSER:[]),
        ...(typeof DATA_EXPLORER    !=='undefined'?DATA_EXPLORER:[]),
        ...(typeof DATA_PHOTOSHOP   !=='undefined'?DATA_PHOTOSHOP:[]),
        ...(typeof DATA_ILLUSTRATOR !=='undefined'?DATA_ILLUSTRATOR:[]),
        ...(typeof DATA_VSCODE      !=='undefined'?DATA_VSCODE:[]),
        ...(typeof DATA_TERMINAL    !=='undefined'?DATA_TERMINAL:[]),
        ...(typeof DATA_AUTOCAD     !=='undefined'?DATA_AUTOCAD:[]),
        ...(typeof DATA_PREMIERE    !=='undefined'?DATA_PREMIERE:[]),
    ];

    // ── State ────────────────────────────────────────
    let state = {category:'الكل',subCategory:'الكل',search:'',lang:'ar',dark:false};

    // ── DOM ──────────────────────────────────────────
    const ui = {
        grid:document.getElementById('symbolsGrid'),
        sidebarContent:document.getElementById('sidebarContent'),
        sidebar:document.getElementById('sidebar'),
        backdrop:document.getElementById('backdrop'),
        searchInput:document.getElementById('searchInput'),
        searchContainer:document.getElementById('searchContainer'),
        title:document.getElementById('activeCategoryTitle'),
        count:document.getElementById('itemCount'),
        empty:document.getElementById('emptyState'),
        mobileBtn:document.getElementById('mobileFilterBtn'),
        mobileSearchToggle:document.getElementById('mobileSearchToggle'),
        closeBtn:document.getElementById('closeSidebar'),
        resetBtn:document.getElementById('resetSearch'),
        backToTop:document.getElementById('backToTop'),
        contentHeader:document.querySelector('.content-header'),
        sidebarTitle:document.getElementById('sidebarTitle'),
        darkToggle:document.getElementById('darkToggle'),
        darkToggleMobile:document.getElementById('darkToggleMobile'),
        langToggle:document.getElementById('langToggle'),
        langToggleMobile:document.getElementById('langToggleMobile'),
    };

    const subFilterSelect = document.createElement('select');
    subFilterSelect.id='subCategoryFilter'; subFilterSelect.className='sub-filter hidden';
    ui.contentHeader.appendChild(subFilterSelect);

    const clearBtn = document.createElement('span');
    clearBtn.innerHTML='&times;'; clearBtn.className='search-clear hidden';
    ui.searchContainer.appendChild(clearBtn);

    // ── Icons ────────────────────────────────────────
    const ICONS = {
        copy:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`,
        check:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#22C55E" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
        moon:`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`,
        sun:`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`,
    };

    // ── Helpers ──────────────────────────────────────
    const tr=()=>TR[state.lang];
    function debounce(fn,ms){let t;return(...a)=>{clearTimeout(t);t=setTimeout(()=>fn(...a),ms);};}

    // ── Dark Mode ────────────────────────────────────
    function applyDark() {
        document.documentElement.classList.toggle('dark',state.dark);
        const ico=state.dark?ICONS.sun:ICONS.moon;
        if(ui.darkToggle)       ui.darkToggle.innerHTML=ico;
        if(ui.darkToggleMobile) ui.darkToggleMobile.innerHTML=ico;
        try{localStorage.setItem('symq-dark',state.dark?'1':'0');}catch(e){}
    }
    function toggleDark(){state.dark=!state.dark;applyDark();}

    // ── Language ─────────────────────────────────────
    function applyLang() {
        const t=tr();
        document.documentElement.lang=t.lang;
        document.documentElement.dir=t.dir;
        if(ui.searchInput)      ui.searchInput.placeholder=t.searchPlaceholder;
        if(ui.sidebarTitle)     ui.sidebarTitle.textContent=t.browseTitle;
        if(ui.resetBtn)         ui.resetBtn.textContent=t.showAll;
        if(ui.langToggle)       ui.langToggle.textContent=t.langLabel;
        if(ui.langToggleMobile) ui.langToggleMobile.textContent=t.langLabel;
        try{localStorage.setItem('symq-lang',state.lang);}catch(e){}
        renderSidebar(); renderSubFilters(); renderGrid();
    }
    function toggleLang(){state.lang=state.lang==='ar'?'en':'ar';applyLang();}

    // ── Hash Routing ─────────────────────────────────
    function catFromHash(){
        const slug=window.location.hash.replace(/^#\/?/,'').toLowerCase();
        return SLUG_MAP[slug]||'الكل';
    }
    function pushHash(cat){
        const h=`#/${CAT_TO_SLUG[cat]||'all'}`;
        if(window.location.hash!==h) history.pushState(null,'',h);
    }
    window.addEventListener('popstate',()=>{
        const cat=catFromHash();
        if(cat!==state.category){
            state.category=cat; state.subCategory='الكل'; clearSearch(false);
            renderSubFilters(); renderSidebar(); renderGrid();
            window.scrollTo({top:0,behavior:'smooth'});
        }
    });

    // ── Filter ───────────────────────────────────────
    function getFiltered(){
        const q=state.search.toLowerCase().trim();
        return ALL_DATA.filter(item=>{
            if(state.category!=='الكل'&&item.category!==state.category) return false;
            if(state.subCategory!=='الكل'&&item.subCategory!==state.subCategory) return false;
            if(!q) return true;
            return [item.arabicName,item.englishName,item.symbol||'',item.shortcut||'',
                item.description||'',item.subCategory||'',...(item.keywords||[])]
                .join(' ').toLowerCase().includes(q);
        });
    }

    // ── Render: Sidebar ──────────────────────────────
    function renderSidebar(){
        ui.sidebarContent.innerHTML='';
        const t=tr();
        for(const [grpKey,cats] of Object.entries(GROUPS)){
            if(!cats.some(c=>c==='الكل'||ALL_DATA.some(d=>d.category===c))) continue;
            const hdr=document.createElement('div'); hdr.className='nav-group-title';
            hdr.textContent=t.groups[grpKey]||grpKey; ui.sidebarContent.appendChild(hdr);
            const ul=document.createElement('ul'); ul.className='nav-list';
            cats.forEach(cat=>{
                if(cat!=='الكل'&&!ALL_DATA.some(d=>d.category===cat)) return;
                const li=document.createElement('li'); li.className='nav-item';
                if(cat===state.category) li.classList.add('active');
                const count=cat==='الكل'?ALL_DATA.length:ALL_DATA.filter(d=>d.category===cat).length;
                li.innerHTML=`<span>${cat==='الكل'?t.all:cat}</span><span>${count}</span>`;
                li.onclick=()=>setCategory(cat); ul.appendChild(li);
            });
            ui.sidebarContent.appendChild(ul);
        }
    }

    // ── Render: SubFilters ───────────────────────────
    function renderSubFilters(){
        const t=tr();
        const subs=[...new Set(ALL_DATA.filter(i=>i.category===state.category).map(i=>i.subCategory).filter(Boolean))];
        if(subs.length>0&&state.category!=='الكل'){
            subFilterSelect.innerHTML=`<option value="الكل">${t.allSubs}</option>`;
            subs.sort().forEach(s=>{const o=document.createElement('option');o.value=s;o.textContent=s;subFilterSelect.appendChild(o);});
            subFilterSelect.value=state.subCategory; subFilterSelect.classList.remove('hidden');
        } else { subFilterSelect.classList.add('hidden'); state.subCategory='الكل'; }
    }

    // ── Render: Grid ─────────────────────────────────
    function renderGrid(){
        const data=getFiltered(), t=tr();
        ui.title.textContent=state.search?t.searchResults:(state.category==='الكل'?t.all:state.category);
        ui.count.textContent=t.items(data.length);
        ui.grid.innerHTML='';
        clearBtn.classList.toggle('hidden',!state.search);
        if(!data.length){
            ui.empty.classList.remove('hidden');
            const p=ui.empty.querySelector('p'); if(p) p.textContent=t.noResults(state.search);
            return;
        }
        ui.empty.classList.add('hidden');
        const frag=document.createDocumentFragment();
        data.forEach(item=>{
            const card=document.createElement('div'); card.className='card';
            const isShortcut=item.type==='shortcut';
            const mainDisplay=isShortcut?item.shortcut:item.symbol;
            let kbdHTML='';
            if(!isShortcut&&item.keyboardMethod){
                const k=item.keyboardMethod,hl=k.layout?.trim(),hc=k.combination?.trim(),ha=k.altCode?.trim();
                if(hl||hc||ha){
                    kbdHTML=`<div class="symbol-keyboard">`;
                    if(hl) kbdHTML+=`<div class="kbd-row"><span class="kbd-label">${t.kbd.layout}</span><span class="kbd-val">${k.layout}</span></div>`;
                    if(hc) kbdHTML+=`<div class="kbd-row"><span class="kbd-label">${t.kbd.keys}</span><span class="kbd-val">${k.combination}</span></div>`;
                    if(ha) kbdHTML+=`<div class="kbd-row"><span class="kbd-label">${t.kbd.alt}</span><span class="kbd-val">${k.altCode}</span></div>`;
                    kbdHTML+=`</div>`;
                }
            }
            let badgeHTML='';
            if(isShortcut&&item.shortcutType){
                const cls={'tool-key':'badge-toolkey','cmd':'badge-cmd','combo':'badge-combo'}[item.shortcutType];
                const lbl=t.badges[item.shortcutType];
                if(cls&&lbl) badgeHTML=`<div class="shortcut-type-badge ${cls}">${lbl}</div>`;
            }
            card.innerHTML=`
                ${!isShortcut?`<button class="copy-icon-btn" title="${t.copySymbol}">${ICONS.copy}</button>`:''}
                <div class="${isShortcut?'text-shortcut':'card-symbol'}">${mainDisplay}</div>
                ${badgeHTML}
                <div class="card-name-ar">${item.arabicName}</div>
                <div class="card-name-en">${item.englishName}</div>
                ${item.description?`<div class="card-desc">${item.description}</div>`:'<div class="card-desc"></div>'}
                ${kbdHTML}
                <div class="card-footer">
                    <div class="card-cat">${item.category}</div>
                    ${item.subCategory?`<div class="tag-sub">${item.subCategory}</div>`:''}
                </div>`;
            if(!isShortcut){
                const btn=card.querySelector('.copy-icon-btn');
                if(btn) btn.onclick=e=>{e.stopPropagation();handleCopy(mainDisplay,btn);};
                card.onclick=()=>{const b=card.querySelector('.copy-icon-btn');if(b) handleCopy(mainDisplay,b);};
            }
            frag.appendChild(card);
        });
        ui.grid.appendChild(frag);
    }

    // ── Actions ──────────────────────────────────────
    function setCategory(name){
        state.category=name; state.subCategory='الكل'; clearSearch(false); pushHash(name);
        renderSubFilters(); renderSidebar(); renderGrid();
        closeSidebar(); window.scrollTo({top:0,behavior:'smooth'});
    }
    function clearSearch(render=true){state.search='';ui.searchInput.value='';if(render) renderGrid();}
    function handleCopy(text,btn){
        navigator.clipboard.writeText(text).then(()=>{
            btn.innerHTML=ICONS.check; btn.classList.add('copied');
            setTimeout(()=>{btn.innerHTML=ICONS.copy;btn.classList.remove('copied');},1500);
        });
    }
    function openSidebar(){ui.sidebar.classList.add('open');ui.backdrop.classList.add('open');document.body.style.overflow='hidden';}
    function closeSidebar(){ui.sidebar.classList.remove('open');ui.backdrop.classList.remove('open');document.body.style.overflow='';}

    // ── Events ───────────────────────────────────────
    if(ui.darkToggle)       ui.darkToggle.addEventListener('click',toggleDark);
    if(ui.darkToggleMobile) ui.darkToggleMobile.addEventListener('click',toggleDark);
    if(ui.langToggle)       ui.langToggle.addEventListener('click',toggleLang);
    if(ui.langToggleMobile) ui.langToggleMobile.addEventListener('click',toggleLang);
    ui.mobileSearchToggle.addEventListener('click',()=>{
        ui.searchContainer.classList.toggle('active');
        if(ui.searchContainer.classList.contains('active')) setTimeout(()=>ui.searchInput.focus(),100);
    });
    window.addEventListener('scroll',()=>ui.backToTop.classList.toggle('visible',window.scrollY>300),{passive:true});
    ui.backToTop.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
    ui.searchInput.addEventListener('input',debounce(e=>{state.search=e.target.value;renderGrid();},DEBOUNCE_DELAY));
    clearBtn.addEventListener('click',()=>{clearSearch();ui.searchInput.focus();});
    document.addEventListener('keydown',e=>{
        if(e.key==='/'&&document.activeElement!==ui.searchInput){e.preventDefault();ui.searchInput.focus();}
        if(e.key==='Escape'){closeSidebar();ui.searchInput.blur();if(window.innerWidth<=900) ui.searchContainer.classList.remove('active');}
    });
    ui.mobileBtn.addEventListener('click',openSidebar);
    ui.closeBtn.addEventListener('click',closeSidebar);
    ui.backdrop.addEventListener('click',closeSidebar);
    ui.resetBtn.addEventListener('click',()=>{clearSearch(false);setCategory('الكل');});
    subFilterSelect.addEventListener('change',e=>{state.subCategory=e.target.value;renderGrid();window.scrollTo({top:0,behavior:'smooth'});});

    // ── Init ─────────────────────────────────────────
    try{
        if(localStorage.getItem('symq-dark')==='1') state.dark=true;
        if(localStorage.getItem('symq-lang')==='en') state.lang='en';
    }catch(e){}
    const initCat=catFromHash();
    if(initCat!=='الكل') state.category=initCat;
    if(!window.location.hash) history.replaceState(null,'','#/all');
    applyDark();
    applyLang(); // triggers renderSidebar + renderGrid internally
    renderSubFilters();
});
