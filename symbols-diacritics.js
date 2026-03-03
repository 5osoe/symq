const DATA_DIACRITICS = [
    // --- Basic Harakat ---
    { 
        id: "d01", 
        symbol: "َ", 
        arabicName: "فتحة", 
        englishName: "Fatha", 
        category: "التشكيل", 
        keywords: ["a", "fathah", "tashkeel"],
        keyboardMethod: {
            layout: "Arabic 101",
            combination: "Shift + Q",
            altCode: "",
            notes: "Type after a letter"
        }
    },
    { 
        id: "d02", 
        symbol: "ِ", 
        arabicName: "كسرة", 
        englishName: "Kasra", 
        category: "التشكيل", 
        keywords: ["i", "e", "kasrah", "tashkeel"],
        keyboardMethod: {
            layout: "Arabic 101",
            combination: "Shift + A",
            altCode: "",
            notes: "Type after a letter"
        }
    },
    { 
        id: "d03", 
        symbol: "ُ", 
        arabicName: "ضمة", 
        englishName: "Damma", 
        category: "التشكيل", 
        keywords: ["u", "o", "dammah", "tashkeel"],
        keyboardMethod: {
            layout: "Arabic 101",
            combination: "Shift + E",
            altCode: "",
            notes: "Type after a letter"
        }
    },
    { 
        id: "d04", 
        symbol: "ْ", 
        arabicName: "سكون", 
        englishName: "Sukun", 
        category: "التشكيل", 
        keywords: ["stop", "silence", "circle"],
        keyboardMethod: {
            layout: "Arabic 101",
            combination: "Shift + X",
            altCode: "",
            notes: "Type after a letter"
        }
    },
    { 
        id: "d05", 
        symbol: "ّ", 
        arabicName: "شدة", 
        englishName: "Shadda", 
        category: "التشكيل", 
        keywords: ["double", "stress", "w"],
        keyboardMethod: {
            layout: "Arabic 101",
            combination: "Shift + ` (Zenk)",
            altCode: "",
            notes: "Key usually top-left, beside 1"
        }
    },

    // --- Tanween ---
    { 
        id: "d06", 
        symbol: "ً", 
        arabicName: "تنوين فتح", 
        englishName: "Tanween Fath", 
        category: "التشكيل", 
        keywords: ["an", "fathatan"],
        keyboardMethod: {
            layout: "Arabic 101",
            combination: "Shift + W",
            altCode: "",
            notes: ""
        }
    },
    { 
        id: "d07", 
        symbol: "ٍ", 
        arabicName: "تنوين كسر", 
        englishName: "Tanween Kasr", 
        category: "التشكيل", 
        keywords: ["in", "en", "kasratan"],
        keyboardMethod: {
            layout: "Arabic 101",
            combination: "Shift + S",
            altCode: "",
            notes: ""
        }
    },
    { 
        id: "d08", 
        symbol: "ٌ", 
        arabicName: "تنوين ضم", 
        englishName: "Tanween Damm", 
        category: "التشكيل", 
        keywords: ["un", "dammatan"],
        keyboardMethod: {
            layout: "Arabic 101",
            combination: "Shift + R",
            altCode: "",
            notes: ""
        }
    },

    // --- Additional Marks & Hamzas ---
    { 
        id: "d09", 
        symbol: "ٓ", 
        arabicName: "مدة", 
        englishName: "Maddah", 
        category: "التشكيل", 
        keywords: ["aa", "wave", "tilde"],
        keyboardMethod: {
            layout: "Arabic 101",
            combination: "",
            altCode: "Alt + 0161",
            notes: "Shift+N produces 'آ' (Alef Madda)"
        }
    },
    { 
        id: "d10", 
        symbol: "ٔ", 
        arabicName: "همزة فوق", 
        englishName: "Hamza Above", 
        category: "التشكيل", 
        keywords: ["hamza", "glottal"],
        keyboardMethod: {
            layout: "Arabic 101",
            combination: "",
            altCode: "Alt + 0162",
            notes: "Shift+H produces 'أ' (Alef Hamza)"
        }
    },
    { 
        id: "d11", 
        symbol: "ٕ", 
        arabicName: "همزة تحت", 
        englishName: "Hamza Below", 
        category: "التشكيل", 
        keywords: ["hamza", "glottal"],
        keyboardMethod: {
            layout: "Arabic 101",
            combination: "",
            altCode: "Alt + 0163",
            notes: "Shift+Y produces 'إ' (Alef Hamza Below)"
        }
    },
    { 
        id: "d12", 
        symbol: "ٰ", 
        arabicName: "ألف خنجرية", 
        englishName: "Dagger Alif", 
        category: "التشكيل", 
        keywords: ["aa", "mini alef", "superscript"],
        keyboardMethod: {
            layout: "",
            combination: "",
            altCode: "Alt + 01670",
            notes: "Not on standard keyboard"
        }
    },
    
    // --- Quranic/Extended ---
    { 
        id: "d13", 
        symbol: "ٖ", 
        arabicName: "كسرة طويلة", 
        englishName: "Long Kasra", 
        category: "التشكيل", 
        keywords: ["y", "quran", "i"],
        keyboardMethod: null
    },
    { 
        id: "d14", 
        symbol: "ٗ", 
        arabicName: "ضمة طويلة", 
        englishName: "Long Damma", 
        category: "التشكيل", 
        keywords: ["w", "quran", "u"],
        keyboardMethod: null
    }
];