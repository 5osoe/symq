
const DATA_WINDOWS = [
    // --- System & Essentials ---
    { id: "w01", type: "shortcut", shortcut: "Win + .", arabicName: "لوحة الإيموجي", englishName: "Emoji Panel", category: "ويندوز", description: "فتح لوحة الرموز التعبيرية.", keywords: ["emoji", "smile"] },
    { id: "w02", type: "shortcut", shortcut: "Win + V", arabicName: "تاريخ الحافظة", englishName: "Clipboard History", category: "ويندوز", description: "عرض المنسوخات السابقة.", keywords: ["copy", "paste", "history"] },
    { id: "w03", type: "shortcut", shortcut: "Win + D", arabicName: "سطح المكتب", englishName: "Show Desktop", category: "ويندوز", description: "إظهار/إخفاء سطح المكتب.", keywords: ["desktop", "hide"] },
    { id: "w04", type: "shortcut", shortcut: "Win + L", arabicName: "قفل الجهاز", englishName: "Lock PC", category: "ويندوز", description: "قفل الشاشة فوراً.", keywords: ["lock", "security"] },
    { id: "w05", type: "shortcut", shortcut: "Win + E", arabicName: "مستكشف الملفات", englishName: "File Explorer", category: "ويندوز", description: "فتح مستعرض الملفات.", keywords: ["files", "folder"] },
    { id: "w06", type: "shortcut", shortcut: "Win + I", arabicName: "الإعدادات", englishName: "Settings", category: "ويندوز", description: "فتح تطبيق الإعدادات.", keywords: ["config", "control"] },
    { id: "w07", type: "shortcut", shortcut: "Win + S", arabicName: "بحث ويندوز", englishName: "Windows Search", category: "ويندوز", description: "فتح شريط البحث.", keywords: ["find", "search"] },
    { id: "w08", type: "shortcut", shortcut: "Win + X", arabicName: "قائمة المشرف", englishName: "Power Menu", category: "ويندوز", description: "قائمة أدوات النظام السريعة.", keywords: ["admin", "start"] },
    { id: "w09", type: "shortcut", shortcut: "Win + R", arabicName: "تشغيل", englishName: "Run", category: "ويندوز", description: "فتح نافذة الأوامر Run.", keywords: ["cmd", "command"] },
    { id: "w10", type: "shortcut", shortcut: "Win + A", arabicName: "الإجراءات السريعة", englishName: "Action Center", category: "ويندوز", description: "فتح الإشعارات والإعدادات السريعة.", keywords: ["notify", "wifi"] },
    
    // --- Snap & Window Management ---
    { id: "w11", type: "shortcut", shortcut: "Win + ←", arabicName: "محاذاة لليسار", englishName: "Snap Left", category: "ويندوز", description: "تثبيت النافذة في النصف الأيسر.", keywords: ["snap", "move"] },
    { id: "w12", type: "shortcut", shortcut: "Win + →", arabicName: "محاذاة لليمين", englishName: "Snap Right", category: "ويندوز", description: "تثبيت النافذة في النصف الأيمن.", keywords: ["snap", "move"] },
    { id: "w13", type: "shortcut", shortcut: "Win + ↑", arabicName: "تكبير النافذة", englishName: "Maximize", category: "ويندوز", description: "ملء الشاشة بالنافذة الحالية.", keywords: ["full", "size"] },
    { id: "w14", type: "shortcut", shortcut: "Win + ↓", arabicName: "تصغير / استعادة", englishName: "Minimize/Restore", category: "ويندوز", description: "تصغير النافذة أو استعادتها.", keywords: ["down", "hide"] },
    { id: "w15", type: "shortcut", shortcut: "Win + M", arabicName: "تصغير الكل", englishName: "Minimize All", category: "ويندوز", description: "إنزال جميع النوافذ لشريط المهام.", keywords: ["desktop", "clean"] },
    { id: "w16", type: "shortcut", shortcut: "Win + Shift + M", arabicName: "استعادة النوافذ", englishName: "Restore All", category: "ويندوز", description: "فتح النوافذ المصغرة سابقاً.", keywords: ["open", "back"] },
    { id: "w17", type: "shortcut", shortcut: "Win + Home", arabicName: "تصغير ما عدا النشط", englishName: "Minimize Except Active", category: "ويندوز", description: "إخفاء كل النوافذ عدا الحالية.", keywords: ["focus", "clean"] },

    // --- Task View & Virtual Desktops ---
    { id: "w18", type: "shortcut", shortcut: "Win + Tab", arabicName: "عرض المهام", englishName: "Task View", category: "ويندوز", description: "عرض النوافذ المفتوحة وأسطح المكتب.", keywords: ["timeline", "switch"] },
    { id: "w19", type: "shortcut", shortcut: "Win + Ctrl + D", arabicName: "سطح مكتب جديد", englishName: "New Desktop", category: "ويندوز", description: "إنشاء سطح مكتب افتراضي.", keywords: ["virtual", "space"] },
    { id: "w20", type: "shortcut", shortcut: "Win + Ctrl + F4", arabicName: "إغلاق سطح المكتب", englishName: "Close Desktop", category: "ويندوز", description: "إغلاق سطح المكتب الافتراضي الحالي.", keywords: ["close", "virtual"] },
    { id: "w21", type: "shortcut", shortcut: "Win + Ctrl + →", arabicName: "السطح التالي", englishName: "Next Desktop", category: "ويندوز", description: "التبديل لسطح المكتب اليمين.", keywords: ["switch", "move"] },
    { id: "w22", type: "shortcut", shortcut: "Win + Ctrl + ←", arabicName: "السطح السابق", englishName: "Prev Desktop", category: "ويندوز", description: "التبديل لسطح المكتب اليسار.", keywords: ["switch", "move"] },

    // --- Screenshots & Snipping ---
    { id: "w23", type: "shortcut", shortcut: "Win + Shift + S", arabicName: "أداة القص", englishName: "Snip Tool", category: "ويندوز", description: "أخذ لقطة شاشة مخصصة.", keywords: ["screenshot", "capture"] },
    { id: "w24", type: "shortcut", shortcut: "PrtSc", arabicName: "لقطة شاشة", englishName: "Print Screen", category: "ويندوز", description: "نسخ صورة الشاشة للحافظة.", keywords: ["screenshot", "copy"] },
    { id: "w25", type: "shortcut", shortcut: "Win + PrtSc", arabicName: "حفظ لقطة شاشة", englishName: "Save Screenshot", category: "ويندوز", description: "حفظ لقطة الشاشة في مجلد الصور.", keywords: ["save", "file"] },
    { id: "w26", type: "shortcut", shortcut: "Alt + PrtSc", arabicName: "لقطة النافذة", englishName: "Window Shot", category: "ويندوز", description: "نسخ صورة النافذة النشطة فقط.", keywords: ["active", "capture"] },

    // --- System Utilities ---
    { id: "w27", type: "shortcut", shortcut: "Ctrl + Shift + Esc", arabicName: "مدير المهام", englishName: "Task Manager", category: "ويندوز", description: "فتح مدير المهام مباشرة.", keywords: ["process", "kill"] },
    { id: "w28", type: "shortcut", shortcut: "Win + K", arabicName: "اتصال", englishName: "Connect", category: "ويندوز", description: "فتح قائمة الاتصال بالأجهزة اللاسلكية.", keywords: ["bluetooth", "screen"] },
    { id: "w29", type: "shortcut", shortcut: "Win + P", arabicName: "العرض", englishName: "Project", category: "ويندوز", description: "إعدادات العرض والشاشات المتعددة.", keywords: ["monitor", "display"] },
    { id: "w30", type: "shortcut", shortcut: "Win + U", arabicName: "سهولة الوصول", englishName: "Accessibility", category: "ويندوز", description: "فتح إعدادات سهولة الوصول.", keywords: ["display", "audio"] },
    { id: "w31", type: "shortcut", shortcut: "Win + H", arabicName: "الإملاء الصوتي", englishName: "Dictation", category: "ويندوز", description: "بدء الكتابة بالصوت.", keywords: ["voice", "type"] },
    { id: "w32", type: "shortcut", shortcut: "Win + G", arabicName: "شريط الألعاب", englishName: "Game Bar", category: "ويندوز", description: "فتح أدوات الألعاب وتسجيل الفيديو.", keywords: ["xbox", "record"] },
    { id: "w33", type: "shortcut", shortcut: "Win + +", arabicName: "تكبير العدسة", englishName: "Magnifier Zoom In", category: "ويندوز", description: "فتح المكبر أو زيادة التقريب.", keywords: ["zoom", "accessibility"] },
    { id: "w34", type: "shortcut", shortcut: "Win + Esc", arabicName: "إغلاق العدسة", englishName: "Close Magnifier", category: "ويندوز", description: "إغلاق أداة المكبر.", keywords: ["exit", "zoom"] },

    // --- File Explorer ---
    { id: "w35", type: "shortcut", shortcut: "Alt + Enter", arabicName: "الخصائص", englishName: "Properties", category: "ويندوز", description: "فتح خصائص الملف المحدد.", keywords: ["info", "size"] },
    { id: "w36", type: "shortcut", shortcut: "F2", arabicName: "إعادة تسمية", englishName: "Rename", category: "ويندوز", description: "تغيير اسم الملف المحدد.", keywords: ["name", "file"] },
    { id: "w37", type: "shortcut", shortcut: "Ctrl + Shift + N", arabicName: "مجلد جديد", englishName: "New Folder", category: "ويندوز", description: "إنشاء مجلد جديد.", keywords: ["create", "dir"] },
    { id: "w38", type: "shortcut", shortcut: "Alt + ↑", arabicName: "المجلد الأعلى", englishName: "Up One Level", category: "ويندوز", description: "الانتقال للمجلد الأب.", keywords: ["parent", "back"] },
    { id: "w39", type: "shortcut", shortcut: "Alt + ←", arabicName: "الخلف", englishName: "Back", category: "ويندوز", description: "الرجوع للمجلد السابق.", keywords: ["history", "nav"] },
    { id: "w40", type: "shortcut", shortcut: "Alt + →", arabicName: "الأمام", englishName: "Forward", category: "ويندوز", description: "التقدم للمجلد التالي.", keywords: ["history", "nav"] },
    { id: "w41", type: "shortcut", shortcut: "Ctrl + F", arabicName: "بحث الملفات", englishName: "Search Box", category: "ويندوز", description: "تحديد شريط البحث.", keywords: ["find", "explorer"] },
    { id: "w42", type: "shortcut", shortcut: "Ctrl + N", arabicName: "نافذة جديدة", englishName: "New Window", category: "ويندوز", description: "فتح نافذة مستكشف جديدة.", keywords: ["explorer", "open"] },
    { id: "w43", type: "shortcut", shortcut: "Shift + Del", arabicName: "حذف نهائي", englishName: "Permanent Delete", category: "ويندوز", description: "حذف دون المرور بسلة المحذوفات.", keywords: ["remove", "trash"] },

    // --- Taskbar Shortcuts ---
    { id: "w44", type: "shortcut", shortcut: "Win + 1", arabicName: "تطبيق 1", englishName: "App 1", category: "ويندوز", description: "فتح التطبيق الأول في شريط المهام.", keywords: ["launch", "taskbar"] },
    { id: "w45", type: "shortcut", shortcut: "Win + 2", arabicName: "تطبيق 2", englishName: "App 2", category: "ويندوز", description: "فتح التطبيق الثاني في شريط المهام.", keywords: ["launch", "taskbar"] },
    { id: "w46", type: "shortcut", shortcut: "Win + 3", arabicName: "تطبيق 3", englishName: "App 3", category: "ويندوز", description: "فتح التطبيق الثالث في شريط المهام.", keywords: ["launch", "taskbar"] },
    { id: "w47", type: "shortcut", shortcut: "Win + T", arabicName: "تحديد شريط المهام", englishName: "Focus Taskbar", category: "ويندوز", description: "التنقل بين أيقونات شريط المهام.", keywords: ["cycle", "select"] },
    { id: "w48", type: "shortcut", shortcut: "Win + B", arabicName: "أيقونات النظام", englishName: "System Tray", category: "ويندوز", description: "تحديد منطقة الساعة والإشعارات.", keywords: ["tray", "focus"] },

    // --- Dialogs & UI ---
    { id: "w49", type: "shortcut", shortcut: "Alt + Tab", arabicName: "تبديل النوافذ", englishName: "Switch Apps", category: "ويندوز", description: "التبديل بين آخر نافذتين.", keywords: ["cycle", "recent"] },
    { id: "w50", type: "shortcut", shortcut: "Ctrl + Alt + Tab", arabicName: "مثبت التبديل", englishName: "Sticky Switch", category: "ويندوز", description: "إبقاء قائمة التبديل مفتوحة.", keywords: ["view", "apps"] },
    { id: "w51", type: "shortcut", shortcut: "Alt + F4", arabicName: "إغلاق", englishName: "Close", category: "ويندوز", description: "إغلاق التطبيق النشط.", keywords: ["quit", "exit"] },
    { id: "w52", type: "shortcut", shortcut: "Alt + Space", arabicName: "قائمة النافذة", englishName: "Window Menu", category: "ويندوز", description: "فتح قائمة التحكم بالنافذة.", keywords: ["move", "size"] },
    { id: "w53", type: "shortcut", shortcut: "F5", arabicName: "تحديث", englishName: "Refresh", category: "ويندوز", description: "تحديث النافذة النشطة.", keywords: ["reload", "update"] },
    { id: "w54", type: "shortcut", shortcut: "F11", arabicName: "ملء الشاشة", englishName: "Fullscreen", category: "ويندوز", description: "تفعيل وضع ملء الشاشة.", keywords: ["view", "browser"] },
    
    // --- Text & Input ---
    { id: "w55", type: "shortcut", shortcut: "Win + Space", arabicName: "لغة الكتابة", englishName: "Input Language", category: "ويندوز", description: "التبديل بين اللغات المثبتة.", keywords: ["lang", "keyboard"] },
    { id: "w56", type: "shortcut", shortcut: "Shift + F10", arabicName: "قائمة السياق", englishName: "Context Menu", category: "ويندوز", description: "بديل للنقر بزر الماوس الأيمن.", keywords: ["right click", "options"] },
    { id: "w57", type: "shortcut", shortcut: "Win + Ctrl + Enter", arabicName: "الراوي", englishName: "Narrator", category: "ويندوز", description: "تشغيل/إيقاف قارئ الشاشة.", keywords: ["voice", "read"] },
    { id: "w58", type: "shortcut", shortcut: "Win + Pause", arabicName: "معلومات النظام", englishName: "System Properties", category: "ويندوز", description: "عرض مواصفات الجهاز.", keywords: ["specs", "ram"] },
    { id: "w59", type: "shortcut", shortcut: "Ctrl + Scroll", arabicName: "تغيير الحجم", englishName: "Zoom", category: "ويندوز", description: "تكبير/تصغير الأيقونات أو النص.", keywords: ["size", "view"] },
    { id: "w60", type: "shortcut", shortcut: "Win + ,", arabicName: "نظرة خاطفة", englishName: "Peek Desktop", category: "ويندوز", description: "إظهار سطح المكتب مؤقتاً.", keywords: ["hide", "view"] }
];