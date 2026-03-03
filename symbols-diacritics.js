
const DATA_DIACRITICS = [
    // --- Basic Harakat ---
    { id: "d01", symbol: "َ", arabicName: "فتحة", englishName: "Fatha", category: "التشكيل", keywords: ["a", "fathah", "tashkeel"] },
    { id: "d02", symbol: "ِ", arabicName: "كسرة", englishName: "Kasra", category: "التشكيل", keywords: ["i", "e", "kasrah", "tashkeel"] },
    { id: "d03", symbol: "ُ", arabicName: "ضمة", englishName: "Damma", category: "التشكيل", keywords: ["u", "o", "dammah", "tashkeel"] },
    { id: "d04", symbol: "ْ", arabicName: "سكون", englishName: "Sukun", category: "التشكيل", keywords: ["stop", "silence", "circle"] },
    { id: "d05", symbol: "ّ", arabicName: "شدة", englishName: "Shadda", category: "التشكيل", keywords: ["double", "stress", "w"] },

    // --- Tanween ---
    { id: "d06", symbol: "ً", arabicName: "تنوين فتح", englishName: "Tanween Fath", category: "التشكيل", keywords: ["an", "fathatan"] },
    { id: "d07", symbol: "ٍ", arabicName: "تنوين كسر", englishName: "Tanween Kasr", category: "التشكيل", keywords: ["in", "en", "kasratan"] },
    { id: "d08", symbol: "ٌ", arabicName: "تنوين ضم", englishName: "Tanween Damm", category: "التشكيل", keywords: ["un", "dammatan"] },

    // --- Additional Marks & Hamzas ---
    { id: "d09", symbol: "ٓ", arabicName: "مدة", englishName: "Maddah", category: "التشكيل", keywords: ["aa", "wave", "tilde"] },
    { id: "d10", symbol: "ٔ", arabicName: "همزة فوق", englishName: "Hamza Above", category: "التشكيل", keywords: ["hamza", "glottal"] },
    { id: "d11", symbol: "ٕ", arabicName: "همزة تحت", englishName: "Hamza Below", category: "التشكيل", keywords: ["hamza", "glottal"] },
    { id: "d12", symbol: "ٰ", arabicName: "ألف خنجرية", englishName: "Dagger Alif", category: "التشكيل", keywords: ["aa", "mini alef", "superscript"] },
    
    // --- Quranic/Extended ---
    { id: "d13", symbol: "ٖ", arabicName: "كسرة طويلة", englishName: "Long Kasra", category: "التشكيل", keywords: ["y", "quran", "i"] },
    { id: "d14", symbol: "ٗ", arabicName: "ضمة طويلة", englishName: "Long Damma", category: "التشكيل", keywords: ["w", "quran", "u"] }
];