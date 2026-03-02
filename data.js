const SYMBOLS_DATA = {
    categories: [
        {
            id: "all",
            title: "الكل",
            items: [] // Will be populated dynamically in app.js
        },
        {
            id: "arabic_diacritics",
            title: "التشكيل العربي",
            items: [
                { symbol: "َ", name: "Fatha", arabicName: "فتحة", altCode: "0240", unicode: "U+064E", keywords: ["fatha", "tashkeel", "a"] },
                { symbol: "ً", name: "Tanween Fatha", arabicName: "تنوين فتح", altCode: "0241", unicode: "U+064B", keywords: ["tanween", "an"] },
                { symbol: "ُ", name: "Damma", arabicName: "ضمة", altCode: "0242", unicode: "U+064F", keywords: ["damma", "u", "o"] },
                { symbol: "ٌ", name: "Tanween Damma", arabicName: "تنوين ضم", altCode: "0243", unicode: "U+064C", keywords: ["tanween", "un"] },
                { symbol: "ِ", name: "Kasra", arabicName: "كسرة", altCode: "0244", unicode: "U+0650", keywords: ["kasra", "i", "e"] },
                { symbol: "ٍ", name: "Tanween Kasra", arabicName: "تنوين كسر", altCode: "0245", unicode: "U+064D", keywords: ["tanween", "in"] },
                { symbol: "ْ", name: "Sukun", arabicName: "سكون", altCode: "0250", unicode: "U+0652", keywords: ["sukun", "stop"] },
                { symbol: "ّ", name: "Shadda", arabicName: "شدة", altCode: "0248", unicode: "U+0651", keywords: ["shadda", "double"] },
                { symbol: "ـ", name: "Tatweel", arabicName: "تطويل / كشيدة", altCode: "0224", unicode: "U+0640", keywords: ["kashida", "stretch"] },
                { symbol: "آ", name: "Alif Madda", arabicName: "ألف مد", altCode: "0194", unicode: "U+0622", keywords: ["madda", "aa"] },
                { symbol: "إ", name: "Alif Hamza Below", arabicName: "همزة قطع (تحت)", altCode: "0199", unicode: "U+0625", keywords: ["hamza", "e"] },
                { symbol: "أ", name: "Alif Hamza Above", arabicName: "همزة قطع (فوق)", altCode: "0195", unicode: "U+0623", keywords: ["hamza", "a"] },
                { symbol: "ء", name: "Hamza", arabicName: "همزة على السطر", altCode: "0193", unicode: "U+0621", keywords: ["hamza"] }
            ]
        },
        {
            id: "punctuation",
            title: "علامات الترقيم",
            items: [
                { symbol: "،", name: "Arabic Comma", arabicName: "فاصلة عربية", altCode: "0161", unicode: "U+060C", keywords: ["comma", "fasla"] },
                { symbol: "؛", name: "Arabic Semicolon", arabicName: "فاصلة منقوطة", altCode: "0187", unicode: "U+061B", keywords: ["semicolon"] },
                { symbol: "؟", name: "Arabic Question Mark", arabicName: "علامة استفهام", altCode: "0191", unicode: "U+061F", keywords: ["question", "mark"] },
                { symbol: "%", name: "Percent", arabicName: "نسبة مئوية", altCode: "37", unicode: "U+0025", keywords: ["percent"] },
                { symbol: "«", name: "Guillemet Left", arabicName: "قوس اقتباس أيمن", altCode: "174", unicode: "U+00AB", keywords: ["quote", "french"] },
                { symbol: "»", name: "Guillemet Right", arabicName: "قوس اقتباس أيسر", altCode: "175", unicode: "U+00BB", keywords: ["quote", "french"] },
                { symbol: "—", name: "Em Dash", arabicName: "شرطة طويلة", altCode: "0151", unicode: "U+2014", keywords: ["dash", "long"] },
                { symbol: "–", name: "En Dash", arabicName: "شرطة متوسطة", altCode: "0150", unicode: "U+2013", keywords: ["dash"] },
                { symbol: "•", name: "Bullet", arabicName: "نقطة تعداد", altCode: "0149", unicode: "U+2022", keywords: ["dot", "list"] },
                { symbol: "…", name: "Ellipsis", arabicName: "ثلاث نقاط", altCode: "0133", unicode: "U+2026", keywords: ["dots", "continuation"] }
            ]
        },
        {
            id: "math",
            title: "رموز الرياضيات",
            items: [
                { symbol: "×", name: "Multiplication", arabicName: "ضرب", altCode: "0215", unicode: "U+00D7", keywords: ["times", "multiply"] },
                { symbol: "÷", name: "Division", arabicName: "قسمة", altCode: "0247", unicode: "U+00F7", keywords: ["divide"] },
                { symbol: "±", name: "Plus-Minus", arabicName: "زائد أو ناقص", altCode: "0177", unicode: "U+00B1", keywords: ["plus", "minus"] },
                { symbol: "≠", name: "Not Equal", arabicName: "لا يساوي", altCode: "8800", unicode: "U+2260", keywords: ["equal"] },
                { symbol: "≈", name: "Almost Equal", arabicName: "يساوي تقريباً", altCode: "8776", unicode: "U+2248", keywords: ["approximation"] },
                { symbol: "∞", name: "Infinity", arabicName: "لانهاية", altCode: "8734", unicode: "U+221E", keywords: ["infinite"] },
                { symbol: "√", name: "Square Root", arabicName: "جذر تربيعي", altCode: "251", unicode: "U+221A", keywords: ["root", "radical"] },
                { symbol: "½", name: "Half", arabicName: "نصف", altCode: "0189", unicode: "U+00BD", keywords: ["fraction", "half"] },
                { symbol: "¼", name: "Quarter", arabicName: "ربع", altCode: "0188", unicode: "U+00BC", keywords: ["fraction", "quarter"] },
                { symbol: "¾", name: "Three Quarters", arabicName: "ثلاثة أرباع", altCode: "0190", unicode: "U+00BE", keywords: ["fraction"] },
                { symbol: "⁰", name: "Power 0", arabicName: "أس 0", altCode: "8304", unicode: "U+2070", keywords: ["superscript"] },
                { symbol: "¹", name: "Power 1", arabicName: "أس 1", altCode: "0185", unicode: "U+00B9", keywords: ["superscript"] },
                { symbol: "²", name: "Power 2", arabicName: "أس 2", altCode: "0178", unicode: "U+00B2", keywords: ["square", "superscript"] },
                { symbol: "³", name: "Power 3", arabicName: "أس 3", altCode: "0179", unicode: "U+00B3", keywords: ["cube", "superscript"] },
                { symbol: "µ", name: "Micro", arabicName: "مايكرو", altCode: "0181", unicode: "U+00B5", keywords: ["micro", "mu"] },
                { symbol: "π", name: "Pi", arabicName: "باي", altCode: "227", unicode: "U+03C0", keywords: ["pi", "math"] }
            ]
        },
        {
            id: "currency",
            title: "العملات",
            items: [
                { symbol: "$", name: "Dollar", arabicName: "دولار", altCode: "36", unicode: "U+0024", keywords: ["usd", "money"] },
                { symbol: "€", name: "Euro", arabicName: "يورو", altCode: "0128", unicode: "U+20AC", keywords: ["eur", "europe"] },
                { symbol: "£", name: "Pound", arabicName: "جنيه إسترليني", altCode: "0163", unicode: "U+00A3", keywords: ["gbp", "uk"] },
                { symbol: "¥", name: "Yen", arabicName: "ين ياباني", altCode: "0165", unicode: "U+00A5", keywords: ["jpy", "japan"] },
                { symbol: "¢", name: "Cent", arabicName: "سنت", altCode: "0162", unicode: "U+00A2", keywords: ["cent"] },
                { symbol: "﷼", name: "Rial", arabicName: "ريال", altCode: "65020", unicode: "U+FDFC", keywords: ["sar", "rial"] }
            ]
        },
        {
            id: "general",
            title: "رموز عامة",
            items: [
                { symbol: "©", name: "Copyright", arabicName: "حقوق النشر", altCode: "0169", unicode: "U+00A9", keywords: ["copy"] },
                { symbol: "®", name: "Registered", arabicName: "علامة مسجلة", altCode: "0174", unicode: "U+00AE", keywords: ["reg"] },
                { symbol: "™", name: "Trademark", arabicName: "علامة تجارية", altCode: "0153", unicode: "U+2122", keywords: ["tm"] },
                { symbol: "°", name: "Degree", arabicName: "درجة", altCode: "0176", unicode: "U+00B0", keywords: ["temp", "angle"] },
                { symbol: "@", name: "At", arabicName: "آت", altCode: "64", unicode: "U+0040", keywords: ["email"] },
                { symbol: "&", name: "Ampersand", arabicName: "و", altCode: "38", unicode: "U+0026", keywords: ["and"] },
                { symbol: "#", name: "Hash", arabicName: "هاشتاج / مربع", altCode: "35", unicode: "U+0023", keywords: ["tag", "number"] }
            ]
        },
        {
            id: "brackets",
            title: "الأقواس",
            items: [
                { symbol: "()", name: "Parentheses", arabicName: "أقواس دائرية", altCode: "40/41", unicode: "U+0028", keywords: ["round"] },
                { symbol: "[]", name: "Square Brackets", arabicName: "أقواس مربعة", altCode: "91/93", unicode: "U+005B", keywords: ["box"] },
                { symbol: "{}", name: "Curly Brackets", arabicName: "أقواس معقوفة", altCode: "123/125", unicode: "U+007B", keywords: ["curly", "brace"] },
                { symbol: "<>", name: "Angle Brackets", arabicName: "أقواس زاوية", altCode: "60/62", unicode: "U+003C", keywords: ["angle", "tag"] }
            ]
        },
        {
            id: "windows_shortcuts",
            title: "اختصارات ويندوز",
            items: [
                { symbol: "Ctrl+C", name: "Copy", arabicName: "نسخ", altCode: "", unicode: "", keywords: ["copy", "windows"] },
                { symbol: "Ctrl+V", name: "Paste", arabicName: "لصق", altCode: "", unicode: "", keywords: ["paste", "windows"] },
                { symbol: "Ctrl+X", name: "Cut", arabicName: "قص", altCode: "", unicode: "", keywords: ["cut", "windows"] },
                { symbol: "Ctrl+Z", name: "Undo", arabicName: "تراجع", altCode: "", unicode: "", keywords: ["undo"] },
                { symbol: "Ctrl+Y", name: "Redo", arabicName: "إعادة", altCode: "", unicode: "", keywords: ["redo"] },
                { symbol: "Ctrl+A", name: "Select All", arabicName: "تحديد الكل", altCode: "", unicode: "", keywords: ["all"] },
                { symbol: "Win+D", name: "Show Desktop", arabicName: "إظهار سطح المكتب", altCode: "", unicode: "", keywords: ["desktop"] },
                { symbol: "Win+E", name: "File Explorer", arabicName: "مستكشف الملفات", altCode: "", unicode: "", keywords: ["explorer", "my computer"] },
                { symbol: "Win+L", name: "Lock Screen", arabicName: "قفل الشاشة", altCode: "", unicode: "", keywords: ["lock"] },
                { symbol: "Win+.", name: "Emoji Panel", arabicName: "لوحة الإيموجي", altCode: "", unicode: "", keywords: ["emoji", "smile"] },
                { symbol: "Win+Shift+S", name: "Screenshot", arabicName: "لقطة شاشة جزئية", altCode: "", unicode: "", keywords: ["snip", "shot"] },
                { symbol: "Win+V", name: "Clipboard History", arabicName: "سجل الحافظة", altCode: "", unicode: "", keywords: ["history", "copy"] },
                { symbol: "Alt+Tab", name: "Switch Apps", arabicName: "التبديل بين التطبيقات", altCode: "", unicode: "", keywords: ["switch"] }
            ]
        }
    ]
};

// Function to get category by ID
function getCategory(id) {
    if (id === 'all') {
        // Flatten all items from other categories
        let allItems = [];
        SYMBOLS_DATA.categories.forEach(cat => {
            if (cat.id !== 'all') {
                allItems = [...allItems, ...cat.items];
            }
        });
        return { ...SYMBOLS_DATA.categories[0], items: allItems };
    }
    return SYMBOLS_DATA.categories.find(c => c.id === id);
}