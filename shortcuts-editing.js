
const DATA_EDITING = [
    // --- Clipboard ---
    { id: "e01", type: "shortcut", shortcut: "Ctrl + C", arabicName: "نسخ", englishName: "Copy", category: "تحرير عام", description: "نسخ النص المحدد للحافظة.", keywords: ["clone", "duplicate"] },
    { id: "e02", type: "shortcut", shortcut: "Ctrl + X", arabicName: "قص", englishName: "Cut", category: "تحرير عام", description: "نقل النص المحدد للحافظة.", keywords: ["move", "remove"] },
    { id: "e03", type: "shortcut", shortcut: "Ctrl + V", arabicName: "لصق", englishName: "Paste", category: "تحرير عام", description: "لصق المحتوى من الحافظة.", keywords: ["insert", "drop"] },
    { id: "e04", type: "shortcut", shortcut: "Ctrl + A", arabicName: "تحديد الكل", englishName: "Select All", category: "تحرير عام", description: "تحديد كامل النص أو الملفات.", keywords: ["highlight", "everything"] },
    { id: "e05", type: "shortcut", shortcut: "Insert", arabicName: "وضع الكتابة", englishName: "Overtype", category: "تحرير عام", description: "التبديل بين الحشر والاستبدال.", keywords: ["mode", "replace"] },

    // --- Undo / Redo ---
    { id: "e06", type: "shortcut", shortcut: "Ctrl + Z", arabicName: "تراجع", englishName: "Undo", category: "تحرير عام", description: "التراجع عن آخر إجراء.", keywords: ["back", "oops"] },
    { id: "e07", type: "shortcut", shortcut: "Ctrl + Y", arabicName: "إعادة", englishName: "Redo", category: "تحرير عام", description: "إعادة الإجراء المتراجع عنه.", keywords: ["forward", "repeat"] },
    { id: "e08", type: "shortcut", shortcut: "Ctrl + Shift + Z", arabicName: "إعادة (بديل)", englishName: "Redo (Alt)", category: "تحرير عام", description: "صيغة شائعة للإعادة في بعض البرامج.", keywords: ["forward", "repeat"] },

    // --- Deletion ---
    { id: "e09", type: "shortcut", shortcut: "Delete", arabicName: "حذف التالي", englishName: "Delete Next", category: "تحرير عام", description: "حذف الحرف بعد المؤشر.", keywords: ["remove", "erase"] },
    { id: "e10", type: "shortcut", shortcut: "Backspace", arabicName: "حذف السابق", englishName: "Delete Prev", category: "تحرير عام", description: "حذف الحرف قبل المؤشر.", keywords: ["remove", "erase"] },
    { id: "e11", type: "shortcut", shortcut: "Ctrl + Del", arabicName: "حذف كلمة تالية", englishName: "Delete Word Next", category: "تحرير عام", description: "حذف الكلمة بالكامل بعد المؤشر.", keywords: ["remove", "text"] },
    { id: "e12", type: "shortcut", shortcut: "Ctrl + Backspace", arabicName: "حذف كلمة سابقة", englishName: "Delete Word Prev", category: "تحرير عام", description: "حذف الكلمة بالكامل قبل المؤشر.", keywords: ["remove", "text"] },

    // --- Navigation (Basic) ---
    { id: "e13", type: "shortcut", shortcut: "← / →", arabicName: "حرف حرف", englishName: "Char Nav", category: "تحرير عام", description: "تحريك المؤشر بمقدار حرف.", keywords: ["move", "arrow"] },
    { id: "e14", type: "shortcut", shortcut: "Ctrl + ←", arabicName: "كلمة لليسار", englishName: "Word Left", category: "تحرير عام", description: "القفز كلمة كاملة لليسار.", keywords: ["jump", "fast"] },
    { id: "e15", type: "shortcut", shortcut: "Ctrl + →", arabicName: "كلمة لليمين", englishName: "Word Right", category: "تحرير عام", description: "القفز كلمة كاملة لليمين.", keywords: ["jump", "fast"] },
    { id: "e16", type: "shortcut", shortcut: "Home", arabicName: "بداية السطر", englishName: "Line Start", category: "تحرير عام", description: "الانتقال لأول السطر الحالي.", keywords: ["start", "bol"] },
    { id: "e17", type: "shortcut", shortcut: "End", arabicName: "نهاية السطر", englishName: "Line End", category: "تحرير عام", description: "الانتقال لآخر السطر الحالي.", keywords: ["finish", "eol"] },
    { id: "e18", type: "shortcut", shortcut: "Ctrl + Home", arabicName: "بداية المستند", englishName: "Doc Start", category: "تحرير عام", description: "الانتقال لأول الملف.", keywords: ["top", "start"] },
    { id: "e19", type: "shortcut", shortcut: "Ctrl + End", arabicName: "نهاية المستند", englishName: "Doc End", category: "تحرير عام", description: "الانتقال لآخر الملف.", keywords: ["bottom", "finish"] },
    { id: "e20", type: "shortcut", shortcut: "Page Up", arabicName: "صفحة لأعلى", englishName: "Page Up", category: "تحرير عام", description: "الصعود بمقدار شاشة كاملة.", keywords: ["scroll", "up"] },
    { id: "e21", type: "shortcut", shortcut: "Page Down", arabicName: "صفحة لأسفل", englishName: "Page Down", category: "تحرير عام", description: "النزول بمقدار شاشة كاملة.", keywords: ["scroll", "down"] },

    // --- Selection (Highlighting) ---
    { id: "e22", type: "shortcut", shortcut: "Shift + ←/→", arabicName: "تحديد أحرف", englishName: "Select Char", category: "تحرير عام", description: "تحديد النص حرفاً حرفاً.", keywords: ["highlight", "text"] },
    { id: "e23", type: "shortcut", shortcut: "Ctrl + Shift + ←", arabicName: "تحديد كلمة (يسار)", englishName: "Select Word L", category: "تحرير عام", description: "تحديد كلمة كاملة لليسار.", keywords: ["highlight", "fast"] },
    { id: "e24", type: "shortcut", shortcut: "Ctrl + Shift + →", arabicName: "تحديد كلمة (يمين)", englishName: "Select Word R", category: "تحرير عام", description: "تحديد كلمة كاملة لليمين.", keywords: ["highlight", "fast"] },
    { id: "e25", type: "shortcut", shortcut: "Shift + Home", arabicName: "تحديد للبداية", englishName: "Select to Start", category: "تحرير عام", description: "تحديد من المؤشر لبداية السطر.", keywords: ["highlight", "line"] },
    { id: "e26", type: "shortcut", shortcut: "Shift + End", arabicName: "تحديد للنهاية", englishName: "Select to End", category: "تحرير عام", description: "تحديد من المؤشر لنهاية السطر.", keywords: ["highlight", "line"] },
    { id: "e27", type: "shortcut", shortcut: "Ctrl + Shift + Home", arabicName: "تحديد لأول الملف", englishName: "Select to Top", category: "تحرير عام", description: "تحديد كل شيء حتى البداية.", keywords: ["highlight", "all"] },
    { id: "e28", type: "shortcut", shortcut: "Ctrl + Shift + End", arabicName: "تحديد لآخر الملف", englishName: "Select to Bottom", category: "تحرير عام", description: "تحديد كل شيء حتى النهاية.", keywords: ["highlight", "all"] },

    // --- Search & Find ---
    { id: "e29", type: "shortcut", shortcut: "Ctrl + F", arabicName: "بحث", englishName: "Find", category: "تحرير عام", description: "البحث عن نص في المستند.", keywords: ["search", "look"] },
    { id: "e30", type: "shortcut", shortcut: "Ctrl + H", arabicName: "استبدال / تأريخ", englishName: "Replace / History", category: "تحرير عام", description: "البحث والاستبدال أو فتح السجل.", keywords: ["change", "swap"] },
    { id: "e31", type: "shortcut", shortcut: "F3", arabicName: "البحث التالي", englishName: "Find Next", category: "تحرير عام", description: "الانتقال للنتيجة التالية.", keywords: ["next", "search"] },
    { id: "e32", type: "shortcut", shortcut: "Shift + F3", arabicName: "البحث السابق", englishName: "Find Prev", category: "تحرير عام", description: "العودة للنتيجة السابقة.", keywords: ["back", "search"] },

    // --- File Operations ---
    { id: "e33", type: "shortcut", shortcut: "Ctrl + S", arabicName: "حفظ", englishName: "Save", category: "تحرير عام", description: "حفظ التغييرات في الملف.", keywords: ["write", "disk"] },
    { id: "e34", type: "shortcut", shortcut: "Ctrl + Shift + S", arabicName: "حفظ باسم", englishName: "Save As", category: "تحرير عام", description: "حفظ نسخة جديدة.", keywords: ["duplicate", "copy"] },
    { id: "e35", type: "shortcut", shortcut: "Ctrl + O", arabicName: "فتح", englishName: "Open", category: "تحرير عام", description: "فتح ملف موجود.", keywords: ["load", "file"] },
    { id: "e36", type: "shortcut", shortcut: "Ctrl + N", arabicName: "جديد", englishName: "New", category: "تحرير عام", description: "إنشاء ملف جديد.", keywords: ["create", "blank"] },
    { id: "e37", type: "shortcut", shortcut: "Ctrl + P", arabicName: "طباعة", englishName: "Print", category: "تحرير عام", description: "فتح نافذة الطباعة.", keywords: ["paper", "hardcopy"] },
    { id: "e38", type: "shortcut", shortcut: "Ctrl + W", arabicName: "إغلاق النافذة", englishName: "Close Window", category: "تحرير عام", description: "إغلاق الملف أو التبويب الحالي.", keywords: ["exit", "tab"] },

    // --- Formatting (Basic) ---
    { id: "e39", type: "shortcut", shortcut: "Ctrl + B", arabicName: "عريض", englishName: "Bold", category: "تحرير عام", description: "تغميق الخط.", keywords: ["weight", "strong"] },
    { id: "e40", type: "shortcut", shortcut: "Ctrl + I", arabicName: "مائل", englishName: "Italic", category: "تحرير عام", description: "إمالة الخط.", keywords: ["emphasis", "style"] },
    { id: "e41", type: "shortcut", shortcut: "Ctrl + U", arabicName: "تسطير", englishName: "Underline", category: "تحرير عام", description: "وضع خط تحت النص.", keywords: ["line", "style"] },
    
    // --- Browser/Tab Controls (Common in Editors too) ---
    { id: "e42", type: "shortcut", shortcut: "Ctrl + T", arabicName: "تبويب جديد", englishName: "New Tab", category: "تحرير عام", description: "فتح لسان جديد.", keywords: ["browser", "plus"] },
    { id: "e43", type: "shortcut", shortcut: "Ctrl + Shift + T", arabicName: "استعادة التبويب", englishName: "Reopen Tab", category: "تحرير عام", description: "فتح آخر تبويب مغلق.", keywords: ["undo", "browser"] },
    { id: "e44", type: "shortcut", shortcut: "Ctrl + Tab", arabicName: "التبويب التالي", englishName: "Next Tab", category: "تحرير عام", description: "التنقل للتبويب الأيسر.", keywords: ["switch", "cycle"] },
    { id: "e45", type: "shortcut", shortcut: "Ctrl + Shift + Tab", arabicName: "التبويب السابق", englishName: "Prev Tab", category: "تحرير عام", description: "التنقل للتبويب الأيمن.", keywords: ["switch", "cycle"] },
    { id: "e46", type: "shortcut", shortcut: "Ctrl + L", arabicName: "شريط العنوان", englishName: "Address Bar", category: "تحرير عام", description: "تحديد الرابط أو المسار.", keywords: ["url", "link"] },
    { id: "e47", type: "shortcut", shortcut: "Ctrl + D", arabicName: "إضافة للمفضلة", englishName: "Bookmark", category: "تحرير عام", description: "حفظ الصفحة الحالية.", keywords: ["favorite", "star"] },
    { id: "e48", type: "shortcut", shortcut: "Ctrl + R", arabicName: "تحديث", englishName: "Reload", category: "تحرير عام", description: "إعادة تحميل الصفحة.", keywords: ["refresh", "f5"] },

    // --- Language & Misc ---
    { id: "e49", type: "shortcut", shortcut: "Alt + Shift", arabicName: "لغة", englishName: "Language", category: "تحرير عام", description: "تبديل لغة لوحة المفاتيح.", keywords: ["input", "arabic"] },
    { id: "e50", type: "shortcut", shortcut: "Esc", arabicName: "إلغاء", englishName: "Escape", category: "تحرير عام", description: "الخروج من القوائم أو الإلغاء.", keywords: ["cancel", "exit"] },
    { id: "e51", type: "shortcut", shortcut: "Ctrl + Esc", arabicName: "قائمة ابدأ", englishName: "Start Menu", category: "تحرير عام", description: "فتح قائمة ابدأ (بديل Win).", keywords: ["windows", "system"] },
    { id: "e52", type: "shortcut", shortcut: "Ctrl + Shift + Esc", arabicName: "مدير المهام", englishName: "Task Manager", category: "تحرير عام", description: "فتح مدير المهام فوراً.", keywords: ["kill", "process"] },
    { id: "e53", type: "shortcut", shortcut: "Alt + F8", arabicName: "إظهار كلمة السر", englishName: "Reveal Password", category: "تحرير عام", description: "إظهار كلمة المرور في شاشة الدخول.", keywords: ["login", "view"] },
    { id: "e54", type: "shortcut", shortcut: "Shift + Insert", arabicName: "لصق (بديل)", englishName: "Paste (Alt)", category: "تحرير عام", description: "طريقة قديمة للصق النص.", keywords: ["insert", "drop"] },
    { id: "e55", type: "shortcut", shortcut: "Ctrl + Insert", arabicName: "نسخ (بديل)", englishName: "Copy (Alt)", category: "تحرير عام", description: "طريقة قديمة لنسخ النص.", keywords: ["clone", "c"] },
    { id: "e56", type: "shortcut", shortcut: "Shift + Delete", arabicName: "قص (بديل)", englishName: "Cut (Alt)", category: "تحرير عام", description: "طريقة قديمة لقص النص.", keywords: ["move", "x"] },
    { id: "e57", type: "shortcut", shortcut: "Alt + Left", arabicName: "للخلف", englishName: "Back", category: "تحرير عام", description: "الرجوع في المتصفح.", keywords: ["history", "browser"] },
    { id: "e58", type: "shortcut", shortcut: "Alt + Right", arabicName: "للأمام", englishName: "Forward", category: "تحرير عام", description: "التقدم في المتصفح.", keywords: ["history", "browser"] },
    { id: "e59", type: "shortcut", shortcut: "Ctrl + K", arabicName: "رابط تشعبي", englishName: "Hyperlink", category: "تحرير عام", description: "إدراج رابط على النص المحدد.", keywords: ["url", "web"] },
    { id: "e60", type: "shortcut", shortcut: "Ctrl + Enter", arabicName: "إرسال / صفحة", englishName: "Send / Break", category: "تحرير عام", description: "إرسال نموذج أو فاصل صفحات.", keywords: ["submit", "page"] }
];