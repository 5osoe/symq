const DATA_MACOS = [

    // ════════════════════════════════════════════
    // macOS — عام
    // ════════════════════════════════════════════
    { type: "shortcut", category: "macOS", subCategory: "عام", shortcut: "⌘ + C", arabicName: "نسخ", englishName: "Copy", description: "نسخ العنصر المحدد", shortcutType: "combo", keywords: ["copy", "نسخ"] },
    { type: "shortcut", category: "macOS", subCategory: "عام", shortcut: "⌘ + V", arabicName: "لصق", englishName: "Paste", description: "لصق المحتوى المنسوخ", shortcutType: "combo", keywords: ["paste", "لصق"] },
    { type: "shortcut", category: "macOS", subCategory: "عام", shortcut: "⌘ + X", arabicName: "قص", englishName: "Cut", description: "قص العنصر المحدد", shortcutType: "combo", keywords: ["cut", "قص"] },
    { type: "shortcut", category: "macOS", subCategory: "عام", shortcut: "⌘ + Z", arabicName: "تراجع", englishName: "Undo", description: "التراجع عن آخر إجراء", shortcutType: "combo", keywords: ["undo", "تراجع"] },
    { type: "shortcut", category: "macOS", subCategory: "عام", shortcut: "⌘ + ⇧ + Z", arabicName: "إعادة", englishName: "Redo", description: "إعادة الإجراء الملغى", shortcutType: "combo", keywords: ["redo", "إعادة"] },
    { type: "shortcut", category: "macOS", subCategory: "عام", shortcut: "⌘ + A", arabicName: "تحديد الكل", englishName: "Select All", description: "تحديد كل المحتوى", shortcutType: "combo", keywords: ["select all", "تحديد"] },
    { type: "shortcut", category: "macOS", subCategory: "عام", shortcut: "⌘ + S", arabicName: "حفظ", englishName: "Save", description: "حفظ الملف الحالي", shortcutType: "combo", keywords: ["save", "حفظ"] },
    { type: "shortcut", category: "macOS", subCategory: "عام", shortcut: "⌘ + ⇧ + S", arabicName: "حفظ باسم", englishName: "Save As", description: "حفظ الملف باسم جديد", shortcutType: "combo", keywords: ["save as", "حفظ باسم"] },
    { type: "shortcut", category: "macOS", subCategory: "عام", shortcut: "⌘ + O", arabicName: "فتح", englishName: "Open", description: "فتح ملف", shortcutType: "combo", keywords: ["open", "فتح"] },
    { type: "shortcut", category: "macOS", subCategory: "عام", shortcut: "⌘ + W", arabicName: "إغلاق النافذة", englishName: "Close Window", description: "إغلاق النافذة الحالية", shortcutType: "combo", keywords: ["close", "إغلاق"] },
    { type: "shortcut", category: "macOS", subCategory: "عام", shortcut: "⌘ + Q", arabicName: "إنهاء التطبيق", englishName: "Quit App", description: "إغلاق التطبيق كلياً", shortcutType: "combo", keywords: ["quit", "exit", "إنهاء"] },
    { type: "shortcut", category: "macOS", subCategory: "عام", shortcut: "⌘ + F", arabicName: "بحث", englishName: "Find", description: "فتح نافذة البحث", shortcutType: "combo", keywords: ["find", "search", "بحث"] },
    { type: "shortcut", category: "macOS", subCategory: "عام", shortcut: "⌘ + P", arabicName: "طباعة", englishName: "Print", description: "طباعة المستند", shortcutType: "combo", keywords: ["print", "طباعة"] },
    { type: "shortcut", category: "macOS", subCategory: "عام", shortcut: "⌘ + N", arabicName: "جديد", englishName: "New", description: "إنشاء ملف أو نافذة جديدة", shortcutType: "combo", keywords: ["new", "جديد"] },
    { type: "shortcut", category: "macOS", subCategory: "عام", shortcut: "⌘ + Tab", arabicName: "التبديل بين التطبيقات", englishName: "Switch Apps", description: "التنقل بين التطبيقات المفتوحة", shortcutType: "combo", keywords: ["switch", "apps", "تبديل"] },
    { type: "shortcut", category: "macOS", subCategory: "عام", shortcut: "⌘ + Space", arabicName: "Spotlight", englishName: "Spotlight Search", description: "فتح بحث Spotlight", shortcutType: "combo", keywords: ["spotlight", "search", "بحث"] },
    { type: "shortcut", category: "macOS", subCategory: "عام", shortcut: "⌘ + ,", arabicName: "التفضيلات", englishName: "Preferences", description: "فتح إعدادات التطبيق", shortcutType: "combo", keywords: ["preferences", "settings", "إعدادات"] },

    // ════════════════════════════════════════════
    // macOS — Finder
    // ════════════════════════════════════════════
    { type: "shortcut", category: "macOS", subCategory: "Finder", shortcut: "⌘ + Delete", arabicName: "حذف إلى المهملات", englishName: "Move to Trash", description: "نقل الملف المحدد إلى المهملات", shortcutType: "combo", keywords: ["delete", "trash", "حذف"] },
    { type: "shortcut", category: "macOS", subCategory: "Finder", shortcut: "⌘ + ⇧ + Delete", arabicName: "تفريغ المهملات", englishName: "Empty Trash", description: "تفريغ سلة المهملات", shortcutType: "combo", keywords: ["empty trash", "تفريغ"] },
    { type: "shortcut", category: "macOS", subCategory: "Finder", shortcut: "⌘ + D", arabicName: "تكرار", englishName: "Duplicate", description: "نسخ الملف المحدد", shortcutType: "combo", keywords: ["duplicate", "copy", "تكرار"] },
    { type: "shortcut", category: "macOS", subCategory: "Finder", shortcut: "⌘ + I", arabicName: "معلومات الملف", englishName: "Get Info", description: "عرض معلومات الملف أو المجلد", shortcutType: "combo", keywords: ["info", "properties", "معلومات"] },
    { type: "shortcut", category: "macOS", subCategory: "Finder", shortcut: "⌘ + ⇧ + N", arabicName: "مجلد جديد", englishName: "New Folder", description: "إنشاء مجلد جديد", shortcutType: "combo", keywords: ["new folder", "مجلد"] },
    { type: "shortcut", category: "macOS", subCategory: "Finder", shortcut: "Return", arabicName: "إعادة تسمية", englishName: "Rename", description: "إعادة تسمية الملف المحدد", shortcutType: "tool-key", keywords: ["rename", "تسمية"] },
    { type: "shortcut", category: "macOS", subCategory: "Finder", shortcut: "Space", arabicName: "معاينة سريعة", englishName: "Quick Look", description: "معاينة الملف دون فتحه", shortcutType: "tool-key", keywords: ["preview", "quick look", "معاينة"] },
    { type: "shortcut", category: "macOS", subCategory: "Finder", shortcut: "⌘ + ↑", arabicName: "الانتقال للمجلد الأعلى", englishName: "Go to Parent Folder", description: "الصعود إلى المجلد الأب", shortcutType: "combo", keywords: ["parent", "up", "folder"] },
    { type: "shortcut", category: "macOS", subCategory: "Finder", shortcut: "⌘ + ⇧ + G", arabicName: "الانتقال إلى مجلد", englishName: "Go to Folder", description: "فتح مربع الانتقال إلى مسار معين", shortcutType: "combo", keywords: ["go to", "path", "مسار"] },
    { type: "shortcut", category: "macOS", subCategory: "Finder", shortcut: "⌘ + ⇧ + H", arabicName: "الرئيسية", englishName: "Home Folder", description: "الانتقال إلى مجلد المنزل", shortcutType: "combo", keywords: ["home", "folder", "رئيسية"] },

    // ════════════════════════════════════════════
    // macOS — النظام
    // ════════════════════════════════════════════
    { type: "shortcut", category: "macOS", subCategory: "النظام", shortcut: "⌘ + ⌃ + Q", arabicName: "قفل الشاشة", englishName: "Lock Screen", description: "قفل الشاشة فوراً", shortcutType: "combo", keywords: ["lock", "screen", "قفل"] },
    { type: "shortcut", category: "macOS", subCategory: "النظام", shortcut: "⌘ + ⌃ + Power", arabicName: "إعادة تشغيل", englishName: "Force Restart", description: "إعادة تشغيل الجهاز", shortcutType: "combo", keywords: ["restart", "reboot", "إعادة"] },
    { type: "shortcut", category: "macOS", subCategory: "النظام", shortcut: "⌘ + ⇧ + 3", arabicName: "لقطة شاشة كاملة", englishName: "Full Screenshot", description: "لقطة للشاشة الكاملة وحفظها", shortcutType: "combo", keywords: ["screenshot", "capture", "لقطة"] },
    { type: "shortcut", category: "macOS", subCategory: "النظام", shortcut: "⌘ + ⇧ + 4", arabicName: "لقطة منطقة محددة", englishName: "Area Screenshot", description: "تحديد منطقة والتقاط لقطة لها", shortcutType: "combo", keywords: ["screenshot", "area", "capture"] },
    { type: "shortcut", category: "macOS", subCategory: "النظام", shortcut: "⌘ + ⇧ + 5", arabicName: "أدوات الشاشة", englishName: "Screenshot Toolbar", description: "فتح شريط أدوات لقطة الشاشة", shortcutType: "combo", keywords: ["screenshot", "toolbar", "أدوات"] },
    { type: "shortcut", category: "macOS", subCategory: "النظام", shortcut: "⌘ + ⌥ + Esc", arabicName: "إجبار على الإغلاق", englishName: "Force Quit", description: "إنهاء تطبيق متجمد", shortcutType: "combo", keywords: ["force quit", "crash", "إغلاق"] },
    { type: "shortcut", category: "macOS", subCategory: "النظام", shortcut: "F11", arabicName: "إظهار سطح المكتب", englishName: "Show Desktop", description: "إخفاء كل النوافذ وإظهار سطح المكتب", shortcutType: "tool-key", keywords: ["desktop", "hide", "سطح مكتب"] },
    { type: "shortcut", category: "macOS", subCategory: "النظام", shortcut: "⌃ + ↑", arabicName: "Mission Control", englishName: "Mission Control", description: "عرض كل النوافذ المفتوحة", shortcutType: "combo", keywords: ["mission control", "windows", "نوافذ"] },
    { type: "shortcut", category: "macOS", subCategory: "النظام", shortcut: "⌃ + ←/→", arabicName: "التنقل بين Spaces", englishName: "Switch Spaces", description: "التنقل بين مساحات العمل الافتراضية", shortcutType: "combo", keywords: ["spaces", "virtual desktop", "مساحات"] }
];
