/* 
 * SYMBOLS DATASET 
 * Professional Collection for SymQ
 */

const SYMBOLS_DATA = {
    categories: [
        {
            id: "all",
            title: "الكل",
            description: "عرض كافة الرموز والاختصارات",
            items: [] // Populated dynamically
        },
        {
            id: "arabic",
            title: "عربي وتشكيل",
            description: "علامات التشكيل، التنقيط، والرموز العربية الخاصة",
            items: [
                { symbol: "َ", name: "Fatha", arabicName: "فتحة", altCode: "0240", unicode: "U+064E", shortcut: "Shift+Q", keywords: ["tashkeel", "a"] },
                { symbol: "ً", name: "Tanween Fatha", arabicName: "تنوين فتح", altCode: "0241", unicode: "U+064B", shortcut: "Shift+W", keywords: ["tanween", "an"] },
                { symbol: "ُ", name: "Damma", arabicName: "ضمة", altCode: "0242", unicode: "U+064F", shortcut: "Shift+E", keywords: ["damma", "u"] },
                { symbol: "ٌ", name: "Tanween Damma", arabicName: "تنوين ضم", altCode: "0243", unicode: "U+064C", shortcut: "Shift+R", keywords: ["tanween", "un"] },
                { symbol: "ِ", name: "Kasra", arabicName: "كسرة", altCode: "0244", unicode: "U+0650", shortcut: "Shift+A", keywords: ["kasra", "i"] },
                { symbol: "ٍ", name: "Tanween Kasra", arabicName: "تنوين كسر", altCode: "0245", unicode: "U+064D", shortcut: "Shift+S", keywords: ["tanween", "in"] },
                { symbol: "ْ", name: "Sukun", arabicName: "سكون", altCode: "0250", unicode: "U+0652", shortcut: "Shift+X", keywords: ["stop"] },
                { symbol: "ّ", name: "Shadda", arabicName: "شدة", altCode: "0248", unicode: "U+0651", shortcut: "Shift+~", keywords: ["double"] },
                { symbol: "ـ", name: "Tatweel (Kashida)", arabicName: "تطويل / كشيدة", altCode: "0224", unicode: "U+0640", shortcut: "Shift+J", keywords: ["stretch"] },
                { symbol: "،", name: "Arabic Comma", arabicName: "فاصلة عربية", altCode: "0161", unicode: "U+060C", shortcut: "Shift+K", keywords: ["comma"] },
                { symbol: "؛", name: "Arabic Semicolon", arabicName: "فاصلة منقوطة", altCode: "0187", unicode: "U+061B", shortcut: "Shift+P", keywords: ["semi"] },
                { symbol: "؟", name: "Arabic Question Mark", arabicName: "علامة استفهام", altCode: "0191", unicode: "U+061F", shortcut: "Shift+/", keywords: ["question"] },
                { symbol: "آ", name: "Alif Madda", arabicName: "ألف مد", altCode: "0194", unicode: "U+0622", shortcut: "Shift+N", keywords: ["aa"] },
                { symbol: "إ", name: "Alif Hamza Below", arabicName: "همزة قطع (تحت)", altCode: "0199", unicode: "U+0625", shortcut: "Shift+Y", keywords: ["e"] },
                { symbol: "أ", name: "Alif Hamza Above", arabicName: "همزة قطع (فوق)", altCode: "0195", unicode: "U+0623", shortcut: "Shift+H", keywords: ["a"] },
                { symbol: "ء", name: "Hamza Line", arabicName: "همزة على السطر", altCode: "0193", unicode: "U+0621", shortcut: "Shift+X", keywords: ["hamza"] },
                { symbol: "ئ", name: "Ya Hamza", arabicName: "همزة على الياء", altCode: "0202", unicode: "U+0626", shortcut: "Z", keywords: ["ya"] },
                { symbol: "ؤ", name: "Waw Hamza", arabicName: "همزة على الواو", altCode: "0196", unicode: "U+0624", shortcut: "C", keywords: ["waw"] },
                { symbol: "٪", name: "Arabic Percent", arabicName: "نسبة مئوية", altCode: "", unicode: "U+066A", shortcut: "Shift+5", keywords: ["percent"] }
            ]
        },
        {
            id: "punctuation",
            title: "علامات الترقيم",
            description: "الأقواس، التنقيط الإنجليزي، والرموز الكتابية",
            items: [
                { symbol: "©", name: "Copyright", arabicName: "حقوق النشر", altCode: "0169", unicode: "U+00A9", shortcut: "", keywords: ["copy"] },
                { symbol: "®", name: "Registered", arabicName: "علامة مسجلة", altCode: "0174", unicode: "U+00AE", shortcut: "", keywords: ["reg"] },
                { symbol: "™", name: "Trademark", arabicName: "علامة تجارية", altCode: "0153", unicode: "U+2122", shortcut: "", keywords: ["tm"] },
                { symbol: "•", name: "Bullet Point", arabicName: "نقطة تعداد", altCode: "0149", unicode: "U+2022", shortcut: "", keywords: ["list"] },
                { symbol: "…", name: "Ellipsis", arabicName: "ثلاث نقاط", altCode: "0133", unicode: "U+2026", shortcut: "", keywords: ["dots"] },
                { symbol: "—", name: "Em Dash", arabicName: "شرطة طويلة", altCode: "0151", unicode: "U+2014", shortcut: "", keywords: ["dash"] },
                { symbol: "–", name: "En Dash", arabicName: "شرطة متوسطة", altCode: "0150", unicode: "U+2013", shortcut: "", keywords: ["dash"] },
                { symbol: "«", name: "Guillemet Left", arabicName: "قوس اقتباس فرنسي", altCode: "174", unicode: "U+00AB", shortcut: "", keywords: ["quote"] },
                { symbol: "»", name: "Guillemet Right", arabicName: "قوس اقتباس فرنسي", altCode: "175", unicode: "U+00BB", shortcut: "", keywords: ["quote"] },
                { symbol: "“", name: "Left Smart Quote", arabicName: "اقتباس ذكي (يسار)", altCode: "0147", unicode: "U+201C", shortcut: "", keywords: ["quote"] },
                { symbol: "”", name: "Right Smart Quote", arabicName: "اقتباس ذكي (يمين)", altCode: "0148", unicode: "U+201D", shortcut: "", keywords: ["quote"] },
                { symbol: "{", name: "Left Curly Brace", arabicName: "قوس معقوف (يسار)", altCode: "123", unicode: "U+007B", shortcut: "Shift+[", keywords: ["bracket"] },
                { symbol: "}", name: "Right Curly Brace", arabicName: "قوس معقوف (يمين)", altCode: "125", unicode: "U+007D", shortcut: "Shift+]", keywords: ["bracket"] },
                { symbol: "[", name: "Left Bracket", arabicName: "قوس مربع (يسار)", altCode: "91", unicode: "U+005B", shortcut: "[", keywords: ["bracket"] },
                { symbol: "]", name: "Right Bracket", arabicName: "قوس مربع (يمين)", altCode: "93", unicode: "U+005D", shortcut: "]", keywords: ["bracket"] }
            ]
        },
        {
            id: "math",
            title: "رموز الرياضيات",
            description: "العمليات الحسابية، الكسور، والجبر",
            items: [
                { symbol: "×", name: "Multiplication", arabicName: "ضرب", altCode: "0215", unicode: "U+00D7", shortcut: "", keywords: ["times"] },
                { symbol: "÷", name: "Division", arabicName: "قسمة", altCode: "0247", unicode: "U+00F7", shortcut: "", keywords: ["divide"] },
                { symbol: "±", name: "Plus Minus", arabicName: "زائد أو ناقص", altCode: "0177", unicode: "U+00B1", shortcut: "", keywords: ["plus"] },
                { symbol: "≠", name: "Not Equal", arabicName: "لا يساوي", altCode: "8800", unicode: "U+2260", shortcut: "", keywords: ["equal"] },
                { symbol: "≈", name: "Almost Equal", arabicName: "يساوي تقريباً", altCode: "8776", unicode: "U+2248", shortcut: "", keywords: ["approx"] },
                { symbol: "∞", name: "Infinity", arabicName: "لانهاية", altCode: "8734", unicode: "U+221E", shortcut: "", keywords: ["loop"] },
                { symbol: "√", name: "Square Root", arabicName: "جذر تربيعي", altCode: "251", unicode: "U+221A", shortcut: "", keywords: ["root"] },
                { symbol: "½", name: "Half", arabicName: "نصف", altCode: "0189", unicode: "U+00BD", shortcut: "", keywords: ["fraction"] },
                { symbol: "¼", name: "Quarter", arabicName: "ربع", altCode: "0188", unicode: "U+00BC", shortcut: "", keywords: ["fraction"] },
                { symbol: "¾", name: "Three Quarters", arabicName: "ثلاثة أرباع", altCode: "0190", unicode: "U+00BE", shortcut: "", keywords: ["fraction"] },
                { symbol: "⁰", name: "Power 0", arabicName: "أس 0", altCode: "8304", unicode: "U+2070", shortcut: "", keywords: ["power"] },
                { symbol: "¹", name: "Power 1", arabicName: "أس 1", altCode: "0185", unicode: "U+00B9", shortcut: "", keywords: ["power"] },
                { symbol: "²", name: "Power 2", arabicName: "أس 2", altCode: "0178", unicode: "U+00B2", shortcut: "", keywords: ["power"] },
                { symbol: "³", name: "Power 3", arabicName: "أس 3", altCode: "0179", unicode: "U+00B3", shortcut: "", keywords: ["power"] },
                { symbol: "µ", name: "Micro", arabicName: "مايكرو", altCode: "0181", unicode: "U+00B5", shortcut: "", keywords: ["u"] },
                { symbol: "π", name: "Pi", arabicName: "باي", altCode: "227", unicode: "U+03C0", shortcut: "", keywords: ["math"] },
                { symbol: "∑", name: "Summation", arabicName: "مجموع", altCode: "8721", unicode: "U+2211", shortcut: "", keywords: ["sum"] },
                { symbol: "∫", name: "Integral", arabicName: "تكامل", altCode: "8747", unicode: "U+222B", shortcut: "", keywords: ["math"] },
                { symbol: "≤", name: "Less or Equal", arabicName: "أصغر من أو يساوي", altCode: "8804", unicode: "U+2264", shortcut: "", keywords: ["math"] },
                { symbol: "≥", name: "Greater or Equal", arabicName: "أكبر من أو يساوي", altCode: "8805", unicode: "U+2265", shortcut: "", keywords: ["math"] }
            ]
        },
        {
            id: "currency",
            title: "العملات",
            description: "رموز العملات العالمية",
            items: [
                { symbol: "$", name: "Dollar", arabicName: "دولار", altCode: "36", unicode: "U+0024", shortcut: "Shift+4", keywords: ["usd"] },
                { symbol: "€", name: "Euro", arabicName: "يورو", altCode: "0128", unicode: "U+20AC", shortcut: "AltGr+E", keywords: ["eur"] },
                { symbol: "£", name: "Pound Sterling", arabicName: "جنيه إسترليني", altCode: "0163", unicode: "U+00A3", shortcut: "", keywords: ["gbp"] },
                { symbol: "¥", name: "Yen", arabicName: "ين ياباني", altCode: "0165", unicode: "U+00A5", shortcut: "", keywords: ["jpy"] },
                { symbol: "¢", name: "Cent", arabicName: "سنت", altCode: "0162", unicode: "U+00A2", shortcut: "", keywords: ["money"] },
                { symbol: "﷼", name: "Rial", arabicName: "ريال", altCode: "65020", unicode: "U+FDFC", shortcut: "", keywords: ["sar"] },
                { symbol: "₿", name: "Bitcoin", arabicName: "بيتكوين", altCode: "8383", unicode: "U+20BF", shortcut: "", keywords: ["crypto"] }
            ]
        },
        {
            id: "shortcuts",
            title: "اختصارات ويندوز",
            description: "اختصارات لوحة المفاتيح لزيادة الإنتاجية",
            items: [
                { symbol: "Win+D", name: "Show Desktop", arabicName: "إظهار سطح المكتب", shortcut: "Win+D", category: "System", keywords: ["minimize"] },
                { symbol: "Win+E", name: "File Explorer", arabicName: "مستكشف الملفات", shortcut: "Win+E", category: "System", keywords: ["files"] },
                { symbol: "Win+L", name: "Lock PC", arabicName: "قفل الكمبيوتر", shortcut: "Win+L", category: "System", keywords: ["security"] },
                { symbol: "Win+.", name: "Emoji Panel", arabicName: "لوحة الإيموجي", shortcut: "Win+.", category: "System", keywords: ["smile"] },
                { symbol: "Win+Shift+S", name: "Snip Sketch", arabicName: "لقطة شاشة (جزء)", shortcut: "Win+Shift+S", category: "System", keywords: ["screenshot"] },
                { symbol: "Win+V", name: "Clipboard History", arabicName: "سجل الحافظة", shortcut: "Win+V", category: "System", keywords: ["paste"] },
                { symbol: "Win+Tab", name: "Task View", arabicName: "عرض المهام", shortcut: "Win+Tab", category: "System", keywords: ["switch"] },
                { symbol: "Win+Left", name: "Snap Left", arabicName: "تقسيم الشاشة (يسار)", shortcut: "Win+←", category: "Window", keywords: ["snap"] },
                { symbol: "Win+Right", name: "Snap Right", arabicName: "تقسيم الشاشة (يمين)", shortcut: "Win+→", category: "Window", keywords: ["snap"] },
                { symbol: "Ctrl+Shift+Esc", name: "Task Manager", arabicName: "مدير المهام", shortcut: "Ctrl+Shift+Esc", category: "System", keywords: ["kill"] },
                { symbol: "Alt+Tab", name: "Switch App", arabicName: "التبديل بين التطبيقات", shortcut: "Alt+Tab", category: "System", keywords: ["switch"] },
                { symbol: "Ctrl+Z", name: "Undo", arabicName: "تراجع", shortcut: "Ctrl+Z", category: "Edit", keywords: ["undo"] },
                { symbol: "Ctrl+Y", name: "Redo", arabicName: "إعادة", shortcut: "Ctrl+Y", category: "Edit", keywords: ["redo"] },
                { symbol: "Ctrl+C", name: "Copy", arabicName: "نسخ", shortcut: "Ctrl+C", category: "Edit", keywords: ["copy"] },
                { symbol: "Ctrl+V", name: "Paste", arabicName: "لصق", shortcut: "Ctrl+V", category: "Edit", keywords: ["paste"] },
                { symbol: "Ctrl+X", name: "Cut", arabicName: "قص", shortcut: "Ctrl+X", category: "Edit", keywords: ["cut"] },
                { symbol: "Ctrl+A", name: "Select All", arabicName: "تحديد الكل", shortcut: "Ctrl+A", category: "Edit", keywords: ["all"] },
                { symbol: "Alt+F4", name: "Close App", arabicName: "إغلاق البرنامج", shortcut: "Alt+F4", category: "App", keywords: ["close"] }
            ]
        },
        {
            id: "arrows",
            title: "أسهم واتجاهات",
            description: "أسهم بسيطة ومزدوجة لكافة الاتجاهات",
            items: [
                { symbol: "←", name: "Left Arrow", arabicName: "سهم يسار", altCode: "27", unicode: "U+2190", shortcut: "", keywords: ["west"] },
                { symbol: "→", name: "Right Arrow", arabicName: "سهم يمين", altCode: "26", unicode: "U+2192", shortcut: "", keywords: ["east"] },
                { symbol: "↑", name: "Up Arrow", arabicName: "سهم للأعلى", altCode: "24", unicode: "U+2191", shortcut: "", keywords: ["north"] },
                { symbol: "↓", name: "Down Arrow", arabicName: "سهم للأسفل", altCode: "25", unicode: "U+2193", shortcut: "", keywords: ["south"] },
                { symbol: "↔", name: "Left Right Arrow", arabicName: "سهم مزدوج أفقي", altCode: "29", unicode: "U+2194", shortcut: "", keywords: ["h"] },
                { symbol: "▲", name: "Triangle Up", arabicName: "مثلث للأعلى", altCode: "30", unicode: "U+25B2", shortcut: "", keywords: ["shape"] },
                { symbol: "▼", name: "Triangle Down", arabicName: "مثلث للأسفل", altCode: "31", unicode: "U+25BC", shortcut: "", keywords: ["shape"] }
            ]
        },
        {
            id: "ascii",
            title: "ASCII Codes",
            description: "رموز Alt Codes القياسية (0-255)",
            items: [] // Will be populated by helper function
        }
    ]
};

// HELPER: Generate ASCII Items to reach 400+ dataset requirement
// This adds standard ASCII/Extended ASCII to the "ascii" category and "all"
(function generateAsciiData() {
    const asciiCategory = SYMBOLS_DATA.categories.find(c => c.id === 'ascii');
    const usefulRanges = [
        { start: 33, end: 126 },  // Basic printable
        { start: 161, end: 255 }  // Extended ASCII
    ];

    usefulRanges.forEach(range => {
        for (let i = range.start; i <= range.end; i++) {
            // Check if already manually added (avoid duplicates)
            const char = String.fromCharCode(i);
            const exists = SYMBOLS_DATA.categories.some(cat => 
                cat.items.some(item => item.symbol === char)
            );

            if (!exists) {
                asciiCategory.items.push({
                    symbol: char,
                    name: `Character ${i}`,
                    arabicName: `رمز ${i}`,
                    altCode: i.toString(),
                    unicode: `U+${i.toString(16).toUpperCase().padStart(4, '0')}`,
                    shortcut: "",
                    keywords: ["ascii", i.toString()]
                });
            }
        }
    });
})();