const DATA_MATH = [
    // --- Basic Operations ---
    { 
        id: "m01", 
        symbol: "+", 
        arabicName: "زائد", 
        englishName: "Plus", 
        category: "الرموز الرياضية", 
        keywords: ["add", "addition", "positive", "جمع"],
        keyboardMethod: {
            layout: "English / Arabic",
            combination: "Shift + =",
            altCode: "Alt + 43",
            notes: ""
        }
    },
    { 
        id: "m02", 
        symbol: "−", 
        arabicName: "ناقص", 
        englishName: "Minus", 
        category: "الرموز الرياضية", 
        keywords: ["subtract", "negative", "dash", "طرح"],
        keyboardMethod: {
            layout: "",
            combination: "",
            altCode: "Alt + 8722",
            notes: "Standard hyphen (-) is Key -"
        }
    },
    { 
        id: "m03", 
        symbol: "×", 
        arabicName: "ضرب", 
        englishName: "Multiply", 
        category: "الرموز الرياضية", 
        keywords: ["times", "star", "product", "في"],
        keyboardMethod: {
            layout: "Arabic 101",
            combination: "Shift + H",
            altCode: "Alt + 0215",
            notes: "Varies by layout version"
        }
    },
    { 
        id: "m04", 
        symbol: "÷", 
        arabicName: "قسمة", 
        englishName: "Divide", 
        category: "الرموز الرياضية", 
        keywords: ["division", "slash", "obelus", "على"],
        keyboardMethod: {
            layout: "Arabic 101",
            combination: "Shift + I",
            altCode: "Alt + 0247",
            notes: "Varies by layout version"
        }
    },
    
    // --- Comparison ---
    { 
        id: "m05", 
        symbol: "=", 
        arabicName: "يساوي", 
        englishName: "Equals", 
        category: "الرموز الرياضية", 
        keywords: ["result", "is", "equal"],
        keyboardMethod: {
            layout: "English / Arabic",
            combination: "= Key",
            altCode: "Alt + 61",
            notes: ""
        }
    },
    { 
        id: "m06", 
        symbol: "≠", 
        arabicName: "لا يساوي", 
        englishName: "Not Equal", 
        category: "الرموز الرياضية", 
        keywords: ["diff", "unequal"],
        keyboardMethod: {
            layout: "",
            combination: "",
            altCode: "Alt + 8800",
            notes: ""
        }
    },
    { 
        id: "m07", 
        symbol: ">", 
        arabicName: "أكبر من", 
        englishName: "Greater Than", 
        category: "الرموز الرياضية", 
        keywords: ["more", "big", "right"],
        keyboardMethod: {
            layout: "English",
            combination: "Shift + .",
            altCode: "Alt + 62",
            notes: "Arabic: Shift + د"
        }
    },
    { 
        id: "m08", 
        symbol: "<", 
        arabicName: "أصغر من", 
        englishName: "Less Than", 
        category: "الرموز الرياضية", 
        keywords: ["little", "small", "left"],
        keyboardMethod: {
            layout: "English",
            combination: "Shift + ,",
            altCode: "Alt + 60",
            notes: "Arabic: Shift + ج"
        }
    },
    { 
        id: "m09", 
        symbol: "≥", 
        arabicName: "أكبر أو يساوي", 
        englishName: "Greater or Equal", 
        category: "الرموز الرياضية", 
        keywords: ["more", "at least"],
        keyboardMethod: {
            layout: "",
            combination: "",
            altCode: "Alt + 242",
            notes: ""
        }
    },
    { 
        id: "m10", 
        symbol: "≤", 
        arabicName: "أصغر أو يساوي", 
        englishName: "Less or Equal", 
        category: "الرموز الرياضية", 
        keywords: ["most", "at most"],
        keyboardMethod: {
            layout: "",
            combination: "",
            altCode: "Alt + 243",
            notes: ""
        }
    },
    { 
        id: "m11", 
        symbol: "≈", 
        arabicName: "تقريباً", 
        englishName: "Approximately", 
        category: "الرموز الرياضية", 
        keywords: ["around", "almost", "tilde", "مائل"],
        keyboardMethod: {
            layout: "",
            combination: "",
            altCode: "Alt + 247",
            notes: "Code varies by codepage"
        }
    },

    // --- Advanced Math ---
    { 
        id: "m12", 
        symbol: "±", 
        arabicName: "زائد أو ناقص", 
        englishName: "Plus Minus", 
        category: "الرموز الرياضية", 
        keywords: ["margin", "error", "tolerance"],
        keyboardMethod: {
            layout: "",
            combination: "",
            altCode: "Alt + 0177",
            notes: ""
        }
    },
    { 
        id: "m13", 
        symbol: "√", 
        arabicName: "جذر", 
        englishName: "Square Root", 
        category: "الرموز الرياضية", 
        keywords: ["radical", "math", "root"],
        keyboardMethod: {
            layout: "",
            combination: "",
            altCode: "Alt + 251",
            notes: ""
        }
    },
    { 
        id: "m14", 
        symbol: "∞", 
        arabicName: "لانهاية", 
        englishName: "Infinity", 
        category: "الرموز الرياضية", 
        keywords: ["loop", "forever", "unlimited", "ابد"],
        keyboardMethod: {
            layout: "",
            combination: "",
            altCode: "Alt + 236",
            notes: ""
        }
    },
    { 
        id: "m15", 
        symbol: "π", 
        arabicName: "باي", 
        englishName: "Pi", 
        category: "الرموز الرياضية", 
        keywords: ["circle", "3.14", "constant", "ط"],
        keyboardMethod: {
            layout: "",
            combination: "",
            altCode: "Alt + 227",
            notes: "Greek Pi: Alt + 960"
        }
    },
    { 
        id: "m16", 
        symbol: "∑", 
        arabicName: "مجموع", 
        englishName: "Summation", 
        category: "الرموز الرياضية", 
        keywords: ["sigma", "total", "add", "سيجما"],
        keyboardMethod: {
            layout: "",
            combination: "",
            altCode: "Alt + 228",
            notes: ""
        }
    },
    { 
        id: "m17", 
        symbol: "∫", 
        arabicName: "تكامل", 
        englishName: "Integral", 
        category: "الرموز الرياضية", 
        keywords: ["calculus", "math", "area"],
        keyboardMethod: {
            layout: "",
            combination: "",
            altCode: "Alt + 8747",
            notes: ""
        }
    },
    { 
        id: "m18", 
        symbol: "∆", 
        arabicName: "دلتا", 
        englishName: "Delta", 
        category: "الرموز الرياضية", 
        keywords: ["change", "triangle", "diff", "فرق"],
        keyboardMethod: {
            layout: "",
            combination: "",
            altCode: "Alt + 916",
            notes: ""
        }
    },
    { 
        id: "m19", 
        symbol: "∂", 
        arabicName: "تفاضل جزئي", 
        englishName: "Partial Diff", 
        category: "الرموز الرياضية", 
        keywords: ["derivative", "delta", "d"],
        keyboardMethod: {
            layout: "",
            combination: "",
            altCode: "Alt + 8706",
            notes: ""
        }
    },
    { 
        id: "m20", 
        symbol: "∝", 
        arabicName: "تناسب", 
        englishName: "Proportional", 
        category: "الرموز الرياضية", 
        keywords: ["alpha", "relation", "varies"],
        keyboardMethod: {
            layout: "",
            combination: "",
            altCode: "Alt + 8733",
            notes: ""
        }
    },

    // --- Geometry & Misc ---
    { 
        id: "m21", 
        symbol: "°", 
        arabicName: "درجة", 
        englishName: "Degree", 
        category: "الرموز الرياضية", 
        keywords: ["angle", "temp", "celsius"],
        keyboardMethod: {
            layout: "",
            combination: "",
            altCode: "Alt + 0176",
            notes: ""
        }
    },
    { 
        id: "m22", 
        symbol: "‰", 
        arabicName: "بالألف", 
        englishName: "Per Mille", 
        category: "الرموز الرياضية", 
        keywords: ["percent", "ratio", "thousand"],
        keyboardMethod: {
            layout: "",
            combination: "",
            altCode: "Alt + 0137",
            notes: ""
        }
    },
    { 
        id: "m23", 
        symbol: "∠", 
        arabicName: "زاوية", 
        englishName: "Angle", 
        category: "الرموز الرياضية", 
        keywords: ["geometry", "shape", "corner"],
        keyboardMethod: {
            layout: "",
            combination: "",
            altCode: "Alt + 8736",
            notes: ""
        }
    }
];