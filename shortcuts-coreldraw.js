const DATA_CORELDRAW = [

    // ════════════════════════════════════════════
    // CorelDRAW — الأدوات الأساسية
    // ════════════════════════════════════════════
    { type: "shortcut", category: "CorelDRAW", subCategory: "أدوات", shortcut: "F1", arabicName: "المساعدة", englishName: "Help", description: "فتح نافذة المساعدة", shortcutType: "tool-key", keywords: ["help", "مساعدة"] },
    { type: "shortcut", category: "CorelDRAW", subCategory: "أدوات", shortcut: "F2", arabicName: "أداة التكبير", englishName: "Zoom In Tool", description: "تفعيل أداة التكبير", shortcutType: "tool-key", keywords: ["zoom in", "تكبير"] },
    { type: "shortcut", category: "CorelDRAW", subCategory: "أدوات", shortcut: "F3", arabicName: "أداة التصغير", englishName: "Zoom Out Tool", description: "تفعيل أداة التصغير", shortcutType: "tool-key", keywords: ["zoom out", "تصغير"] },
    { type: "shortcut", category: "CorelDRAW", subCategory: "أدوات", shortcut: "F4", arabicName: "احتواء الكل في الشاشة", englishName: "Zoom to Fit All", description: "تكبير/تصغير العرض ليناسب كل الكائنات", shortcutType: "tool-key", keywords: ["fit", "zoom all", "احتواء"] },
    { type: "shortcut", category: "CorelDRAW", subCategory: "أدوات", shortcut: "F5", arabicName: "أداة الحرة (Freehand)", englishName: "Freehand Tool", description: "الرسم الحر بالقلم", shortcutType: "tool-key", keywords: ["freehand", "draw", "رسم حر"] },
    { type: "shortcut", category: "CorelDRAW", subCategory: "أدوات", shortcut: "F6", arabicName: "أداة المستطيل", englishName: "Rectangle Tool", description: "رسم مستطيلات ومربعات", shortcutType: "tool-key", keywords: ["rectangle", "box", "مستطيل"] },
    { type: "shortcut", category: "CorelDRAW", subCategory: "أدوات", shortcut: "F7", arabicName: "أداة الإهليلج (Ellipse)", englishName: "Ellipse Tool", description: "رسم دوائر وأشكال بيضاوية", shortcutType: "tool-key", keywords: ["ellipse", "circle", "دائرة"] },
    { type: "shortcut", category: "CorelDRAW", subCategory: "أدوات", shortcut: "F8", arabicName: "أداة النص", englishName: "Text Tool", description: "إضافة وتحرير النصوص", shortcutType: "tool-key", keywords: ["text", "type", "نص"] },
    { type: "shortcut", category: "CorelDRAW", subCategory: "أدوات", shortcut: "F9", arabicName: "عرض ملء الشاشة", englishName: "Full-Screen Preview", description: "معاينة التصميم بملء الشاشة", shortcutType: "tool-key", keywords: ["preview", "fullscreen", "معاينة"] },
    { type: "shortcut", category: "CorelDRAW", subCategory: "أدوات", shortcut: "F10", arabicName: "أداة تحرير العقد", englishName: "Shape / Node Tool", description: "تحرير نقاط ومسارات الأشكال", shortcutType: "tool-key", keywords: ["node", "shape", "edit", "عقد"] },
    { type: "shortcut", category: "CorelDRAW", subCategory: "أدوات", shortcut: "F11", arabicName: "محرر التدرج اللوني", englishName: "Gradient Fill Editor", description: "فتح محرر التعبئة بالتدرج", shortcutType: "tool-key", keywords: ["gradient", "fill", "تدرج"] },
    { type: "shortcut", category: "CorelDRAW", subCategory: "أدوات", shortcut: "F12", arabicName: "خصائص الحدود", englishName: "Outline Pen", description: "فتح خصائص قلم الحدود", shortcutType: "tool-key", keywords: ["outline", "stroke", "pen", "حدود"] },
    { type: "shortcut", category: "CorelDRAW", subCategory: "أدوات", shortcut: "P", arabicName: "أداة الاختيار", englishName: "Pick Tool", description: "تحديد وتحريك الكائنات", shortcutType: "tool-key", keywords: ["pick", "select", "اختيار"] },
    { type: "shortcut", category: "CorelDRAW", subCategory: "أدوات", shortcut: "A", arabicName: "أداة السهم الحر", englishName: "Freehand Arrow / Connector", description: "رسم أسهم وموصلات", shortcutType: "tool-key", keywords: ["arrow", "connector", "سهم"] },
    { type: "shortcut", category: "CorelDRAW", subCategory: "أدوات", shortcut: "B", arabicName: "أداة الدهان (Paintbucket)", englishName: "Smart Fill / Paint", description: "تعبئة المناطق بالألوان", shortcutType: "tool-key", keywords: ["fill", "paint", "تعبئة"] },
    { type: "shortcut", category: "CorelDRAW", subCategory: "أدوات", shortcut: "E", arabicName: "أداة المحو", englishName: "Eraser Tool", description: "محو أجزاء من الكائنات", shortcutType: "tool-key", keywords: ["eraser", "delete", "محو"] },
    { type: "shortcut", category: "CorelDRAW", subCategory: "أدوات", shortcut: "H", arabicName: "أداة اليد (تحريك العرض)", englishName: "Pan / Hand Tool", description: "تحريك منطقة العرض بدون تغيير الكائنات", shortcutType: "tool-key", keywords: ["pan", "hand", "move view", "تحريك"] },
    { type: "shortcut", category: "CorelDRAW", subCategory: "أدوات", shortcut: "I", arabicName: "أداة القطارة (لون)", englishName: "Color Eyedropper", description: "أخذ عينة لون من الشاشة", shortcutType: "tool-key", keywords: ["eyedropper", "color picker", "قطارة"] },
    { type: "shortcut", category: "CorelDRAW", subCategory: "أدوات", shortcut: "G", arabicName: "أداة التعبئة التفاعلية", englishName: "Interactive Fill Tool", description: "تطبيق تعبئات لونية تفاعلية", shortcutType: "tool-key", keywords: ["fill", "interactive", "تعبئة"] },

    // ════════════════════════════════════════════
    // CorelDRAW — تحرير
    // ════════════════════════════════════════════
    { type: "shortcut", category: "CorelDRAW", subCategory: "تحرير", shortcut: "Ctrl + Z", arabicName: "تراجع", englishName: "Undo", description: "التراجع عن آخر إجراء", shortcutType: "combo", keywords: ["undo", "تراجع"] },
    { type: "shortcut", category: "CorelDRAW", subCategory: "تحرير", shortcut: "Ctrl + Y", arabicName: "إعادة", englishName: "Redo", description: "إعادة الإجراء الملغى", shortcutType: "combo", keywords: ["redo", "إعادة"] },
    { type: "shortcut", category: "CorelDRAW", subCategory: "تحرير", shortcut: "Ctrl + C", arabicName: "نسخ", englishName: "Copy", description: "نسخ الكائن المحدد", shortcutType: "combo", keywords: ["copy", "نسخ"] },
    { type: "shortcut", category: "CorelDRAW", subCategory: "تحرير", shortcut: "Ctrl + V", arabicName: "لصق", englishName: "Paste", description: "لصق الكائن المنسوخ", shortcutType: "combo", keywords: ["paste", "لصق"] },
    { type: "shortcut", category: "CorelDRAW", subCategory: "تحرير", shortcut: "Ctrl + D", arabicName: "تكرار", englishName: "Duplicate", description: "تكرار الكائن المحدد في مكانه", shortcutType: "combo", keywords: ["duplicate", "clone", "تكرار"] },
    { type: "shortcut", category: "CorelDRAW", subCategory: "تحرير", shortcut: "Ctrl + A", arabicName: "تحديد الكل", englishName: "Select All", description: "تحديد جميع الكائنات", shortcutType: "combo", keywords: ["select all", "تحديد"] },
    { type: "shortcut", category: "CorelDRAW", subCategory: "تحرير", shortcut: "Delete", arabicName: "حذف", englishName: "Delete", description: "حذف الكائن المحدد", shortcutType: "tool-key", keywords: ["delete", "remove", "حذف"] },
    { type: "shortcut", category: "CorelDRAW", subCategory: "تحرير", shortcut: "Ctrl + F", arabicName: "بحث واستبدال", englishName: "Find & Replace", description: "البحث عن كائنات أو نصوص واستبدالها", shortcutType: "combo", keywords: ["find", "replace", "بحث"] },

    // ════════════════════════════════════════════
    // CorelDRAW — ملف
    // ════════════════════════════════════════════
    { type: "shortcut", category: "CorelDRAW", subCategory: "ملف", shortcut: "Ctrl + N", arabicName: "مستند جديد", englishName: "New Document", description: "إنشاء مستند CorelDRAW جديد", shortcutType: "combo", keywords: ["new", "document", "جديد"] },
    { type: "shortcut", category: "CorelDRAW", subCategory: "ملف", shortcut: "Ctrl + O", arabicName: "فتح", englishName: "Open", description: "فتح ملف موجود", shortcutType: "combo", keywords: ["open", "فتح"] },
    { type: "shortcut", category: "CorelDRAW", subCategory: "ملف", shortcut: "Ctrl + S", arabicName: "حفظ", englishName: "Save", description: "حفظ الملف الحالي", shortcutType: "combo", keywords: ["save", "حفظ"] },
    { type: "shortcut", category: "CorelDRAW", subCategory: "ملف", shortcut: "Ctrl + Shift + S", arabicName: "حفظ باسم", englishName: "Save As", description: "حفظ الملف باسم جديد أو صيغة مختلفة", shortcutType: "combo", keywords: ["save as", "حفظ باسم"] },
    { type: "shortcut", category: "CorelDRAW", subCategory: "ملف", shortcut: "Ctrl + P", arabicName: "طباعة", englishName: "Print", description: "طباعة المستند", shortcutType: "combo", keywords: ["print", "طباعة"] },
    { type: "shortcut", category: "CorelDRAW", subCategory: "ملف", shortcut: "Ctrl + E", arabicName: "تصدير", englishName: "Export", description: "تصدير المستند بصيغة مختلفة (PNG, JPG...)", shortcutType: "combo", keywords: ["export", "تصدير"] },
    { type: "shortcut", category: "CorelDRAW", subCategory: "ملف", shortcut: "Ctrl + I", arabicName: "استيراد", englishName: "Import", description: "استيراد ملف أو صورة إلى المستند", shortcutType: "combo", keywords: ["import", "استيراد"] },
    { type: "shortcut", category: "CorelDRAW", subCategory: "ملف", shortcut: "Ctrl + W", arabicName: "إغلاق", englishName: "Close", description: "إغلاق المستند الحالي", shortcutType: "combo", keywords: ["close", "إغلاق"] },

    // ════════════════════════════════════════════
    // CorelDRAW — ترتيب وتنظيم
    // ════════════════════════════════════════════
    { type: "shortcut", category: "CorelDRAW", subCategory: "ترتيب وتنظيم", shortcut: "Ctrl + G", arabicName: "تجميع", englishName: "Group", description: "تجميع الكائنات المحددة في مجموعة", shortcutType: "combo", keywords: ["group", "تجميع"] },
    { type: "shortcut", category: "CorelDRAW", subCategory: "ترتيب وتنظيم", shortcut: "Ctrl + U", arabicName: "فك التجميع", englishName: "Ungroup", description: "فك تجميع المجموعة المحددة", shortcutType: "combo", keywords: ["ungroup", "فك تجميع"] },
    { type: "shortcut", category: "CorelDRAW", subCategory: "ترتيب وتنظيم", shortcut: "Ctrl + L", arabicName: "دمج (Combine)", englishName: "Combine Curves", description: "دمج الكائنات في مسار واحد", shortcutType: "combo", keywords: ["combine", "merge", "دمج"] },
    { type: "shortcut", category: "CorelDRAW", subCategory: "ترتيب وتنظيم", shortcut: "Ctrl + K", arabicName: "تقسيم (Break Apart)", englishName: "Break Apart", description: "تقسيم المسارات المدمجة إلى أجزاء", shortcutType: "combo", keywords: ["break apart", "split", "تقسيم"] },
    { type: "shortcut", category: "CorelDRAW", subCategory: "ترتيب وتنظيم", shortcut: "Ctrl + Home", arabicName: "إلى الأمام (أعلى الترتيب)", englishName: "To Front", description: "إحضار الكائن إلى أعلى طبقة", shortcutType: "combo", keywords: ["front", "layer", "أمام"] },
    { type: "shortcut", category: "CorelDRAW", subCategory: "ترتيب وتنظيم", shortcut: "Ctrl + End", arabicName: "إلى الخلف (أسفل الترتيب)", englishName: "To Back", description: "إرسال الكائن إلى أسفل طبقة", shortcutType: "combo", keywords: ["back", "layer", "خلف"] },
    { type: "shortcut", category: "CorelDRAW", subCategory: "ترتيب وتنظيم", shortcut: "Ctrl + PgUp", arabicName: "تقديم خطوة للأمام", englishName: "Forward One", description: "نقل الكائن خطوة لأعلى في الطبقات", shortcutType: "combo", keywords: ["forward", "layer up"] },
    { type: "shortcut", category: "CorelDRAW", subCategory: "ترتيب وتنظيم", shortcut: "Ctrl + PgDn", arabicName: "تأخير خطوة للخلف", englishName: "Back One", description: "نقل الكائن خطوة لأسفل في الطبقات", shortcutType: "combo", keywords: ["back", "layer down"] },
    { type: "shortcut", category: "CorelDRAW", subCategory: "ترتيب وتنظيم", shortcut: "Ctrl + Shift + Q", arabicName: "تحويل إلى منحنى", englishName: "Convert to Curves", description: "تحويل الشكل إلى مسار قابل للتحرير", shortcutType: "combo", keywords: ["convert curves", "path", "منحنى"] },

    // ════════════════════════════════════════════
    // CorelDRAW — نص
    // ════════════════════════════════════════════
    { type: "shortcut", category: "CorelDRAW", subCategory: "نص", shortcut: "Ctrl + B", arabicName: "خط عريض", englishName: "Bold", description: "تطبيق الخط العريض على النص المحدد", shortcutType: "combo", keywords: ["bold", "عريض"] },
    { type: "shortcut", category: "CorelDRAW", subCategory: "نص", shortcut: "Ctrl + I", arabicName: "مائل", englishName: "Italic", description: "تطبيق الخط المائل على النص المحدد", shortcutType: "combo", keywords: ["italic", "مائل"] },
    { type: "shortcut", category: "CorelDRAW", subCategory: "نص", shortcut: "Ctrl + U", arabicName: "تسطير", englishName: "Underline", description: "تطبيق التسطير على النص المحدد", shortcutType: "combo", keywords: ["underline", "تسطير"] },
    { type: "shortcut", category: "CorelDRAW", subCategory: "نص", shortcut: "Ctrl + T", arabicName: "خصائص النص", englishName: "Text Properties", description: "فتح لوحة خصائص النص", shortcutType: "combo", keywords: ["text", "properties", "نص"] }
];
