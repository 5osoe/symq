const DATA_PUNCTUATION = [
    // --- Arabic Punctuation ---
    { 
        id: "p01", 
        symbol: "،", 
        arabicName: "فاصلة", 
        englishName: "Arabic Comma", 
        category: "علامات الترقيم", 
        keywords: ["comma", "separator", "fasla"],
        keyboardMethod: {
            layout: "Arabic 101",
            combination: "Shift + K",
            altCode: "Alt + 0154",
            notes: ""
        }
    },
    { 
        id: "p02", 
        symbol: "؛", 
        arabicName: "فاصلة منقوطة", 
        englishName: "Arabic Semicolon", 
        category: "علامات الترقيم", 
        keywords: ["pause", "fasla"],
        keyboardMethod: {
            layout: "Arabic 101",
            combination: "Shift + P",
            altCode: "Alt + 0156",
            notes: ""
        }
    },
    { 
        id: "p03", 
        symbol: "؟", 
        arabicName: "علامة استفهام", 
        englishName: "Question Mark", 
        category: "علامات الترقيم", 
        keywords: ["query", "ask"],
        keyboardMethod: {
            layout: "Arabic 101",
            combination: "Shift + /",
            altCode: "Alt + 0159",
            notes: "Same physical key as English ?"
        }
    },
    { 
        id: "p04", 
        symbol: "«", 
        arabicName: "قوس يمين", 
        englishName: "Guillemet Right", 
        category: "علامات الترقيم", 
        keywords: ["quote", "bracket", "qaws"],
        keyboardMethod: {
            layout: "",
            combination: "",
            altCode: "Alt + 174",
            notes: ""
        }
    },
    { 
        id: "p05", 
        symbol: "»", 
        arabicName: "قوس يسار", 
        englishName: "Guillemet Left", 
        category: "علامات الترقيم", 
        keywords: ["quote", "bracket", "qaws"],
        keyboardMethod: {
            layout: "",
            combination: "",
            altCode: "Alt + 175",
            notes: ""
        }
    },
    { 
        id: "p06", 
        symbol: "ـ", 
        arabicName: "كشيدة", 
        englishName: "Tatweel/Kashida", 
        category: "علامات الترقيم", 
        keywords: ["stretch", "extend", "line"],
        keyboardMethod: {
            layout: "Arabic 101",
            combination: "Shift + J",
            altCode: "Alt + 0220",
            notes: ""
        }
    },
    { 
        id: "p07", 
        symbol: "٪", 
        arabicName: "نسبة مئوية", 
        englishName: "Arabic Percent", 
        category: "علامات الترقيم", 
        keywords: ["math", "percent", "mod"],
        keyboardMethod: {
            layout: "Arabic 101",
            combination: "Shift + 5",
            altCode: "Alt + 0164",
            notes: ""
        }
    },

    // --- English/General Punctuation ---
    { 
        id: "p08", 
        symbol: ".", 
        arabicName: "نقطة", 
        englishName: "Full Stop", 
        category: "علامات الترقيم", 
        keywords: ["dot", "period", "end"],
        keyboardMethod: {
            layout: "English / Arabic",
            combination: "Period Key (.)",
            altCode: "Alt + 46",
            notes: "Shift+Z in Arabic"
        }
    },
    { 
        id: "p09", 
        symbol: ",", 
        arabicName: "فاصلة إنجليزية", 
        englishName: "Comma (En)", 
        category: "علامات الترقيم", 
        keywords: ["comma", "separator"],
        keyboardMethod: {
            layout: "English",
            combination: "Comma Key (,)",
            altCode: "Alt + 44",
            notes: "Shift+W in Arabic maps to ، sometimes depending on OS"
        }
    },
    { 
        id: "p10", 
        symbol: ":", 
        arabicName: "نقطتان", 
        englishName: "Colon", 
        category: "علامات الترقيم", 
        keywords: ["list", "ratio"],
        keyboardMethod: {
            layout: "English / Arabic",
            combination: "Shift + ;",
            altCode: "Alt + 58",
            notes: ""
        }
    },
    { 
        id: "p11", 
        symbol: ";", 
        arabicName: "منقوطة إنجليزية", 
        englishName: "Semicolon (En)", 
        category: "علامات الترقيم", 
        keywords: ["pause"],
        keyboardMethod: {
            layout: "English",
            combination: "Semicolon Key (;)",
            altCode: "Alt + 59",
            notes: ""
        }
    },
    { 
        id: "p12", 
        symbol: "!", 
        arabicName: "تعجب", 
        englishName: "Exclamation", 
        category: "علامات الترقيم", 
        keywords: ["bang", "shout", "alert"],
        keyboardMethod: {
            layout: "English / Arabic",
            combination: "Shift + 1",
            altCode: "Alt + 33",
            notes: ""
        }
    },
    { 
        id: "p13", 
        symbol: "?", 
        arabicName: "استفهام إنجليزية", 
        englishName: "Question (En)", 
        category: "علامات الترقيم", 
        keywords: ["query", "ask"],
        keyboardMethod: {
            layout: "English",
            combination: "Shift + /",
            altCode: "Alt + 63",
            notes: ""
        }
    },
    
    // --- Brackets & Dashes ---
    { 
        id: "p14", 
        symbol: "(", 
        arabicName: "قوس مفتوح", 
        englishName: "Parenthesis Open", 
        category: "علامات الترقيم", 
        keywords: ["bracket", "9"],
        keyboardMethod: {
            layout: "English / Arabic",
            combination: "Shift + 9",
            altCode: "Alt + 40",
            notes: ""
        }
    },
    { 
        id: "p15", 
        symbol: ")", 
        arabicName: "قوس مغلق", 
        englishName: "Parenthesis Close", 
        category: "علامات الترقيم", 
        keywords: ["bracket", "0"],
        keyboardMethod: {
            layout: "English / Arabic",
            combination: "Shift + 0",
            altCode: "Alt + 41",
            notes: ""
        }
    },
    { 
        id: "p16", 
        symbol: "[", 
        arabicName: "معقوف مفتوح", 
        englishName: "Bracket Open", 
        category: "علامات الترقيم", 
        keywords: ["square", "array"],
        keyboardMethod: {
            layout: "English",
            combination: "[",
            altCode: "Alt + 91",
            notes: "Arabic: Shift + F"
        }
    },
    { 
        id: "p17", 
        symbol: "]", 
        arabicName: "معقوف مغلق", 
        englishName: "Bracket Close", 
        category: "علامات الترقيم", 
        keywords: ["square", "array"],
        keyboardMethod: {
            layout: "English",
            combination: "]",
            altCode: "Alt + 93",
            notes: "Arabic: Shift + D"
        }
    },
    { 
        id: "p18", 
        symbol: "{", 
        arabicName: "حاصرة مفتوحة", 
        englishName: "Brace Open", 
        category: "علامات الترقيم", 
        keywords: ["curly", "code"],
        keyboardMethod: {
            layout: "English",
            combination: "Shift + [",
            altCode: "Alt + 123",
            notes: "Arabic: Shift + C"
        }
    },
    { 
        id: "p19", 
        symbol: "}", 
        arabicName: "حاصرة مغلقة", 
        englishName: "Brace Close", 
        category: "علامات الترقيم", 
        keywords: ["curly", "code"],
        keyboardMethod: {
            layout: "English",
            combination: "Shift + ]",
            altCode: "Alt + 125",
            notes: "Arabic: Shift + V"
        }
    },
    
    // --- Quotes & Dashes ---
    { 
        id: "p20", 
        symbol: "—", 
        arabicName: "شرطة طويلة", 
        englishName: "Em Dash", 
        category: "علامات الترقيم", 
        keywords: ["hyphen", "minus", "long"],
        keyboardMethod: {
            layout: "",
            combination: "",
            altCode: "Alt + 0151",
            notes: ""
        }
    },
    { 
        id: "p21", 
        symbol: "–", 
        arabicName: "شرطة متوسطة", 
        englishName: "En Dash", 
        category: "علامات الترقيم", 
        keywords: ["hyphen", "range"],
        keyboardMethod: {
            layout: "",
            combination: "",
            altCode: "Alt + 0150",
            notes: ""
        }
    },
    { 
        id: "p22", 
        symbol: "\"", 
        arabicName: "تنصيص مزدوج", 
        englishName: "Double Quote", 
        category: "علامات الترقيم", 
        keywords: ["speech", "string"],
        keyboardMethod: {
            layout: "English",
            combination: "Shift + '",
            altCode: "Alt + 34",
            notes: "Arabic: Shift + ط"
        }
    },
    { 
        id: "p23", 
        symbol: "'", 
        arabicName: "تنصيص مفرد", 
        englishName: "Single Quote", 
        category: "علامات الترقيم", 
        keywords: ["speech", "char"],
        keyboardMethod: {
            layout: "English",
            combination: "' Key",
            altCode: "Alt + 39",
            notes: "Arabic: Key /"
        }
    },
    { 
        id: "p24", 
        symbol: "…", 
        arabicName: "نقاط حذف", 
        englishName: "Ellipsis", 
        category: "علامات الترقيم", 
        keywords: ["dots", "continuation"],
        keyboardMethod: {
            layout: "",
            combination: "",
            altCode: "Alt + 0133",
            notes: ""
        }
    }
];