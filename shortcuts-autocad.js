
const DATA_AUTOCAD = [
    // --- أوامر الرسم (Draw Commands) ---
    { id: "ac01", type: "shortcut", shortcut: "L", arabicName: "رسم خط", englishName: "Line", program: "AutoCAD", category: "AutoCAD", subCategory: "الرسم", description: "رسم خط مستقيم.", keywords: ["line", "draw"] },
    { id: "ac02", type: "shortcut", shortcut: "PL", arabicName: "رسم خط متعدد", englishName: "Polyline", program: "AutoCAD", category: "AutoCAD", subCategory: "الرسم", description: "رسم خطوط متعددة متصلة.", keywords: ["polyline", "poly", "draw"] },
    { id: "ac03", type: "shortcut", shortcut: "C", arabicName: "رسم دائرة", englishName: "Circle", program: "AutoCAD", category: "AutoCAD", subCategory: "الرسم", description: "رسم دائرة بتحديد المركز والنصف قطر.", keywords: ["circle", "draw"] },
    { id: "ac04", type: "shortcut", shortcut: "A", arabicName: "رسم قوس", englishName: "Arc", program: "AutoCAD", category: "AutoCAD", subCategory: "الرسم", description: "رسم قوس دائري.", keywords: ["arc", "curve", "draw"] },
    { id: "ac05", type: "shortcut", shortcut: "REC", arabicName: "رسم مستطيل", englishName: "Rectangle", program: "AutoCAD", category: "AutoCAD", subCategory: "الرسم", description: "رسم مستطيل بنقطتين.", keywords: ["rectangle", "rect", "draw"] },
    { id: "ac06", type: "shortcut", shortcut: "EL", arabicName: "رسم قطع ناقص", englishName: "Ellipse", program: "AutoCAD", category: "AutoCAD", subCategory: "الرسم", description: "رسم شكل بيضاوي.", keywords: ["ellipse", "oval", "draw"] },
    { id: "ac07", type: "shortcut", shortcut: "SPL", arabicName: "رسم منحنى", englishName: "Spline", program: "AutoCAD", category: "AutoCAD", subCategory: "الرسم", description: "رسم منحنيات ناعمة مرنة.", keywords: ["spline", "curve", "smooth"] },
    { id: "ac08", type: "shortcut", shortcut: "H", arabicName: "تظليل", englishName: "Hatch", program: "AutoCAD", category: "AutoCAD", subCategory: "الرسم", description: "ملء منطقة بنمط تظليل.", keywords: ["hatch", "fill", "pattern"] },
    { id: "ac09", type: "shortcut", shortcut: "T", arabicName: "كتابة نص متعدد", englishName: "Multiline Text", program: "AutoCAD", category: "AutoCAD", subCategory: "الرسم", description: "إضافة نص متعدد الأسطر.", keywords: ["text", "mtext", "write"] },
    { id: "ac10", type: "shortcut", shortcut: "DT", arabicName: "كتابة نص مفرد", englishName: "Single Line Text", program: "AutoCAD", category: "AutoCAD", subCategory: "الرسم", description: "إضافة نص في سطر واحد.", keywords: ["text", "dtext", "single"] },

    // --- أوامر التعديل (Modify Commands) ---
    { id: "ac11", type: "shortcut", shortcut: "E", arabicName: "حذف كائن", englishName: "Erase", program: "AutoCAD", category: "AutoCAD", subCategory: "التعديل", description: "حذف الكائنات المحددة.", keywords: ["erase", "delete", "remove"] },
    { id: "ac12", type: "shortcut", shortcut: "CO", arabicName: "نسخ كائن", englishName: "Copy", program: "AutoCAD", category: "AutoCAD", subCategory: "التعديل", description: "نسخ الكائنات المحددة.", keywords: ["copy", "duplicate"] },
    { id: "ac13", type: "shortcut", shortcut: "M", arabicName: "تحريك كائن", englishName: "Move", program: "AutoCAD", category: "AutoCAD", subCategory: "التعديل", description: "نقل الكائنات لموضع جديد.", keywords: ["move", "displace"] },
    { id: "ac14", type: "shortcut", shortcut: "RO", arabicName: "تدوير كائن", englishName: "Rotate", program: "AutoCAD", category: "AutoCAD", subCategory: "التعديل", description: "تدوير الكائنات حول نقطة محددة.", keywords: ["rotate", "turn", "angle"] },
    { id: "ac15", type: "shortcut", shortcut: "SC", arabicName: "مقياس / تغيير الحجم", englishName: "Scale", program: "AutoCAD", category: "AutoCAD", subCategory: "التعديل", description: "تكبير أو تصغير الكائنات بنسبة.", keywords: ["scale", "resize", "size"] },
    { id: "ac16", type: "shortcut", shortcut: "MI", arabicName: "انعكاس مرآوي", englishName: "Mirror", program: "AutoCAD", category: "AutoCAD", subCategory: "التعديل", description: "عكس الكائنات حول محور.", keywords: ["mirror", "flip", "reflect"] },
    { id: "ac17", type: "shortcut", shortcut: "AR", arabicName: "مصفوفة", englishName: "Array", program: "AutoCAD", category: "AutoCAD", subCategory: "التعديل", description: "تكرار الكائنات بشكل مصفوفي.", keywords: ["array", "repeat", "pattern"] },
    { id: "ac18", type: "shortcut", shortcut: "O", arabicName: "إزاحة", englishName: "Offset", program: "AutoCAD", category: "AutoCAD", subCategory: "التعديل", description: "إنشاء نسخة موازية بمسافة محددة.", keywords: ["offset", "parallel", "distance"] },
    { id: "ac19", type: "shortcut", shortcut: "TR", arabicName: "قطع", englishName: "Trim", program: "AutoCAD", category: "AutoCAD", subCategory: "التعديل", description: "قطع جزء من الخطوط عند حدودها.", keywords: ["trim", "cut", "clip"] },
    { id: "ac20", type: "shortcut", shortcut: "EX", arabicName: "تمديد", englishName: "Extend", program: "AutoCAD", category: "AutoCAD", subCategory: "التعديل", description: "تمديد الخطوط حتى حد محدد.", keywords: ["extend", "lengthen"] },
    { id: "ac21", type: "shortcut", shortcut: "F", arabicName: "تخميل الزاوية", englishName: "Fillet", program: "AutoCAD", category: "AutoCAD", subCategory: "التعديل", description: "إنشاء زاوية مستديرة بين خطين.", keywords: ["fillet", "round", "corner"] },
    { id: "ac22", type: "shortcut", shortcut: "CHA", arabicName: "قطع الزاوية", englishName: "Chamfer", program: "AutoCAD", category: "AutoCAD", subCategory: "التعديل", description: "إنشاء قطع مستقيم بين خطين.", keywords: ["chamfer", "bevel", "corner"] },
    { id: "ac23", type: "shortcut", shortcut: "X", arabicName: "تفجير كائن", englishName: "Explode", program: "AutoCAD", category: "AutoCAD", subCategory: "التعديل", description: "تفكيك الكتل والأشكال المركبة.", keywords: ["explode", "break", "decompose"] },
    { id: "ac24", type: "shortcut", shortcut: "PE", arabicName: "تعديل خط متعدد", englishName: "Polyline Edit", program: "AutoCAD", category: "AutoCAD", subCategory: "التعديل", description: "تحرير الخطوط المتعددة وتحويلها.", keywords: ["pedit", "edit", "poly"] },
    { id: "ac25", type: "shortcut", shortcut: "S", arabicName: "تمديد أو تقليص", englishName: "Stretch", program: "AutoCAD", category: "AutoCAD", subCategory: "التعديل", description: "تمديد أجزاء من الرسم مع إبقاء الاتصال.", keywords: ["stretch", "lengthen", "modify"] },

    // --- البُعد والقياس (Dimension) ---
    { id: "ac26", type: "shortcut", shortcut: "DLI", arabicName: "بُعد خطي", englishName: "Linear Dimension", program: "AutoCAD", category: "AutoCAD", subCategory: "الأبعاد", description: "إضافة بُعد أفقي أو رأسي.", keywords: ["dimension", "linear", "measure"] },
    { id: "ac27", type: "shortcut", shortcut: "DAL", arabicName: "بُعد مائل", englishName: "Aligned Dimension", program: "AutoCAD", category: "AutoCAD", subCategory: "الأبعاد", description: "إضافة بُعد موازٍ للكائن المقاس.", keywords: ["aligned", "dimension"] },
    { id: "ac28", type: "shortcut", shortcut: "DRA", arabicName: "بُعد نصف القطر", englishName: "Radius Dimension", program: "AutoCAD", category: "AutoCAD", subCategory: "الأبعاد", description: "قياس نصف قطر الدائرة أو القوس.", keywords: ["radius", "dimension"] },
    { id: "ac29", type: "shortcut", shortcut: "DAN", arabicName: "بُعد الزاوية", englishName: "Angular Dimension", program: "AutoCAD", category: "AutoCAD", subCategory: "الأبعاد", description: "قياس الزاوية بين خطين.", keywords: ["angle", "dimension"] },
    { id: "ac30", type: "shortcut", shortcut: "DI", arabicName: "قياس المسافة", englishName: "Distance", program: "AutoCAD", category: "AutoCAD", subCategory: "الأبعاد", description: "قياس المسافة بين نقطتين.", keywords: ["distance", "measure"] },

    // --- العرض والتنقل (View & Navigation) ---
    { id: "ac31", type: "shortcut", shortcut: "Z + E", arabicName: "ضبط العرض للكل", englishName: "Zoom Extents", program: "AutoCAD", category: "AutoCAD", subCategory: "العرض", description: "تكبير العرض ليشمل كامل الرسم.", keywords: ["zoom", "extents", "fit"] },
    { id: "ac32", type: "shortcut", shortcut: "Z + A", arabicName: "ضبط العرض الكل", englishName: "Zoom All", program: "AutoCAD", category: "AutoCAD", subCategory: "العرض", description: "عرض كل محتوى الرسمة.", keywords: ["zoom", "all", "view"] },
    { id: "ac33", type: "shortcut", shortcut: "Z + W", arabicName: "تكبير منطقة", englishName: "Zoom Window", program: "AutoCAD", category: "AutoCAD", subCategory: "العرض", description: "تكبير منطقة محددة بإطار.", keywords: ["zoom", "window"] },
    { id: "ac34", type: "shortcut", shortcut: "Z + P", arabicName: "العرض السابق", englishName: "Zoom Previous", program: "AutoCAD", category: "AutoCAD", subCategory: "العرض", description: "العودة لمستوى التكبير السابق.", keywords: ["zoom", "previous", "back"] },
    { id: "ac35", type: "shortcut", shortcut: "P", arabicName: "تحريك العرض", englishName: "Pan", program: "AutoCAD", category: "AutoCAD", subCategory: "العرض", description: "تحريك عرض اللوحة بدون تغيير التكبير.", keywords: ["pan", "scroll", "move"] },
    { id: "ac36", type: "shortcut", shortcut: "Ctrl + Shift + H", arabicName: "إخفاء عناصر التنسيق", englishName: "Toggle Clean Screen", program: "AutoCAD", category: "AutoCAD", subCategory: "العرض", description: "تفعيل وضع الشاشة النظيفة.", keywords: ["clean", "hide", "fullscreen"] },
    { id: "ac37", type: "shortcut", shortcut: "F2", arabicName: "نافذة النص", englishName: "Text Window", program: "AutoCAD", category: "AutoCAD", subCategory: "العرض", description: "فتح نافذة سجل الأوامر الموسعة.", keywords: ["text", "log", "command"] },

    // --- الطبقات والخصائص (Layers & Properties) ---
    { id: "ac38", type: "shortcut", shortcut: "LA", arabicName: "إدارة الطبقات", englishName: "Layer Manager", program: "AutoCAD", category: "AutoCAD", subCategory: "الطبقات", description: "فتح مدير الطبقات.", keywords: ["layer", "manage"] },
    { id: "ac39", type: "shortcut", shortcut: "MO", arabicName: "خصائص الكائن", englishName: "Properties", program: "AutoCAD", category: "AutoCAD", subCategory: "الطبقات", description: "فتح نافذة خصائص الكائن المحدد.", keywords: ["properties", "settings", "object"] },
    { id: "ac40", type: "shortcut", shortcut: "MA", arabicName: "مطابقة الخصائص", englishName: "Match Properties", program: "AutoCAD", category: "AutoCAD", subCategory: "الطبقات", description: "نقل خصائص كائن لكائنات أخرى.", keywords: ["match", "copy", "properties"] },

    // --- عام ---
    { id: "ac41", type: "shortcut", shortcut: "Ctrl + Z", arabicName: "تراجع", englishName: "Undo", program: "AutoCAD", category: "AutoCAD", subCategory: "عام", description: "التراجع عن آخر أمر.", keywords: ["undo", "back"] },
    { id: "ac42", type: "shortcut", shortcut: "Ctrl + Y", arabicName: "إعادة", englishName: "Redo", program: "AutoCAD", category: "AutoCAD", subCategory: "عام", description: "إعادة الأمر الملغى.", keywords: ["redo", "forward"] },
    { id: "ac43", type: "shortcut", shortcut: "Ctrl + S", arabicName: "حفظ", englishName: "Save", program: "AutoCAD", category: "AutoCAD", subCategory: "عام", description: "حفظ الملف الحالي.", keywords: ["save"] },
    { id: "ac44", type: "shortcut", shortcut: "Esc", arabicName: "إلغاء الأمر", englishName: "Cancel Command", program: "AutoCAD", category: "AutoCAD", subCategory: "عام", description: "إلغاء الأمر الجاري.", keywords: ["cancel", "escape", "stop"] },
    { id: "ac45", type: "shortcut", shortcut: "F8", arabicName: "وضع المتعامد", englishName: "Ortho Mode", program: "AutoCAD", category: "AutoCAD", subCategory: "عام", description: "تقييد الرسم للاتجاهات الأفقية والرأسية.", keywords: ["ortho", "perpendicular", "straight"] },
    { id: "ac46", type: "shortcut", shortcut: "F3", arabicName: "الالتقاط بالكائن", englishName: "Object Snap", program: "AutoCAD", category: "AutoCAD", subCategory: "عام", description: "تفعيل وضع الالتقاط الذكي بنقاط الكائنات.", keywords: ["snap", "osnap", "lock"] },
    { id: "ac47", type: "shortcut", shortcut: "G", arabicName: "تجميع", englishName: "Group", program: "AutoCAD", category: "AutoCAD", subCategory: "عام", description: "تجميع كائنات في وحدة واحدة.", keywords: ["group", "combine"] },
];
