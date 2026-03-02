/*
 * SYMQ DATA REPOSITORY
 * Modular Data Structure
 */

const RAW_DATA = {
    
    // 1. Windows System Shortcuts
    windows: [
        { shortcut: "Win + D", arabicName: "إظهار سطح المكتب", englishName: "Show Desktop", description: "تصغير جميع النوافذ المفتوحة فوراً لإظهار سطح المكتب.", usefulness: "Essential", level: "basic" },
        { shortcut: "Win + E", arabicName: "مستكشف الملفات", englishName: "File Explorer", description: "فتح نافذة جهاز الكمبيوتر (My Computer) بسرعة.", usefulness: "Essential", level: "basic" },
        { shortcut: "Win + L", arabicName: "قفل الشاشة", englishName: "Lock Screen", description: "قفل الكمبيوتر فوراً لحماية الخصوصية عند المغادرة.", usefulness: "High", level: "basic" },
        { shortcut: "Win + V", arabicName: "سجل الحافظة", englishName: "Clipboard History", description: "عرض قائمة بالنصوص والصور التي نسختها سابقاً.", usefulness: "Game Changer", level: "intermediate" },
        { shortcut: "Win + .", arabicName: "لوحة الإيموجي", englishName: "Emoji Panel", description: "فتح نافذة الرموز التعبيرية والرموز الخاصة.", usefulness: "High", level: "basic" },
        { shortcut: "Win + Shift + S", arabicName: "لقطة شاشة", englishName: "Snip & Sketch", description: "أخذ لقطة لجزء محدد من الشاشة أو الشاشة كاملة.", usefulness: "Essential", level: "intermediate" },
        { shortcut: "Alt + Tab", arabicName: "التبديل بين النوافذ", englishName: "Switch Windows", description: "التنقل السريع بين البرامج المفتوحة حالياً.", usefulness: "Essential", level: "basic" },
        { shortcut: "Ctrl + Shift + Esc", arabicName: "مدير المهام", englishName: "Task Manager", description: "فتح مدير المهام مباشرة لإغلاق البرامج العالقة.", usefulness: "High", level: "advanced" },
        { shortcut: "Win + Tab", arabicName: "عرض المهام", englishName: "Task View", description: "عرض جميع النوافذ المفتوحة وأسطح المكتب الافتراضية.", usefulness: "Medium", level: "intermediate" },
        { shortcut: "Win + Left", arabicName: "تقسيم الشاشة يساراً", englishName: "Snap Left", description: "تثبيت النافذة الحالية في النصف الأيسر من الشاشة.", usefulness: "High", level: "intermediate" },
        { shortcut: "Win + Right", arabicName: "تقسيم الشاشة يميناً", englishName: "Snap Right", description: "تثبيت النافذة الحالية في النصف الأيمن من الشاشة.", usefulness: "High", level: "intermediate" },
        { shortcut: "Win + X", arabicName: "قائمة المشرف", englishName: "Quick Link Menu", description: "فتح قائمة إعدادات النظام المتقدمة (فوق زر ابدأ).", usefulness: "High", level: "advanced" }
    ],

    // 2. General Editing
    editing: [
        { shortcut: "Ctrl + C", arabicName: "نسخ", englishName: "Copy", description: "نسخ العنصر المحدد.", usefulness: "Essential", level: "basic" },
        { shortcut: "Ctrl + X", arabicName: "قص", englishName: "Cut", description: "نقل العنصر المحدد.", usefulness: "Essential", level: "basic" },
        { shortcut: "Ctrl + V", arabicName: "لصق", englishName: "Paste", description: "لصق العنصر المنسوخ.", usefulness: "Essential", level: "basic" },
        { shortcut: "Ctrl + Z", arabicName: "تراجع", englishName: "Undo", description: "التراجع عن آخر إجراء قمت به.", usefulness: "Essential", level: "basic" },
        { shortcut: "Ctrl + Y", arabicName: "إعادة", englishName: "Redo", description: "إعادة الإجراء الذي تم التراجع عنه.", usefulness: "High", level: "basic" },
        { shortcut: "Ctrl + A", arabicName: "تحديد الكل", englishName: "Select All", description: "تحديد كامل النص أو جميع الملفات في المجلد.", usefulness: "High", level: "basic" },
        { shortcut: "Ctrl + F", arabicName: "بحث", englishName: "Find", description: "فتح شريط البحث لإيجاد كلمة في النص.", usefulness: "Essential", level: "basic" },
        { shortcut: "Ctrl + Backspace", arabicName: "حذف كلمة كاملة", englishName: "Delete Word", description: "حذف الكلمة السابقة كاملة بدلاً من حرف واحد.", usefulness: "High", level: "intermediate" },
        { shortcut: "Ctrl + Arrow", arabicName: "التنقل بين الكلمات", englishName: "Jump Words", description: "تحريك المؤشر كلمة كاملة بدلاً من حرف واحد.", usefulness: "High", level: "intermediate" }
    ],

    // 3. Microsoft Word
    word: [
        { shortcut: "Ctrl + B", arabicName: "خط عريض", englishName: "Bold", description: "جعل النص المحدد غامقاً.", usefulness: "High", level: "basic" },
        { shortcut: "Ctrl + I", arabicName: "خط مائل", englishName: "Italic", description: "إمالة النص المحدد.", usefulness: "Medium", level: "basic" },
        { shortcut: "Ctrl + U", arabicName: "تسطير", englishName: "Underline", description: "وضع خط تحت النص المحدد.", usefulness: "Medium", level: "basic" },
        { shortcut: "Ctrl + Enter", arabicName: "فاصل صفحات", englishName: "Page Break", description: "الانتقال فوراً لصفحة جديدة.", usefulness: "Essential", level: "intermediate" },
        { shortcut: "Shift + F3", arabicName: "تغيير حالة الأحرف", englishName: "Change Case", description: "التبديل بين أحرف كبيرة وصغيرة (إنجليزي).", usefulness: "High", level: "intermediate" },
        { shortcut: "Ctrl + ]", arabicName: "تكيبر الخط", englishName: "Increase Font", description: "زيادة حجم الخط بمقدار نقطة واحدة.", usefulness: "High", level: "intermediate" },
        { shortcut: "Ctrl + [", arabicName: "تصغير الخط", englishName: "Decrease Font", description: "إنقاص حجم الخط بمقدار نقطة واحدة.", usefulness: "High", level: "intermediate" },
        { shortcut: "Ctrl + K", arabicName: "إدراج رابط", englishName: "Insert Link", description: "تحويل النص المحدد إلى رابط تشعبي.", usefulness: "Medium", level: "intermediate" }
    ],

    // 4. Microsoft Excel
    excel: [
        { shortcut: "F2", arabicName: "تحرير الخلية", englishName: "Edit Cell", description: "تعديل محتوى الخلية المحددة دون مسحها.", usefulness: "Essential", level: "basic" },
        { shortcut: "Alt + =", arabicName: "جمع تلقائي", englishName: "AutoSum", description: "إدراج دالة الجمع لجمع الأرقام أعلاه تلقائياً.", usefulness: "Game Changer", level: "intermediate" },
        { shortcut: "Ctrl + Shift + L", arabicName: "تصفية / فلتر", englishName: "Filter", description: "تفعيل أو إلغاء أزرار التصفية على العناوين.", usefulness: "High", level: "intermediate" },
        { shortcut: "Ctrl + ;", arabicName: "إدراج التاريخ", englishName: "Insert Date", description: "إدخال تاريخ اليوم الحالي في الخلية.", usefulness: "High", level: "intermediate" },
        { shortcut: "Ctrl + Shift + :", arabicName: "إدراج الوقت", englishName: "Insert Time", description: "إدخال الوقت الحالي في الخلية.", usefulness: "High", level: "intermediate" },
        { shortcut: "Ctrl + Arrow", arabicName: "نهاية البيانات", englishName: "Jump to Edge", description: "الانتقال لآخر خلية تحتوي بيانات في الاتجاه المحدد.", usefulness: "High", level: "advanced" },
        { shortcut: "Ctrl + PageUp", arabicName: "الورقة السابقة", englishName: "Prev Sheet", description: "الانتقال لورقة العمل السابقة.", usefulness: "Medium", level: "intermediate" },
        { shortcut: "Ctrl + PageDown", arabicName: "الورقة التالية", englishName: "Next Sheet", description: "الانتقال لورقة العمل التالية.", usefulness: "Medium", level: "intermediate" }
    ],

    // 5. Microsoft PowerPoint
    powerpoint: [
        { shortcut: "F5", arabicName: "بدء العرض", englishName: "Start Slideshow", description: "بدء العرض التقديمي من الشريحة الأولى.", usefulness: "Essential", level: "basic" },
        { shortcut: "Shift + F5", arabicName: "عرض من الحالية", englishName: "Current Slide", description: "بدء العرض من الشريحة التي تعمل عليها.", usefulness: "Essential", level: "basic" },
        { shortcut: "B", arabicName: "شاشة سوداء", englishName: "Black Screen", description: "تحويل الشاشة للأسود أثناء العرض (لجذب الانتباه).", usefulness: "High", level: "advanced" },
        { shortcut: "W", arabicName: "شاشة بيضاء", englishName: "White Screen", description: "تحويل الشاشة للأبيض أثناء العرض.", usefulness: "Medium", level: "advanced" },
        { shortcut: "Ctrl + D", arabicName: "تكرار العنصر", englishName: "Duplicate", description: "تكرار الشريحة أو الشكل المحدد فوراً.", usefulness: "High", level: "intermediate" }
    ],

    // 6. Browser Shortcuts
    browser: [
        { shortcut: "Ctrl + T", arabicName: "علامة تبويب جديدة", englishName: "New Tab", description: "فتح صفحة انترنت جديدة.", usefulness: "Essential", level: "basic" },
        { shortcut: "Ctrl + W", arabicName: "إغلاق التبويب", englishName: "Close Tab", description: "إغلاق الصفحة الحالية.", usefulness: "Essential", level: "basic" },
        { shortcut: "Ctrl + Shift + T", arabicName: "استعادة التبويب", englishName: "Reopen Tab", description: "فتح آخر صفحة تم إغلاقها (منقذ للحياة).", usefulness: "Game Changer", level: "intermediate" },
        { shortcut: "Ctrl + L", arabicName: "تحديد الرابط", englishName: "Select URL", description: "تحديد رابط الموقع فوراً للكتابة أو النسخ.", usefulness: "High", level: "intermediate" },
        { shortcut: "Ctrl + Shift + Delete", arabicName: "مسح السجل", englishName: "Clear History", description: "فتح قائمة مسح بيانات التصفح.", usefulness: "High", level: "intermediate" },
        { shortcut: "Ctrl + Tab", arabicName: "التنقل بين الصفحات", englishName: "Next Tab", description: "الانتقال للصفحة التالية.", usefulness: "Medium", level: "basic" },
        { shortcut: "Ctrl + Shift + Tab", arabicName: "العودة للصفحات", englishName: "Prev Tab", description: "الانتقال للصفحة السابقة.", usefulness: "Medium", level: "basic" }
    ],

    // 7. Important Arabic Symbols
    arabic_symbols: [
        { shortcut: "Shift + Q", arabicName: "فتحة", englishName: "Fatha", description: "علامة الفتحة ( َ ).", usefulness: "Essential", level: "basic" },
        { shortcut: "Shift + W", arabicName: "تنوين فتح", englishName: "Tanween Fath", description: "علامة تنوين الفتح ( ً ).", usefulness: "Essential", level: "basic" },
        { shortcut: "Shift + E", arabicName: "ضمة", englishName: "Damma", description: "علامة الضمة ( ُ ).", usefulness: "Essential", level: "basic" },
        { shortcut: "Shift + R", arabicName: "تنوين ضم", englishName: "Tanween Damm", description: "علامة تنوين الضم ( ٌ ).", usefulness: "Essential", level: "basic" },
        { shortcut: "Shift + A", arabicName: "كسرة", englishName: "Kasra", description: "علامة الكسرة ( ِ ).", usefulness: "Essential", level: "basic" },
        { shortcut: "Shift + S", arabicName: "تنوين كسر", englishName: "Tanween Kasr", description: "علامة تنوين الكسر ( ٍ ).", usefulness: "Essential", level: "basic" },
        { shortcut: "Shift + X", arabicName: "سكون", englishName: "Sukun", description: "علامة السكون ( ْ ).", usefulness: "Essential", level: "basic" },
        { shortcut: "Shift + `", arabicName: "شدة", englishName: "Shadda", description: "علامة الشدة ( ّ ).", usefulness: "Essential", level: "basic" },
        { shortcut: "Shift + J", arabicName: "تطويل / كشيدة", englishName: "Tatweel", description: "تمديد الحرف العربي (ـــــ).", usefulness: "High", level: "intermediate" },
        { shortcut: "Shift + Z", arabicName: "المدة", englishName: "Madda", description: "علامة المدة ( ~ ).", usefulness: "Medium", level: "intermediate" },
        { shortcut: "Shift + K", arabicName: "فاصلة عربية", englishName: "Comma", description: "الفاصلة العربية ( ، ).", usefulness: "Essential", level: "basic" }
    ]
};