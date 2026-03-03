
const DATA_TERMINAL = [
    // --- التبويبات (Tabs) ---
    { id: "wt01", type: "shortcut", shortcut: "Ctrl + Shift + T", arabicName: "تبويب جديد", englishName: "New Tab", program: "Windows Terminal", category: "Terminal", subCategory: "التبويبات", description: "فتح تبويب جديد بالنوع الافتراضي.", keywords: ["tab", "new", "open"] },
    { id: "wt02", type: "shortcut", shortcut: "Ctrl + W", arabicName: "إغلاق التبويب", englishName: "Close Tab", program: "Windows Terminal", category: "Terminal", subCategory: "التبويبات", description: "إغلاق التبويب الحالي.", keywords: ["close", "tab"] },
    { id: "wt03", type: "shortcut", shortcut: "Ctrl + Shift + 1-9", arabicName: "فتح ملف شخصي", englishName: "Open Profile", program: "Windows Terminal", category: "Terminal", subCategory: "التبويبات", description: "فتح تبويب بملف شخصي محدد (PowerShell, CMD, WSL...).", keywords: ["profile", "new", "shell"] },
    { id: "wt04", type: "shortcut", shortcut: "Ctrl + Tab", arabicName: "التبويب التالي", englishName: "Next Tab", program: "Windows Terminal", category: "Terminal", subCategory: "التبويبات", description: "الانتقال للتبويب التالي.", keywords: ["next", "tab", "switch"] },
    { id: "wt05", type: "shortcut", shortcut: "Ctrl + Shift + Tab", arabicName: "التبويب السابق", englishName: "Previous Tab", program: "Windows Terminal", category: "Terminal", subCategory: "التبويبات", description: "الانتقال للتبويب السابق.", keywords: ["prev", "tab", "switch"] },
    { id: "wt06", type: "shortcut", shortcut: "Ctrl + Alt + 1-9", arabicName: "الانتقال لتبويب رقم", englishName: "Switch to Tab #", program: "Windows Terminal", category: "Terminal", subCategory: "التبويبات", description: "الانتقال مباشرة لتبويب برقمه.", keywords: ["goto", "tab", "number"] },
    { id: "wt07", type: "shortcut", shortcut: "Ctrl + Shift + D", arabicName: "تكرار التبويب", englishName: "Duplicate Tab", program: "Windows Terminal", category: "Terminal", subCategory: "التبويبات", description: "فتح تبويب جديد بنفس الإعدادات والمجلد الحالي.", keywords: ["duplicate", "tab", "same"] },

    // --- الأجزاء المنقسمة (Panes) ---
    { id: "wt08", type: "shortcut", shortcut: "Alt + Shift + -", arabicName: "تقسيم أفقي", englishName: "Split Pane Horizontal", program: "Windows Terminal", category: "Terminal", subCategory: "الأجزاء", description: "تقسيم النافذة أفقياً لجزأين.", keywords: ["split", "horizontal", "pane"] },
    { id: "wt09", type: "shortcut", shortcut: "Alt + Shift + +", arabicName: "تقسيم رأسي", englishName: "Split Pane Vertical", program: "Windows Terminal", category: "Terminal", subCategory: "الأجزاء", description: "تقسيم النافذة رأسياً لجزأين.", keywords: ["split", "vertical", "pane"] },
    { id: "wt10", type: "shortcut", shortcut: "Alt + ← / → / ↑ / ↓", arabicName: "التنقل بين الأجزاء", englishName: "Move Between Panes", program: "Windows Terminal", category: "Terminal", subCategory: "الأجزاء", description: "التنقل بين أجزاء النافذة المنقسمة.", keywords: ["pane", "navigate", "move"] },
    { id: "wt11", type: "shortcut", shortcut: "Ctrl + Shift + W", arabicName: "إغلاق الجزء", englishName: "Close Pane", program: "Windows Terminal", category: "Terminal", subCategory: "الأجزاء", description: "إغلاق الجزء النشط في التقسيم.", keywords: ["close", "pane"] },
    { id: "wt12", type: "shortcut", shortcut: "Alt + Shift + ← / → / ↑ / ↓", arabicName: "تغيير حجم الجزء", englishName: "Resize Pane", program: "Windows Terminal", category: "Terminal", subCategory: "الأجزاء", description: "تغيير حجم الجزء النشط.", keywords: ["resize", "pane", "size"] },

    // --- النسخ واللصق (Copy & Paste) ---
    { id: "wt13", type: "shortcut", shortcut: "Ctrl + C", arabicName: "نسخ النص", englishName: "Copy", program: "Windows Terminal", category: "Terminal", subCategory: "النسخ", description: "نسخ النص المحدد.", keywords: ["copy", "text"] },
    { id: "wt14", type: "shortcut", shortcut: "Ctrl + V", arabicName: "لصق النص", englishName: "Paste", program: "Windows Terminal", category: "Terminal", subCategory: "النسخ", description: "لصق النص من الحافظة.", keywords: ["paste", "text"] },
    { id: "wt15", type: "shortcut", shortcut: "Ctrl + Shift + C", arabicName: "نسخ (بديل)", englishName: "Copy (Alt)", program: "Windows Terminal", category: "Terminal", subCategory: "النسخ", description: "نسخ النص المحدد بدون إنهاء العمليات.", keywords: ["copy", "safe"] },
    { id: "wt16", type: "shortcut", shortcut: "Ctrl + Shift + V", arabicName: "لصق (بديل)", englishName: "Paste (Alt)", program: "Windows Terminal", category: "Terminal", subCategory: "النسخ", description: "لصق آمن لا ينفذ الأوامر فوراً.", keywords: ["paste", "safe"] },

    // --- البحث (Search) ---
    { id: "wt17", type: "shortcut", shortcut: "Ctrl + Shift + F", arabicName: "بحث", englishName: "Search", program: "Windows Terminal", category: "Terminal", subCategory: "البحث", description: "فتح شريط البحث في Terminal.", keywords: ["find", "search"] },
    { id: "wt18", type: "shortcut", shortcut: "F3", arabicName: "نتيجة بحث تالية", englishName: "Find Next", program: "Windows Terminal", category: "Terminal", subCategory: "البحث", description: "الانتقال للنتيجة التالية في البحث.", keywords: ["next", "find", "result"] },

    // --- التكبير والعرض (Zoom & View) ---
    { id: "wt19", type: "shortcut", shortcut: "Ctrl + +", arabicName: "تكبير الخط", englishName: "Zoom In", program: "Windows Terminal", category: "Terminal", subCategory: "العرض", description: "زيادة حجم الخط.", keywords: ["zoom", "font", "bigger"] },
    { id: "wt20", type: "shortcut", shortcut: "Ctrl + -", arabicName: "تصغير الخط", englishName: "Zoom Out", program: "Windows Terminal", category: "Terminal", subCategory: "العرض", description: "تصغير حجم الخط.", keywords: ["zoom", "font", "smaller"] },
    { id: "wt21", type: "shortcut", shortcut: "Ctrl + 0", arabicName: "إعادة الحجم الأصلي", englishName: "Reset Zoom", program: "Windows Terminal", category: "Terminal", subCategory: "العرض", description: "إعادة حجم الخط الافتراضي.", keywords: ["reset", "zoom", "default"] },
    { id: "wt22", type: "shortcut", shortcut: "F11", arabicName: "شاشة كاملة", englishName: "Full Screen", program: "Windows Terminal", category: "Terminal", subCategory: "العرض", description: "تفعيل أو إلغاء وضع الشاشة الكاملة.", keywords: ["fullscreen", "maximize"] },

    // --- أوامر الـ Shell المهمة (Shell Commands) ---
    { id: "wt23", type: "shortcut", shortcut: "Ctrl + C", arabicName: "إيقاف العملية", englishName: "Interrupt Process", program: "Windows Terminal", category: "Terminal", subCategory: "الأوامر", description: "إنهاء العملية الجارية في Terminal.", keywords: ["stop", "kill", "interrupt"] },
    { id: "wt24", type: "shortcut", shortcut: "↑ / ↓", arabicName: "تاريخ الأوامر", englishName: "Command History", program: "Windows Terminal", category: "Terminal", subCategory: "الأوامر", description: "التنقل بين الأوامر السابقة.", keywords: ["history", "prev", "next"] },
    { id: "wt25", type: "shortcut", shortcut: "Tab", arabicName: "إكمال تلقائي", englishName: "Auto Complete", program: "Windows Terminal", category: "Terminal", subCategory: "الأوامر", description: "إكمال اسم الملف أو الأمر تلقائياً.", keywords: ["autocomplete", "tab"] },
    { id: "wt26", type: "shortcut", shortcut: "Ctrl + L", arabicName: "مسح الشاشة", englishName: "Clear Screen", program: "Windows Terminal", category: "Terminal", subCategory: "الأوامر", description: "مسح كامل المحتوى الظاهر في Terminal.", keywords: ["clear", "clean", "cls"] },
    { id: "wt27", type: "shortcut", shortcut: "Ctrl + A", arabicName: "الذهاب لبداية السطر", englishName: "Go to Line Start", program: "Windows Terminal", category: "Terminal", subCategory: "الأوامر", description: "نقل المؤشر لبداية السطر الحالي.", keywords: ["start", "line", "home"] },
    { id: "wt28", type: "shortcut", shortcut: "Ctrl + E", arabicName: "الذهاب لنهاية السطر", englishName: "Go to Line End", program: "Windows Terminal", category: "Terminal", subCategory: "الأوامر", description: "نقل المؤشر لنهاية السطر.", keywords: ["end", "line"] },
    { id: "wt29", type: "shortcut", shortcut: "Ctrl + W", arabicName: "حذف الكلمة السابقة", englishName: "Delete Previous Word", program: "Windows Terminal", category: "Terminal", subCategory: "الأوامر", description: "حذف الكلمة التي قبل المؤشر.", keywords: ["delete", "word", "backspace"] },
    { id: "wt30", type: "shortcut", shortcut: "Ctrl + U", arabicName: "مسح السطر", englishName: "Clear Line", program: "Windows Terminal", category: "Terminal", subCategory: "الأوامر", description: "حذف كامل السطر الحالي.", keywords: ["clear", "line", "delete"] },
    { id: "wt31", type: "shortcut", shortcut: "Ctrl + K", arabicName: "حذف نهاية السطر", englishName: "Delete to End of Line", program: "Windows Terminal", category: "Terminal", subCategory: "الأوامر", description: "حذف النص من المؤشر حتى نهاية السطر.", keywords: ["delete", "end", "kill"] },
    { id: "wt32", type: "shortcut", shortcut: "Ctrl + R", arabicName: "بحث في التاريخ", englishName: "Reverse Search History", program: "Windows Terminal", category: "Terminal", subCategory: "الأوامر", description: "البحث في سجل الأوامر السابقة.", keywords: ["search", "history", "find"] },

    // --- الإعدادات والنافذة ---
    { id: "wt33", type: "shortcut", shortcut: "Ctrl + Shift + ,", arabicName: "فتح الإعدادات", englishName: "Open Settings", program: "Windows Terminal", category: "Terminal", subCategory: "الإعدادات", description: "فتح ملف إعدادات Terminal.", keywords: ["settings", "config"] },
    { id: "wt34", type: "shortcut", shortcut: "Ctrl + Shift + P", arabicName: "لوحة الأوامر", englishName: "Command Palette", program: "Windows Terminal", category: "Terminal", subCategory: "الإعدادات", description: "الوصول لجميع أوامر Terminal.", keywords: ["palette", "command"] },
];
