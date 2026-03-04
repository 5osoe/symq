const DATA_MATH = [

    // \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
    // \u0631\u064a\u0627\u0636\u064a\u0627\u062a \u2014 \u0627\u0644\u0639\u0645\u0644\u064a\u0627\u062a \u0627\u0644\u0623\u0633\u0627\u0633\u064a\u0629
    // \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
    {
        id: "m01", symbol: "+",
        arabicName: "\u0632\u0627\u0626\u062f", englishName: "Plus",
        category: "\u0631\u0645\u0648\u0632 \u0639\u0644\u0645\u064a\u0629", subCategory: "\u0631\u064a\u0627\u0636\u064a\u0627\u062a",
        keywords: ["add", "addition", "positive", "\u062c\u0645\u0639"],
        keyboardMethod: { layout: "English / Arabic", combination: "Shift + =", altCode: "Alt + 43", notes: "" }
    },
    {
        id: "m02", symbol: "\u2212",
        arabicName: "\u0646\u0627\u0642\u0635", englishName: "Minus",
        category: "\u0631\u0645\u0648\u0632 \u0639\u0644\u0645\u064a\u0629", subCategory: "\u0631\u064a\u0627\u0636\u064a\u0627\u062a",
        keywords: ["subtract", "negative", "dash", "\u0637\u0631\u062d"],
        keyboardMethod: { layout: "", combination: "", altCode: "Alt + 8722", notes: "Standard hyphen (-) is Key -" }
    },
    {
        id: "m03", symbol: "\u00d7",
        arabicName: "\u0636\u0631\u0628", englishName: "Multiply",
        category: "\u0631\u0645\u0648\u0632 \u0639\u0644\u0645\u064a\u0629", subCategory: "\u0631\u064a\u0627\u0636\u064a\u0627\u062a",
        keywords: ["times", "star", "product", "\u0641\u064a"],
        keyboardMethod: { layout: "Arabic 101", combination: "Shift + H", altCode: "Alt + 0215", notes: "" }
    },
    {
        id: "m04", symbol: "\u00f7",
        arabicName: "\u0642\u0633\u0645\u0629", englishName: "Divide",
        category: "\u0631\u0645\u0648\u0632 \u0639\u0644\u0645\u064a\u0629", subCategory: "\u0631\u064a\u0627\u0636\u064a\u0627\u062a",
        keywords: ["division", "slash", "obelus", "\u0639\u0644\u0649"],
        keyboardMethod: { layout: "Arabic 101", combination: "Shift + I", altCode: "Alt + 0247", notes: "" }
    },
    {
        id: "m05", symbol: "=",
        arabicName: "\u064a\u0633\u0627\u0648\u064a", englishName: "Equals",
        category: "\u0631\u0645\u0648\u0632 \u0639\u0644\u0645\u064a\u0629", subCategory: "\u0631\u064a\u0627\u0636\u064a\u0627\u062a",
        keywords: ["result", "is", "equal"],
        keyboardMethod: { layout: "English / Arabic", combination: "= Key", altCode: "Alt + 61", notes: "" }
    },
    {
        id: "m06", symbol: "\u2260",
        arabicName: "\u0644\u0627 \u064a\u0633\u0627\u0648\u064a", englishName: "Not Equal",
        category: "\u0631\u0645\u0648\u0632 \u0639\u0644\u0645\u064a\u0629", subCategory: "\u0631\u064a\u0627\u0636\u064a\u0627\u062a",
        keywords: ["diff", "unequal"],
        keyboardMethod: { layout: "", combination: "", altCode: "Alt + 8800", notes: "" }
    },
    {
        id: "m07", symbol: ">",
        arabicName: "\u0623\u0643\u0628\u0631 \u0645\u0646", englishName: "Greater Than",
        category: "\u0631\u0645\u0648\u0632 \u0639\u0644\u0645\u064a\u0629", subCategory: "\u0631\u064a\u0627\u0636\u064a\u0627\u062a",
        keywords: ["more", "big", "right"],
        keyboardMethod: { layout: "English", combination: "Shift + .", altCode: "Alt + 62", notes: "" }
    },
    {
        id: "m08", symbol: "<",
        arabicName: "\u0623\u0635\u063a\u0631 \u0645\u0646", englishName: "Less Than",
        category: "\u0631\u0645\u0648\u0632 \u0639\u0644\u0645\u064a\u0629", subCategory: "\u0631\u064a\u0627\u0636\u064a\u0627\u062a",
        keywords: ["little", "small", "left"],
        keyboardMethod: { layout: "English", combination: "Shift + ,", altCode: "Alt + 60", notes: "" }
    },
    {
        id: "m09", symbol: "\u2265",
        arabicName: "\u0623\u0643\u0628\u0631 \u0623\u0648 \u064a\u0633\u0627\u0648\u064a", englishName: "Greater or Equal",
        category: "\u0631\u0645\u0648\u0632 \u0639\u0644\u0645\u064a\u0629", subCategory: "\u0631\u064a\u0627\u0636\u064a\u0627\u062a",
        keywords: ["more", "at least"],
        keyboardMethod: { layout: "", combination: "", altCode: "Alt + 242", notes: "" }
    },
    {
        id: "m10", symbol: "\u2264",
        arabicName: "\u0623\u0635\u063a\u0631 \u0623\u0648 \u064a\u0633\u0627\u0648\u064a", englishName: "Less or Equal",
        category: "\u0631\u0645\u0648\u0632 \u0639\u0644\u0645\u064a\u0629", subCategory: "\u0631\u064a\u0627\u0636\u064a\u0627\u062a",
        keywords: ["most", "at most"],
        keyboardMethod: { layout: "", combination: "", altCode: "Alt + 243", notes: "" }
    },
    {
        id: "m11", symbol: "\u2248",
        arabicName: "\u062a\u0642\u0631\u064a\u0628\u0627\u064b", englishName: "Approximately",
        category: "\u0631\u0645\u0648\u0632 \u0639\u0644\u0645\u064a\u0629", subCategory: "\u0631\u064a\u0627\u0636\u064a\u0627\u062a",
        keywords: ["around", "almost", "tilde"],
        keyboardMethod: { layout: "", combination: "", altCode: "Alt + 247", notes: "" }
    },
    {
        id: "m12", symbol: "\u00b1",
        arabicName: "\u0632\u0627\u0626\u062f \u0623\u0648 \u0646\u0627\u0642\u0635", englishName: "Plus Minus",
        category: "\u0631\u0645\u0648\u0632 \u0639\u0644\u0645\u064a\u0629", subCategory: "\u0631\u064a\u0627\u0636\u064a\u0627\u062a",
        keywords: ["margin", "error", "tolerance"],
        keyboardMethod: { layout: "", combination: "", altCode: "Alt + 0177", notes: "" }
    },
    {
        id: "m13", symbol: "\u221a",
        arabicName: "\u062c\u0630\u0631 \u062a\u0631\u0628\u064a\u0639\u064a", englishName: "Square Root",
        category: "\u0631\u0645\u0648\u0632 \u0639\u0644\u0645\u064a\u0629", subCategory: "\u0631\u064a\u0627\u0636\u064a\u0627\u062a",
        keywords: ["radical", "math", "root"],
        keyboardMethod: { layout: "", combination: "", altCode: "Alt + 251", notes: "" }
    },
    {
        id: "m14", symbol: "\u221e",
        arabicName: "\u0644\u0627\u0646\u0647\u0627\u064a\u0629", englishName: "Infinity",
        category: "\u0631\u0645\u0648\u0632 \u0639\u0644\u0645\u064a\u0629", subCategory: "\u0631\u064a\u0627\u0636\u064a\u0627\u062a",
        keywords: ["loop", "forever", "unlimited", "\u0627\u0628\u062f"],
        keyboardMethod: { layout: "", combination: "", altCode: "Alt + 236", notes: "" }
    },
    {
        id: "m15", symbol: "\u03c0",
        arabicName: "\u0628\u0627\u064a", englishName: "Pi",
        category: "\u0631\u0645\u0648\u0632 \u0639\u0644\u0645\u064a\u0629", subCategory: "\u0631\u064a\u0627\u0636\u064a\u0627\u062a",
        keywords: ["circle", "3.14", "constant", "\u0637"],
        keyboardMethod: { layout: "", combination: "", altCode: "Alt + 227", notes: "" }
    },
    {
        id: "m16", symbol: "\u2211",
        arabicName: "\u0645\u062c\u0645\u0648\u0639 (\u0633\u064a\u062c\u0645\u0627)", englishName: "Summation",
        category: "\u0631\u0645\u0648\u0632 \u0639\u0644\u0645\u064a\u0629", subCategory: "\u0631\u064a\u0627\u0636\u064a\u0627\u062a",
        keywords: ["sigma", "total", "add", "\u0633\u064a\u062c\u0645\u0627"],
        keyboardMethod: { layout: "", combination: "", altCode: "Alt + 228", notes: "" }
    },
    {
        id: "m17", symbol: "\u222b",
        arabicName: "\u062a\u0643\u0627\u0645\u0644", englishName: "Integral",
        category: "\u0631\u0645\u0648\u0632 \u0639\u0644\u0645\u064a\u0629", subCategory: "\u0631\u064a\u0627\u0636\u064a\u0627\u062a",
        keywords: ["calculus", "math", "area"],
        keyboardMethod: { layout: "", combination: "", altCode: "Alt + 8747", notes: "" }
    },
    {
        id: "m18", symbol: "\u2206",
        arabicName: "\u062f\u0644\u062a\u0627", englishName: "Delta",
        category: "\u0631\u0645\u0648\u0632 \u0639\u0644\u0645\u064a\u0629", subCategory: "\u0631\u064a\u0627\u0636\u064a\u0627\u062a",
        keywords: ["change", "triangle", "diff", "\u0641\u0631\u0642"],
        keyboardMethod: { layout: "", combination: "", altCode: "Alt + 916", notes: "" }
    },
    {
        id: "m19", symbol: "\u2202",
        arabicName: "\u062a\u0641\u0627\u0636\u0644 \u062c\u0632\u0626\u064a", englishName: "Partial Derivative",
        category: "\u0631\u0645\u0648\u0632 \u0639\u0644\u0645\u064a\u0629", subCategory: "\u0631\u064a\u0627\u0636\u064a\u0627\u062a",
        keywords: ["derivative", "delta", "calculus"],
        keyboardMethod: { layout: "", combination: "", altCode: "Alt + 8706", notes: "" }
    },
    {
        id: "m20", symbol: "\u221d",
        arabicName: "\u064a\u062a\u0646\u0627\u0633\u0628 \u0645\u0639", englishName: "Proportional To",
        category: "\u0631\u0645\u0648\u0632 \u0639\u0644\u0645\u064a\u0629", subCategory: "\u0631\u064a\u0627\u0636\u064a\u0627\u062a",
        keywords: ["alpha", "relation", "varies"],
        keyboardMethod: { layout: "", combination: "", altCode: "Alt + 8733", notes: "" }
    },
    {
        id: "m21", symbol: "\u00b0",
        arabicName: "\u062f\u0631\u062c\u0629", englishName: "Degree",
        category: "\u0631\u0645\u0648\u0632 \u0639\u0644\u0645\u064a\u0629", subCategory: "\u0631\u064a\u0627\u0636\u064a\u0627\u062a",
        keywords: ["angle", "temp", "celsius", "\u0632\u0627\u0648\u064a\u0629"],
        keyboardMethod: { layout: "", combination: "", altCode: "Alt + 0176", notes: "" }
    },
    {
        id: "m22", symbol: "\u2030",
        arabicName: "\u0628\u0627\u0644\u0623\u0644\u0641", englishName: "Per Mille",
        category: "\u0631\u0645\u0648\u0632 \u0639\u0644\u0645\u064a\u0629", subCategory: "\u0631\u064a\u0627\u0636\u064a\u0627\u062a",
        keywords: ["percent", "ratio", "thousand"],
        keyboardMethod: { layout: "", combination: "", altCode: "Alt + 0137", notes: "" }
    },
    {
        id: "m23", symbol: "\u2220",
        arabicName: "\u0632\u0627\u0648\u064a\u0629", englishName: "Angle",
        category: "\u0631\u0645\u0648\u0632 \u0639\u0644\u0645\u064a\u0629", subCategory: "\u0631\u064a\u0627\u0636\u064a\u0627\u062a",
        keywords: ["geometry", "shape", "corner"],
        keyboardMethod: { layout: "", combination: "", altCode: "Alt + 8736", notes: "" }
    },

    // \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
    // \u0631\u064a\u0627\u0636\u064a\u0627\u062a \u0645\u062a\u0642\u062f\u0645\u0629 \u2014 \u0646\u0638\u0631\u064a\u0629 \u0627\u0644\u0645\u062c\u0645\u0648\u0639\u0627\u062a \u0648\u0627\u0644\u0645\u0646\u0637\u0642
    // \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
    {
        id: "m24", symbol: "\u2200",
        arabicName: "\u0644\u0643\u0644 (\u0643\u0645\u0651\u064a \u0639\u0627\u0645)", englishName: "For All",
        category: "\u0631\u0645\u0648\u0632 \u0639\u0644\u0645\u064a\u0629", subCategory: "\u0631\u064a\u0627\u0636\u064a\u0627\u062a \u0645\u062a\u0642\u062f\u0645\u0629",
        keywords: ["for all", "universal", "quantifier", "\u0645\u0646\u0637\u0642"],
        keyboardMethod: { layout: "", combination: "", altCode: "Alt + 8704", notes: "" }
    },
    {
        id: "m25", symbol: "\u2203",
        arabicName: "\u064a\u0648\u062c\u062f (\u0643\u0645\u0651\u064a \u0648\u062c\u0648\u062f\u064a)", englishName: "There Exists",
        category: "\u0631\u0645\u0648\u0632 \u0639\u0644\u0645\u064a\u0629", subCategory: "\u0631\u064a\u0627\u0636\u064a\u0627\u062a \u0645\u062a\u0642\u062f\u0645\u0629",
        keywords: ["exists", "existential", "quantifier"],
        keyboardMethod: { layout: "", combination: "", altCode: "Alt + 8707", notes: "" }
    },
    {
        id: "m26", symbol: "\u2204",
        arabicName: "\u0644\u0627 \u064a\u0648\u062c\u062f", englishName: "There Does Not Exist",
        category: "\u0631\u0645\u0648\u0632 \u0639\u0644\u0645\u064a\u0629", subCategory: "\u0631\u064a\u0627\u0636\u064a\u0627\u062a \u0645\u062a\u0642\u062f\u0645\u0629",
        keywords: ["not exists", "none", "negation"],
        keyboardMethod: { layout: "", combination: "", altCode: "Alt + 8708", notes: "" }
    },
    {
        id: "m27", symbol: "\u2208",
        arabicName: "\u064a\u0646\u062a\u0645\u064a \u0625\u0644\u0649", englishName: "Element Of",
        category: "\u0631\u0645\u0648\u0632 \u0639\u0644\u0645\u064a\u0629", subCategory: "\u0631\u064a\u0627\u0636\u064a\u0627\u062a \u0645\u062a\u0642\u062f\u0645\u0629",
        keywords: ["belongs", "member", "set", "\u0645\u062c\u0645\u0648\u0639\u0629"],
        keyboardMethod: { layout: "", combination: "", altCode: "Alt + 8712", notes: "" }
    },
    {
        id: "m28", symbol: "\u2209",
        arabicName: "\u0644\u0627 \u064a\u0646\u062a\u0645\u064a \u0625\u0644\u0649", englishName: "Not an Element Of",
        category: "\u0631\u0645\u0648\u0632 \u0639\u0644\u0645\u064a\u0629", subCategory: "\u0631\u064a\u0627\u0636\u064a\u0627\u062a \u0645\u062a\u0642\u062f\u0645\u0629",
        keywords: ["not member", "not belong", "set"],
        keyboardMethod: { layout: "", combination: "", altCode: "Alt + 8713", notes: "" }
    },
    {
        id: "m29", symbol: "\u2282",
        arabicName: "\u062c\u0632\u0621 \u0645\u0646 (\u0645\u062c\u0645\u0648\u0639\u0629 \u0641\u0631\u0639\u064a\u0629)", englishName: "Subset Of",
        category: "\u0631\u0645\u0648\u0632 \u0639\u0644\u0645\u064a\u0629", subCategory: "\u0631\u064a\u0627\u0636\u064a\u0627\u062a \u0645\u062a\u0642\u062f\u0645\u0629",
        keywords: ["subset", "contained", "set"],
        keyboardMethod: { layout: "", combination: "", altCode: "Alt + 8834", notes: "" }
    },
    {
        id: "m30", symbol: "\u2283",
        arabicName: "\u064a\u062d\u062a\u0648\u064a \u0639\u0644\u0649 (\u0645\u062c\u0645\u0648\u0639\u0629 \u0639\u0644\u064a\u0627)", englishName: "Superset Of",
        category: "\u0631\u0645\u0648\u0632 \u0639\u0644\u0645\u064a\u0629", subCategory: "\u0631\u064a\u0627\u0636\u064a\u0627\u062a \u0645\u062a\u0642\u062f\u0645\u0629",
        keywords: ["superset", "contains", "set"],
        keyboardMethod: { layout: "", combination: "", altCode: "Alt + 8835", notes: "" }
    },
    {
        id: "m31", symbol: "\u2286",
        arabicName: "\u062c\u0632\u0621 \u0645\u0646 \u0623\u0648 \u064a\u0633\u0627\u0648\u064a", englishName: "Subset of or Equal To",
        category: "\u0631\u0645\u0648\u0632 \u0639\u0644\u0645\u064a\u0629", subCategory: "\u0631\u064a\u0627\u0636\u064a\u0627\u062a \u0645\u062a\u0642\u062f\u0645\u0629",
        keywords: ["subset equal", "set"],
        keyboardMethod: { layout: "", combination: "", altCode: "Alt + 8838", notes: "" }
    },
    {
        id: "m32", symbol: "\u222a",
        arabicName: "\u0627\u062a\u062d\u0627\u062f \u0645\u062c\u0645\u0648\u0639\u062a\u064a\u0646", englishName: "Union",
        category: "\u0631\u0645\u0648\u0632 \u0639\u0644\u0645\u064a\u0629", subCategory: "\u0631\u064a\u0627\u0636\u064a\u0627\u062a \u0645\u062a\u0642\u062f\u0645\u0629",
        keywords: ["union", "join", "set", "\u0627\u062a\u062d\u0627\u062f"],
        keyboardMethod: { layout: "", combination: "", altCode: "Alt + 8746", notes: "" }
    },
    {
        id: "m33", symbol: "\u2229",
        arabicName: "\u062a\u0642\u0627\u0637\u0639 \u0645\u062c\u0645\u0648\u0639\u062a\u064a\u0646", englishName: "Intersection",
        category: "\u0631\u0645\u0648\u0632 \u0639\u0644\u0645\u064a\u0629", subCategory: "\u0631\u064a\u0627\u0636\u064a\u0627\u062a \u0645\u062a\u0642\u062f\u0645\u0629",
        keywords: ["intersection", "common", "set", "\u062a\u0642\u0627\u0637\u0639"],
        keyboardMethod: { layout: "", combination: "", altCode: "Alt + 8745", notes: "" }
    },
    {
        id: "m34", symbol: "\u2205",
        arabicName: "\u0645\u062c\u0645\u0648\u0639\u0629 \u062e\u0627\u0644\u064a\u0629", englishName: "Empty Set",
        category: "\u0631\u0645\u0648\u0632 \u0639\u0644\u0645\u064a\u0629", subCategory: "\u0631\u064a\u0627\u0636\u064a\u0627\u062a \u0645\u062a\u0642\u062f\u0645\u0629",
        keywords: ["empty", "null", "void", "set", "\u0641\u0627\u0631\u063a\u0629"],
        keyboardMethod: { layout: "", combination: "", altCode: "Alt + 8709", notes: "" }
    },
    {
        id: "m35", symbol: "\u2295",
        arabicName: "\u0623\u0648 \u0627\u0644\u062d\u0635\u0631\u064a (XOR)", englishName: "Exclusive Or / Direct Sum",
        category: "\u0631\u0645\u0648\u0632 \u0639\u0644\u0645\u064a\u0629", subCategory: "\u0631\u064a\u0627\u0636\u064a\u0627\u062a \u0645\u062a\u0642\u062f\u0645\u0629",
        keywords: ["xor", "exclusive", "logic", "\u0645\u0646\u0637\u0642"],
        keyboardMethod: { layout: "", combination: "", altCode: "Alt + 8853", notes: "" }
    },
    {
        id: "m36", symbol: "\u2227",
        arabicName: "\u0648 (\u0627\u0644\u0645\u0646\u0637\u0642\u064a\u0629)", englishName: "Logical And",
        category: "\u0631\u0645\u0648\u0632 \u0639\u0644\u0645\u064a\u0629", subCategory: "\u0631\u064a\u0627\u0636\u064a\u0627\u062a \u0645\u062a\u0642\u062f\u0645\u0629",
        keywords: ["and", "logic", "conjunction"],
        keyboardMethod: { layout: "", combination: "", altCode: "Alt + 8743", notes: "" }
    },
    {
        id: "m37", symbol: "\u2228",
        arabicName: "\u0623\u0648 (\u0627\u0644\u0645\u0646\u0637\u0642\u064a\u0629)", englishName: "Logical Or",
        category: "\u0631\u0645\u0648\u0632 \u0639\u0644\u0645\u064a\u0629", subCategory: "\u0631\u064a\u0627\u0636\u064a\u0627\u062a \u0645\u062a\u0642\u062f\u0645\u0629",
        keywords: ["or", "logic", "disjunction"],
        keyboardMethod: { layout: "", combination: "", altCode: "Alt + 8744", notes: "" }
    },
    {
        id: "m38", symbol: "\u00ac",
        arabicName: "\u0646\u0641\u064a (NOT \u0627\u0644\u0645\u0646\u0637\u0642\u064a\u0629)", englishName: "Not Sign",
        category: "\u0631\u0645\u0648\u0632 \u0639\u0644\u0645\u064a\u0629", subCategory: "\u0631\u064a\u0627\u0636\u064a\u0627\u062a \u0645\u062a\u0642\u062f\u0645\u0629",
        keywords: ["not", "negation", "logic"],
        keyboardMethod: { layout: "", combination: "", altCode: "Alt + 0172", notes: "" }
    },
    {
        id: "m39", symbol: "\u27f9",
        arabicName: "\u064a\u0633\u062a\u0644\u0632\u0645 (\u0625\u0630\u0627...\u0641\u0625\u0646)", englishName: "Implies",
        category: "\u0631\u0645\u0648\u0632 \u0639\u0644\u0645\u064a\u0629", subCategory: "\u0631\u064a\u0627\u0636\u064a\u0627\u062a \u0645\u062a\u0642\u062f\u0645\u0629",
        keywords: ["implies", "if then", "logic", "arrow"],
        keyboardMethod: { layout: "", combination: "", altCode: "Alt + 10233", notes: "" }
    },
    {
        id: "m40", symbol: "\u27fa",
        arabicName: "\u0625\u0630\u0627 \u0648\u0641\u0642\u0637 \u0625\u0630\u0627", englishName: "If and Only If",
        category: "\u0631\u0645\u0648\u0632 \u0639\u0644\u0645\u064a\u0629", subCategory: "\u0631\u064a\u0627\u0636\u064a\u0627\u062a \u0645\u062a\u0642\u062f\u0645\u0629",
        keywords: ["iff", "biconditional", "equivalence"],
        keyboardMethod: { layout: "", combination: "", altCode: "Alt + 10234", notes: "" }
    },
    {
        id: "m41", symbol: "\u220f",
        arabicName: "\u0636\u0631\u0628 \u0645\u062a\u0633\u0644\u0633\u0644 (\u0628\u0627\u064a \u0627\u0644\u0643\u0628\u064a\u0631\u0629)", englishName: "Product",
        category: "\u0631\u0645\u0648\u0632 \u0639\u0644\u0645\u064a\u0629", subCategory: "\u0631\u064a\u0627\u0636\u064a\u0627\u062a \u0645\u062a\u0642\u062f\u0645\u0629",
        keywords: ["product", "pi", "series", "\u062c\u062f\u0627\u0621"],
        keyboardMethod: { layout: "", combination: "", altCode: "Alt + 8719", notes: "" }
    },
    {
        id: "m42", symbol: "\u222c",
        arabicName: "\u062a\u0643\u0627\u0645\u0644 \u0645\u0632\u062f\u0648\u062c", englishName: "Double Integral",
        category: "\u0631\u0645\u0648\u0632 \u0639\u0644\u0645\u064a\u0629", subCategory: "\u0631\u064a\u0627\u0636\u064a\u0627\u062a \u0645\u062a\u0642\u062f\u0645\u0629",
        keywords: ["double integral", "calculus", "area"],
        keyboardMethod: { layout: "", combination: "", altCode: "Alt + 8748", notes: "" }
    },
    {
        id: "m43", symbol: "\u222e",
        arabicName: "\u062a\u0643\u0627\u0645\u0644 \u0645\u063a\u0644\u0642", englishName: "Contour Integral",
        category: "\u0631\u0645\u0648\u0632 \u0639\u0644\u0645\u064a\u0629", subCategory: "\u0631\u064a\u0627\u0636\u064a\u0627\u062a \u0645\u062a\u0642\u062f\u0645\u0629",
        keywords: ["contour", "closed", "integral", "loop"],
        keyboardMethod: { layout: "", combination: "", altCode: "Alt + 8750", notes: "" }
    },
    {
        id: "m44", symbol: