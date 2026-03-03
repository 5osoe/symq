
const DATA_PUNCTUATION = [
    // --- Arabic Punctuation ---
    { id: "p01", symbol: "،", arabicName: "فاصلة", englishName: "Arabic Comma", category: "علامات الترقيم", keywords: ["comma", "separator", "fasla"] },
    { id: "p02", symbol: "؛", arabicName: "فاصلة منقوطة", englishName: "Arabic Semicolon", category: "علامات الترقيم", keywords: ["pause", "fasla"] },
    { id: "p03", symbol: "؟", arabicName: "علامة استفهام", englishName: "Question Mark", category: "علامات الترقيم", keywords: ["query", "ask"] },
    { id: "p04", symbol: "«", arabicName: "قوس يمين", englishName: "Guillemet Right", category: "علامات الترقيم", keywords: ["quote", "bracket", "qaws"] },
    { id: "p05", symbol: "»", arabicName: "قوس يسار", englishName: "Guillemet Left", category: "علامات الترقيم", keywords: ["quote", "bracket", "qaws"] },
    { id: "p06", symbol: "ـ", arabicName: "كشيدة", englishName: "Tatweel/Kashida", category: "علامات الترقيم", keywords: ["stretch", "extend", "line"] },
    { id: "p07", symbol: "٪", arabicName: "نسبة مئوية", englishName: "Arabic Percent", category: "علامات الترقيم", keywords: ["math", "percent", "mod"] },

    // --- English/General Punctuation ---
    { id: "p08", symbol: ".", arabicName: "نقطة", englishName: "Full Stop", category: "علامات الترقيم", keywords: ["dot", "period", "end"] },
    { id: "p09", symbol: ",", arabicName: "فاصلة إنجليزية", englishName: "Comma (En)", category: "علامات الترقيم", keywords: ["comma", "separator"] },
    { id: "p10", symbol: ":", arabicName: "نقطتان", englishName: "Colon", category: "علامات الترقيم", keywords: ["list", "ratio"] },
    { id: "p11", symbol: ";", arabicName: "منقوطة إنجليزية", englishName: "Semicolon (En)", category: "علامات الترقيم", keywords: ["pause"] },
    { id: "p12", symbol: "!", arabicName: "تعجب", englishName: "Exclamation", category: "علامات الترقيم", keywords: ["bang", "shout", "alert"] },
    { id: "p13", symbol: "?", arabicName: "استفهام إنجليزية", englishName: "Question (En)", category: "علامات الترقيم", keywords: ["query", "ask"] },
    
    // --- Brackets & Dashes ---
    { id: "p14", symbol: "(", arabicName: "قوس مفتوح", englishName: "Parenthesis Open", category: "علامات الترقيم", keywords: ["bracket", "9"] },
    { id: "p15", symbol: ")", arabicName: "قوس مغلق", englishName: "Parenthesis Close", category: "علامات الترقيم", keywords: ["bracket", "0"] },
    { id: "p16", symbol: "[", arabicName: "معقوف مفتوح", englishName: "Bracket Open", category: "علامات الترقيم", keywords: ["square", "array"] },
    { id: "p17", symbol: "]", arabicName: "معقوف مغلق", englishName: "Bracket Close", category: "علامات الترقيم", keywords: ["square", "array"] },
    { id: "p18", symbol: "{", arabicName: "حاصرة مفتوحة", englishName: "Brace Open", category: "علامات الترقيم", keywords: ["curly", "code"] },
    { id: "p19", symbol: "}", arabicName: "حاصرة مغلقة", englishName: "Brace Close", category: "علامات الترقيم", keywords: ["curly", "code"] },
    
    // --- Quotes & Dashes ---
    { id: "p20", symbol: "—", arabicName: "شرطة طويلة", englishName: "Em Dash", category: "علامات الترقيم", keywords: ["hyphen", "minus", "long"] },
    { id: "p21", symbol: "–", arabicName: "شرطة متوسطة", englishName: "En Dash", category: "علامات الترقيم", keywords: ["hyphen", "range"] },
    { id: "p22", symbol: "\"", arabicName: "تنصيص مزدوج", englishName: "Double Quote", category: "علامات الترقيم", keywords: ["speech", "string"] },
    { id: "p23", symbol: "'", arabicName: "تنصيص مفرد", englishName: "Single Quote", category: "علامات الترقيم", keywords: ["speech", "char"] },
    { id: "p24", symbol: "…", arabicName: "نقاط حذف", englishName: "Ellipsis", category: "علامات الترقيم", keywords: ["dots", "continuation"] }
];