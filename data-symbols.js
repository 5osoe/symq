const SYMBOLS_DATA = [
    // Arabic Diacritics
    { id: "s01", type: "symbol", symbol: "َ", arabicName: "فتحة", englishName: "Fatha", category: "Arabic Diacritics", keywords: ["a"] },
    { id: "s02", type: "symbol", symbol: "ُ", arabicName: "ضمة", englishName: "Damma", category: "Arabic Diacritics", keywords: ["u"] },
    { id: "s03", type: "symbol", symbol: "ِ", arabicName: "كسرة", englishName: "Kasra", category: "Arabic Diacritics", keywords: ["i"] },
    { id: "s04", type: "symbol", symbol: "ْ", arabicName: "سكون", englishName: "Sukun", category: "Arabic Diacritics", keywords: ["stop"] },
    { id: "s05", type: "symbol", symbol: "ّ", arabicName: "شدة", englishName: "Shadda", category: "Arabic Diacritics", keywords: ["stress"] },
    { id: "s06", type: "symbol", symbol: "ً", arabicName: "تنوين فتح", englishName: "Tanween Fath", category: "Arabic Diacritics", keywords: ["an"] },
    { id: "s07", type: "symbol", symbol: "ٌ", arabicName: "تنوين ضم", englishName: "Tanween Damm", category: "Arabic Diacritics", keywords: ["un"] },
    { id: "s08", type: "symbol", symbol: "ٍ", arabicName: "تنوين كسر", englishName: "Tanween Kasr", category: "Arabic Diacritics", keywords: ["in"] },
    { id: "s09", type: "symbol", symbol: "آ", arabicName: "ألف مد", englishName: "Alif Madda", category: "Arabic Diacritics", keywords: ["aa"] },
    { id: "s10", type: "symbol", symbol: "ـ", arabicName: "كشيدة", englishName: "Tatweel", category: "Arabic Diacritics", keywords: ["stretch"] },

    // Punctuation
    { id: "p01", type: "symbol", symbol: "،", arabicName: "فاصلة", englishName: "Arabic Comma", category: "Punctuation", keywords: ["separator"] },
    { id: "p02", type: "symbol", symbol: "؛", arabicName: "فاصلة منقوطة", englishName: "Arabic Semicolon", category: "Punctuation", keywords: ["pause"] },
    { id: "p03", type: "symbol", symbol: "؟", arabicName: "علامة استفهام", englishName: "Question Mark", category: "Punctuation", keywords: ["query"] },
    { id: "p04", type: "symbol", symbol: "«", arabicName: "قوس يمين", englishName: "Guillemet Right", category: "Punctuation", keywords: ["quote"] },
    { id: "p05", type: "symbol", symbol: "»", arabicName: "قوس يسار", englishName: "Guillemet Left", category: "Punctuation", keywords: ["quote"] },
    
    // Math
    { id: "m01", type: "symbol", symbol: "×", arabicName: "ضرب", englishName: "Multiplication", category: "Mathematical", keywords: ["times"] },
    { id: "m02", type: "symbol", symbol: "÷", arabicName: "قسمة", englishName: "Division", category: "Mathematical", keywords: ["divide"] },
    { id: "m03", type: "symbol", symbol: "±", arabicName: "زائد ناقص", englishName: "Plus Minus", category: "Mathematical", keywords: ["plus"] },
    { id: "m04", type: "symbol", symbol: "≠", arabicName: "لا يساوي", englishName: "Not Equal", category: "Mathematical", keywords: ["equal"] },
    { id: "m05", type: "symbol", symbol: "≈", arabicName: "تقريباً", englishName: "Almost Equal", category: "Mathematical", keywords: ["approx"] },
    { id: "m06", type: "symbol", symbol: "∞", arabicName: "لانهاية", englishName: "Infinity", category: "Mathematical", keywords: ["loop"] },
    { id: "m07", type: "symbol", symbol: "π", arabicName: "باي", englishName: "Pi", category: "Mathematical", keywords: ["circle"] }
];