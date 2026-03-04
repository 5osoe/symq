const DATA_LINUX = [

    // ════════════════════════════════════════════
    // لينكس — عام (مشترك بين معظم التوزيعات)
    // ════════════════════════════════════════════
    { type: "shortcut", category: "Linux", subCategory: "عام", shortcut: "Ctrl + C", arabicName: "نسخ", englishName: "Copy", description: "نسخ العنصر المحدد", shortcutType: "combo", keywords: ["copy", "نسخ"] },
    { type: "shortcut", category: "Linux", subCategory: "عام", shortcut: "Ctrl + V", arabicName: "لصق", englishName: "Paste", description: "لصق المحتوى المنسوخ", shortcutType: "combo", keywords: ["paste", "لصق"] },
    { type: "shortcut", category: "Linux", subCategory: "عام", shortcut: "Ctrl + X", arabicName: "قص", englishName: "Cut", description: "قص العنصر المحدد", shortcutType: "combo", keywords: ["cut", "قص"] },
    { type: "shortcut", category: "Linux", subCategory: "عام", shortcut: "Ctrl + Z", arabicName: "تراجع", englishName: "Undo", description: "التراجع عن آخر إجراء", shortcutType: "combo", keywords: ["undo", "تراجع"] },
    { type: "shortcut", category: "Linux", subCategory: "عام", shortcut: "Ctrl + Y", arabicName: "إعادة", englishName: "Redo", description: "إعادة الإجراء الملغى", shortcutType: "combo", keywords: ["redo", "إعادة"] },
    { type: "shortcut", category: "Linux", subCategory: "عام", shortcut: "Ctrl + A", arabicName: "تحديد الكل", englishName: "Select All", description: "تحديد كل المحتوى", shortcutType: "combo", keywords: ["select all", "تحديد"] },
    { type: "shortcut", category: "Linux", subCategory: "عام", shortcut: "Ctrl + S", arabicName: "حفظ", englishName: "Save", description: "حفظ الملف الحالي", shortcutType: "combo", keywords: ["save", "حفظ"] },
    { type: "shortcut", category: "Linux", subCategory: "عام", shortcut: "Ctrl + F", arabicName: "بحث", englishName: "Find", description: "فتح نافذة البحث", shortcutType: "combo", keywords: ["find", "search", "بحث"] },
    { type: "shortcut", category: "Linux", subCategory: "عام", shortcut: "Ctrl + W", arabicName: "إغلاق النافذة", englishName: "Close Window", description: "إغلاق النافذة الحالية", shortcutType: "combo", keywords: ["close", "إغلاق"] },
    { type: "shortcut", category: "Linux", subCategory: "عام", shortcut: "Alt + F4", arabicName: "إغلاق التطبيق", englishName: "Close App", description: "إغلاق التطبيق النشط", shortcutType: "combo", keywords: ["close", "quit", "إغلاق"] },
    { type: "shortcut", category: "Linux", subCategory: "عام", shortcut: "Alt + Tab", arabicName: "التبديل بين النوافذ", englishName: "Switch Windows", description: "التنقل بين النوافذ المفتوحة", shortcutType: "combo", keywords: ["switch", "windows", "تبديل"] },
    { type: "shortcut", category: "Linux", subCategory: "عام", shortcut: "Ctrl + Alt + T", arabicName: "فتح الطرفية", englishName: "Open Terminal", description: "فتح نافذة الطرفية (Terminal)", shortcutType: "combo", keywords: ["terminal", "طرفية", "console"] },
    { type: "shortcut", category: "Linux", subCategory: "عام", shortcut: "Super", arabicName: "قائمة التطبيقات", englishName: "App Menu / Activities", description: "فتح قائمة التطبيقات أو Activities", shortcutType: "tool-key", keywords: ["menu", "apps", "activities", "قائمة"] },
    { type: "shortcut", category: "Linux", subCategory: "عام", shortcut: "PrtSc", arabicName: "لقطة شاشة", englishName: "Screenshot", description: "التقاط لقطة للشاشة الكاملة", shortcutType: "tool-key", keywords: ["screenshot", "print screen", "لقطة"] },
    { type: "shortcut", category: "Linux", subCategory: "عام", shortcut: "Shift + PrtSc", arabicName: "لقطة منطقة محددة", englishName: "Area Screenshot", description: "تحديد منطقة والتقاط لقطة لها", shortcutType: "combo", keywords: ["screenshot", "area", "لقطة"] },

    // ════════════════════════════════════════════
    // لينكس — مدير النوافذ (GNOME / KDE)
    // ════════════════════════════════════════════
    { type: "shortcut", category: "Linux", subCategory: "مدير النوافذ", shortcut: "Super + D", arabicName: "إظهار سطح المكتب", englishName: "Show Desktop", description: "إخفاء كل النوافذ وإظهار سطح المكتب", shortcutType: "combo", keywords: ["desktop", "hide", "سطح مكتب"] },
    { type: "shortcut", category: "Linux", subCategory: "مدير النوافذ", shortcut: "Super + L", arabicName: "قفل الشاشة", englishName: "Lock Screen", description: "قفل الشاشة فوراً", shortcutType: "combo", keywords: ["lock", "screen", "قفل"] },
    { type: "shortcut", category: "Linux", subCategory: "مدير النوافذ", shortcut: "Super + ↑", arabicName: "تكبير النافذة", englishName: "Maximize Window", description: "تكبير النافذة النشطة", shortcutType: "combo", keywords: ["maximize", "window", "تكبير"] },
    { type: "shortcut", category: "Linux", subCategory: "مدير النوافذ", shortcut: "Super + ↓", arabicName: "تصغير النافذة", englishName: "Restore / Minimize", description: "استعادة أو تصغير النافذة", shortcutType: "combo", keywords: ["minimize", "restore", "تصغير"] },
    { type: "shortcut", category: "Linux", subCategory: "مدير النوافذ", shortcut: "Super + ←", arabicName: "محاذاة النافذة يساراً", englishName: "Snap Left", description: "تثبيت النافذة على الجانب الأيسر", shortcutType: "combo", keywords: ["snap", "left", "split"] },
    { type: "shortcut", category: "Linux", subCategory: "مدير النوافذ", shortcut: "Super + →", arabicName: "محاذاة النافذة يميناً", englishName: "Snap Right", description: "تثبيت النافذة على الجانب الأيمن", shortcutType: "combo", keywords: ["snap", "right", "split"] },
    { type: "shortcut", category: "Linux", subCategory: "مدير النوافذ", shortcut: "Ctrl + Alt + ←/→", arabicName: "التنقل بين مساحات العمل", englishName: "Switch Workspace", description: "التنقل بين مساحات العمل الافتراضية", shortcutType: "combo", keywords: ["workspace", "virtual", "مساحات"] },
    { type: "shortcut", category: "Linux", subCategory: "مدير النوافذ", shortcut: "Ctrl + Alt + Del", arabicName: "مدير المهام", englishName: "Task Manager", description: "فتح مدير المهام أو نافذة الخروج", shortcutType: "combo", keywords: ["task manager", "مهام", "إغلاق"] },

    // ════════════════════════════════════════════
    // لينكس — الطرفية (Terminal)
    // ════════════════════════════════════════════
    { type: "shortcut", category: "Linux", subCategory: "الطرفية", shortcut: "Ctrl + C", arabicName: "إيقاف الأمر", englishName: "Kill Process", description: "إيقاف الأمر أو العملية الجارية", shortcutType: "combo", keywords: ["kill", "stop", "إيقاف"] },
    { type: "shortcut", category: "Linux", subCategory: "الطرفية", shortcut: "Ctrl + D", arabicName: "خروج / نهاية الإدخال", englishName: "Exit / EOF", description: "إغلاق الجلسة الحالية أو إشارة نهاية الملف", shortcutType: "combo", keywords: ["exit", "logout", "eof", "خروج"] },
    { type: "shortcut", category: "Linux", subCategory: "الطرفية", shortcut: "Ctrl + L", arabicName: "مسح الشاشة", englishName: "Clear Screen", description: "مسح محتوى الطرفية (مثل أمر clear)", shortcutType: "combo", keywords: ["clear", "مسح", "clean"] },
    { type: "shortcut", category: "Linux", subCategory: "الطرفية", shortcut: "Ctrl + R", arabicName: "بحث في السجل", englishName: "Reverse Search History", description: "البحث العكسي في سجل الأوامر السابقة", shortcutType: "combo", keywords: ["history", "search", "سجل"] },
    { type: "shortcut", category: "Linux", subCategory: "الطرفية", shortcut: "↑ / ↓", arabicName: "التنقل في السجل", englishName: "Navigate History", description: "التنقل بين الأوامر السابقة", shortcutType: "tool-key", keywords: ["history", "previous", "سجل"] },
    { type: "shortcut", category: "Linux", subCategory: "الطرفية", shortcut: "Tab", arabicName: "إكمال تلقائي", englishName: "Autocomplete", description: "إكمال اسم الأمر أو الملف تلقائياً", shortcutType: "tool-key", keywords: ["tab complete", "autocomplete", "إكمال"] },
    { type: "shortcut", category: "Linux", subCategory: "الطرفية", shortcut: "Ctrl + A", arabicName: "بداية السطر", englishName: "Go to Line Start", description: "الانتقال إلى بداية سطر الأمر", shortcutType: "combo", keywords: ["home", "start", "بداية"] },
    { type: "shortcut", category: "Linux", subCategory: "الطرفية", shortcut: "Ctrl + E", arabicName: "نهاية السطر", englishName: "Go to Line End", description: "الانتقال إلى نهاية سطر الأمر", shortcutType: "combo", keywords: ["end", "نهاية"] },
    { type: "shortcut", category: "Linux", subCategory: "الطرفية", shortcut: "Ctrl + U", arabicName: "حذف السطر", englishName: "Clear Line", description: "حذف كل ما قبل المؤشر في السطر", shortcutType: "combo", keywords: ["delete line", "clear", "حذف"] },
    { type: "shortcut", category: "Linux", subCategory: "الطرفية", shortcut: "Ctrl + K", arabicName: "حذف من المؤشر للنهاية", englishName: "Kill to End", description: "حذف كل ما بعد المؤشر في السطر", shortcutType: "combo", keywords: ["kill", "delete", "حذف"] },
    { type: "shortcut", category: "Linux", subCategory: "الطرفية", shortcut: "Ctrl + Z", arabicName: "تعليق العملية", englishName: "Suspend Process", description: "إرسال العملية الجارية إلى الخلفية مؤقتاً", shortcutType: "combo", keywords: ["suspend", "background", "تعليق"] },
    { type: "shortcut", category: "Linux", subCategory: "الطرفية", shortcut: "Ctrl + Shift + C", arabicName: "نسخ في الطرفية", englishName: "Copy (Terminal)", description: "نسخ النص المحدد في الطرفية", shortcutType: "combo", keywords: ["copy", "terminal", "نسخ"] },
    { type: "shortcut", category: "Linux", subCategory: "الطرفية", shortcut: "Ctrl + Shift + V", arabicName: "لصق في الطرفية", englishName: "Paste (Terminal)", description: "لصق النص في الطرفية", shortcutType: "combo", keywords: ["paste", "terminal", "لصق"] }
];
