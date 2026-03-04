const DATA_SCIENCE = [

    // ════════════════════════════════════════════
    // رياضيات — العمليات الأساسية
    // ════════════════════════════════════════════
    {
        id: "m01", symbol: "+",
        arabicName: "زائد", englishName: "Plus",
        category: "رموز علمية", subCategory: "رياضيات",
        keywords: ["add", "addition", "positive", "جمع"],
        keyboardMethod: { layout: "English / Arabic", combination: "Shift + =", altCode: "Alt + 43", notes: "" }
    },
    {
        id: "m02", symbol: "−",
        arabicName: "ناقص", englishName: "Minus",
        category: "رموز علمية", subCategory: "رياضيات",
        keywords: ["subtract", "negative", "dash", "طرح"],
        keyboardMethod: { layout: "", combination: "", altCode: "Alt + 8722", notes: "Standard hyphen (-) is Key -" }
    },
    {
        id: "m03", symbol: "×",
        arabicName: "ضرب", englishName: "Multiply",
        category: "رموز علمية", subCategory: "رياضيات",
        keywords: ["times", "star", "product", "في"],
        keyboardMethod: { layout: "Arabic 101", combination: "Shift + H", altCode: "Alt + 0215", notes: "" }
    },
    {
        id: "m04", symbol: "÷",
        arabicName: "قسمة", englishName: "Divide",
        category: "رموز علمية", subCategory: "رياضيات",
        keywords: ["division", "slash", "obelus", "على"],
        keyboardMethod: { layout: "Arabic 101", combination: "Shift + I", altCode: "Alt + 0247", notes: "" }
    },
    {
        id: "m05", symbol: "=",
        arabicName: "يساوي", englishName: "Equals",
        category: "رموز علمية", subCategory: "رياضيات",
        keywords: ["result", "is", "equal"],
        keyboardMethod: { layout: "English / Arabic", combination: "= Key", altCode: "Alt + 61", notes: "" }
    },
    {
        id: "m06", symbol: "≠",
        arabicName: "لا يساوي", englishName: "Not Equal",
        category: "رموز علمية", subCategory: "رياضيات",
        keywords: ["diff", "unequal"],
        keyboardMethod: { layout: "", combination: "", altCode: "Alt + 8800", notes: "" }
    },
    {
        id: "m07", symbol: ">",
        arabicName: "أكبر من", englishName: "Greater Than",
        category: "رموز علمية", subCategory: "رياضيات",
        keywords: ["more", "big", "right"],
        keyboardMethod: { layout: "English", combination: "Shift + .", altCode: "Alt + 62", notes: "" }
    },
    {
        id: "m08", symbol: "<",
        arabicName: "أصغر من", englishName: "Less Than",
        category: "رموز علمية", subCategory: "رياضيات",
        keywords: ["little", "small", "left"],
        keyboardMethod: { layout: "English", combination: "Shift + ,", altCode: "Alt + 60", notes: "" }
    },
    {
        id: "m09", symbol: "≥",
        arabicName: "أكبر أو يساوي", englishName: "Greater or Equal",
        category: "رموز علمية", subCategory: "رياضيات",
        keywords: ["more", "at least"],
        keyboardMethod: { layout: "", combination: "", altCode: "Alt + 242", notes: "" }
    },
    {
        id: "m10", symbol: "≤",
        arabicName: "أصغر أو يساوي", englishName: "Less or Equal",
        category: "رموز علمية", subCategory: "رياضيات",
        keywords: ["most", "at most"],
        keyboardMethod: { layout: "", combination: "", altCode: "Alt + 243", notes: "" }
    },
    {
        id: "m11", symbol: "≈",
        arabicName: "تقريباً", englishName: "Approximately",
        category: "رموز علمية", subCategory: "رياضيات",
        keywords: ["around", "almost", "tilde"],
        keyboardMethod: { layout: "", combination: "", altCode: "Alt + 247", notes: "" }
    },
    {
        id: "m12", symbol: "±",
        arabicName: "زائد أو ناقص", englishName: "Plus Minus",
        category: "رموز علمية", subCategory: "رياضيات",
        keywords: ["margin", "error", "tolerance"],
        keyboardMethod: { layout: "", combination: "", altCode: "Alt + 0177", notes: "" }
    },
    {
        id: "m13", symbol: "√",
        arabicName: "جذر تربيعي", englishName: "Square Root",
        category: "رموز علمية", subCategory: "رياضيات",
        keywords: ["radical", "math", "root"],
        keyboardMethod: { layout: "", combination: "", altCode: "Alt + 251", notes: "" }
    },
    {
        id: "m14", symbol: "∞",
        arabicName: "لانهاية", englishName: "Infinity",
        category: "رموز علمية", subCategory: "رياضيات",
        keywords: ["loop", "forever", "unlimited", "ابد"],
        keyboardMethod: { layout: "", combination: "", altCode: "Alt + 236", notes: "" }
    },
    {
        id: "m15", symbol: "π",
        arabicName: "باي", englishName: "Pi",
        category: "رموز علمية", subCategory: "رياضيات",
        keywords: ["circle", "3.14", "constant", "ط"],
        keyboardMethod: { layout: "", combination: "", altCode: "Alt + 227", notes: "" }
    },
    {
        id: "m16", symbol: "∑",
        arabicName: "مجموع (سيجما)", englishName: "Summation",
        category: "رموز علمية", subCategory: "رياضيات",
        keywords: ["sigma", "total", "add", "سيجما"],
        keyboardMethod: { layout: "", combination: "", altCode: "Alt + 228", notes: "" }
    },
    {
        id: "m17", symbol: "∫",
        arabicName: "تكامل", englishName: "Integral",
        category: "رموز علمية", subCategory: "رياضيات",
        keywords: ["calculus", "math", "area"],
        keyboardMethod: { layout: "", combination: "", altCode: "Alt + 8747", notes: "" }
    },
    {
        id: "m18", symbol: "∆",
        arabicName: "دلتا", englishName: "Delta",
        category: "رموز علمية", subCategory: "رياضيات",
        keywords: ["change", "triangle", "diff", "فرق"],
        keyboardMethod: { layout: "", combination: "", altCode: "Alt + 916", notes: "" }
    },
    {
        id: "m19", symbol: "∂",
        arabicName: "تفاضل جزئي", englishName: "Partial Derivative",
        category: "رموز علمية", subCategory: "رياضيات",
        keywords: ["derivative", "delta", "calculus"],
        keyboardMethod: { layout: "", combination: "", altCode: "Alt + 8706", notes: "" }
    },
    {
        id: "m20", symbol: "∝",
        arabicName: "يتناسب مع", englishName: "Proportional To",
        category: "رموز علمية", subCategory: "رياضيات",
        keywords: ["alpha", "relation", "varies"],
        keyboardMethod: { layout: "", combination: "", altCode: "Alt + 8733", notes: "" }
    },
    {
        id: "m21", symbol: "°",
        arabicName: "درجة", englishName: "Degree",
        category: "رموز علمية", subCategory: "رياضيات",
        keywords: ["angle", "temp", "celsius", "زاوية"],
        keyboardMethod: { layout: "", combination: "", altCode: "Alt + 0176", notes: "" }
    },
    {
        id: "m22", symbol: "‰",
        arabicName: "بالألف", englishName: "Per Mille",
        category: "رموز علمية", subCategory: "رياضيات",
        keywords: ["percent", "ratio", "thousand"],
        keyboardMethod: { layout: "", combination: "", altCode: "Alt + 0137", notes: "" }
    },
    {
        id: "m23", symbol: "∠",
        arabicName: "زاوية", englishName: "Angle",
        category: "رموز علمية", subCategory: "رياضيات",
        keywords: ["geometry", "shape", "corner"],
        keyboardMethod: { layout: "", combination: "", altCode: "Alt + 8736", notes: "" }
    },

    // ════════════════════════════════════════════
    // رياضيات متقدمة — نظرية المجموعات والمنطق
    // ════════════════════════════════════════════
    {
        id: "m24", symbol: "∀",
        arabicName: "لكل (كمّي عام)", englishName: "For All",
        category: "رموز علمية", subCategory: "رياضيات متقدمة",
        keywords: ["for all", "universal", "quantifier", "منطق"],
        keyboardMethod: { layout: "", combination: "", altCode: "Alt + 8704", notes: "" }
    },
    {
        id: "m25", symbol: "∃",
        arabicName: "يوجد (كمّي وجودي)", englishName: "There Exists",
        category: "رموز علمية", subCategory: "رياضيات متقدمة",
        keywords: ["exists", "existential", "quantifier"],
        keyboardMethod: { layout: "", combination: "", altCode: "Alt + 8707", notes: "" }
    },
    {
        id: "m26", symbol: "∄",
        arabicName: "لا يوجد", englishName: "There Does Not Exist",
        category: "رموز علمية", subCategory: "رياضيات متقدمة",
        keywords: ["not exists", "none", "negation"],
        keyboardMethod: { layout: "", combination: "", altCode: "Alt + 8708", notes: "" }
    },
    {
        id: "m27", symbol: "∈",
        arabicName: "ينتمي إلى", englishName: "Element Of",
        category: "رموز علمية", subCategory: "رياضيات متقدمة",
        keywords: ["belongs", "member", "set", "مجموعة"],
        keyboardMethod: { layout: "", combination: "", altCode: "Alt + 8712", notes: "" }
    },
    {
        id: "m28", symbol: "∉",
        arabicName: "لا ينتمي إلى", englishName: "Not an Element Of",
        category: "رموز علمية", subCategory: "رياضيات متقدمة",
        keywords: ["not member", "not belong", "set"],
        keyboardMethod: { layout: "", combination: "", altCode: "Alt + 8713", notes: "" }
    },
    {
        id: "m29", symbol: "⊂",
        arabicName: "جزء من (مجموعة فرعية)", englishName: "Subset Of",
        category: "رموز علمية", subCategory: "رياضيات متقدمة",
        keywords: ["subset", "contained", "set"],
        keyboardMethod: { layout: "", combination: "", altCode: "Alt + 8834", notes: "" }
    },
    {
        id: "m30", symbol: "⊃",
        arabicName: "يحتوي على (مجموعة عليا)", englishName: "Superset Of",
        category: "رموز علمية", subCategory: "رياضيات متقدمة",
        keywords: ["superset", "contains", "set"],
        keyboardMethod: { layout: "", combination: "", altCode: "Alt + 8835", notes: "" }
    },
    {
        id: "m31", symbol: "⊆",
        arabicName: "جزء من أو يساوي", englishName: "Subset of or Equal To",
        category: "رموز علمية", subCategory: "رياضيات متقدمة",
        keywords: ["subset equal", "set"],
        keyboardMethod: { layout: "", combination: "", altCode: "Alt + 8838", notes: "" }
    },
    {
        id: "m32", symbol: "∪",
        arabicName: "اتحاد مجموعتين", englishName: "Union",
        category: "رموز علمية", subCategory: "رياضيات متقدمة",
        keywords: ["union", "join", "set", "اتحاد"],
        keyboardMethod: { layout: "", combination: "", altCode: "Alt + 8746", notes: "" }
    },
    {
        id: "m33", symbol: "∩",
        arabicName: "تقاطع مجموعتين", englishName: "Intersection",
        category: "رموز علمية", subCategory: "رياضيات متقدمة",
        keywords: ["intersection", "common", "set", "تقاطع"],
        keyboardMethod: { layout: "", combination: "", altCode: "Alt + 8745", notes: "" }
    },
    {
        id: "m34", symbol: "∅",
        arabicName: "مجموعة خالية", englishName: "Empty Set",
        category: "رموز علمية", subCategory: "رياضيات متقدمة",
        keywords: ["empty", "null", "void", "set", "فارغة"],
        keyboardMethod: { layout: "", combination: "", altCode: "Alt + 8709", notes: "" }
    },
    {
        id: "m35", symbol: "⊕",
        arabicName: "أو الحصري (XOR)", englishName: "Exclusive Or / Direct Sum",
        category: "رموز علمية", subCategory: "رياضيات متقدمة",
        keywords: ["xor", "exclusive", "logic", "منطق"],
        keyboardMethod: { layout: "", combination: "", altCode: "Alt + 8853", notes: "" }
    },
    {
        id: "m36", symbol: "∧",
        arabicName: "و (المنطقية)", englishName: "Logical And",
        category: "رموز علمية", subCategory: "رياضيات متقدمة",
        keywords: ["and", "logic", "conjunction"],
        keyboardMethod: { layout: "", combination: "", altCode: "Alt + 8743", notes: "" }
    },
    {
        id: "m37", symbol: "∨",
        arabicName: "أو (المنطقية)", englishName: "Logical Or",
        category: "رموز علمية", subCategory: "رياضيات متقدمة",
        keywords: ["or", "logic", "disjunction"],
        keyboardMethod: { layout: "", combination: "", altCode: "Alt + 8744", notes: "" }
    },
    {
        id: "m38", symbol: "¬",
        arabicName: "نفي (NOT المنطقية)", englishName: "Not Sign",
        category: "رموز علمية", subCategory: "رياضيات متقدمة",
        keywords: ["not", "negation", "logic"],
        keyboardMethod: { layout: "", combination: "", altCode: "Alt + 0172", notes: "" }
    },
    {
        id: "m39", symbol: "⟹",
        arabicName: "يستلزم (إذا...فإن)", englishName: "Implies",
        category: "رموز علمية", subCategory: "رياضيات متقدمة",
        keywords: ["implies", "if then", "logic", "arrow"],
        keyboardMethod: { layout: "", combination: "", altCode: "Alt + 10233", notes: "" }
    },
    {
        id: "m40", symbol: "⟺",
        arabicName: "إذا وفقط إذا", englishName: "If and Only If",
        category: "رموز علمية", subCategory: "رياضيات متقدمة",
        keywords: ["iff", "biconditional", "equivalence"],
        keyboardMethod: { layout: "", combination: "", altCode: "Alt + 10234", notes: "" }
    },
    {
        id: "m41", symbol: "∏",
        arabicName: "ضرب متسلسل (باي الكبيرة)", englishName: "Product",
        category: "رموز علمية", subCategory: "رياضيات متقدمة",
        keywords: ["product", "pi", "series", "جداء"],
        keyboardMethod: { layout: "", combination: "", altCode: "Alt + 8719", notes: "" }
    },
    {
        id: "m42", symbol: "∬",
        arabicName: "تكامل مزدوج", englishName: "Double Integral",
        category: "رموز علمية", subCategory: "رياضيات متقدمة",
        keywords: ["double integral", "calculus", "area"],
        keyboardMethod: { layout: "", combination: "", altCode: "Alt + 8748", notes: "" }
    },
    {
        id: "m43", symbol: "∮",
        arabicName: "تكامل مغلق", englishName: "Contour Integral",
        category: "رموز علمية", subCategory: "رياضيات متقدمة",
        keywords: ["contour", "closed", "integral", "loop"],
        keyboardMethod: { layout: "", combination: "", altCode: "Alt + 8750", notes: "" }
    },
    {
        id: "m44", symbol: "⊥",
        arabicName: "عمودي على", englishName: "Perpendicular",
        category: "رموز علمية", subCategory: "رياضيات متقدمة",
        keywords: ["perpendicular", "normal", "geometry"],
        keyboardMethod: { layout: "", combination: "", altCode: "Alt + 8869", notes: "" }
    },
    {
        id: "m45", symbol: "∥",
        arabicName: "موازٍ لـ", englishName: "Parallel To",
        category: "رموز علمية", subCategory: "رياضيات متقدمة",
        keywords: ["parallel", "geometry", "lines"],
        keyboardMethod: { layout: "", combination: "", altCode: "Alt + 8741", notes: "" }
    },
    {
        id: "m46", symbol: "ℕ",
        arabicName: "الأعداد الطبيعية", englishName: "Natural Numbers",
        category: "رموز علمية", subCategory: "رياضيات متقدمة",
        keywords: ["natural", "numbers", "set"],
        keyboardMethod: { layout: "", combination: "", altCode: "Alt + 8469", notes: "" }
    },
    {
        id: "m47", symbol: "ℤ",
        arabicName: "الأعداد الصحيحة", englishName: "Integers",
        category: "رموز علمية", subCategory: "رياضيات متقدمة",
        keywords: ["integers", "whole", "numbers"],
        keyboardMethod: { layout: "", combination: "", altCode: "Alt + 8484", notes: "" }
    },
    {
        id: "m48", symbol: "ℝ",
        arabicName: "الأعداد الحقيقية", englishName: "Real Numbers",
        category: "رموز علمية", subCategory: "رياضيات متقدمة",
        keywords: ["real", "numbers", "set"],
        keyboardMethod: { layout: "", combination: "", altCode: "Alt + 8477", notes: "" }
    },
    {
        id: "m49", symbol: "ℂ",
        arabicName: "الأعداد المركبة", englishName: "Complex Numbers",
        category: "رموز علمية", subCategory: "رياضيات متقدمة",
        keywords: ["complex", "imaginary", "numbers"],
        keyboardMethod: { layout: "", combination: "", altCode: "Alt + 8450", notes: "" }
    },

    // ════════════════════════════════════════════
    // فيزياء
    // ════════════════════════════════════════════
    {
        id: "p01", symbol: "Ω",
        arabicName: "أوم (مقاومة كهربائية)", englishName: "Ohm",
        category: "رموز علمية", subCategory: "فيزياء",
        keywords: ["ohm", "resistance", "electric", "كهرباء", "مقاومة"],
        keyboardMethod: { layout: "", combination: "", altCode: "Alt + 8486", notes: "" }
    },
    {
        id: "p02", symbol: "µ",
        arabicName: "ميكرو (10⁻⁶)", englishName: "Micro",
        category: "رموز علمية", subCategory: "فيزياء",
        keywords: ["micro", "micrometer", "mu", "prefix"],
        keyboardMethod: { layout: "", combination: "", altCode: "Alt + 0181", notes: "" }
    },
    {
        id: "p03", symbol: "Å",
        arabicName: "أنجستروم (10⁻¹⁰ م)", englishName: "Angstrom",
        category: "رموز علمية", subCategory: "فيزياء",
        keywords: ["angstrom", "wavelength", "atomic", "طول موجي"],
        keyboardMethod: { layout: "", combination: "", altCode: "Alt + 8491", notes: "" }
    },
    {
        id: "p04", symbol: "ℏ",
        arabicName: "ثابت بلانك المخفض (h-bar)", englishName: "Reduced Planck Constant",
        category: "رموز علمية", subCategory: "فيزياء",
        keywords: ["planck", "quantum", "hbar", "كم"],
        keyboardMethod: { layout: "", combination: "", altCode: "Alt + 8463", notes: "" }
    },
    {
        id: "p05", symbol: "∇",
        arabicName: "نابلا (del)", englishName: "Nabla / Del",
        category: "رموز علمية", subCategory: "فيزياء",
        keywords: ["nabla", "del", "gradient", "divergence", "curl"],
        keyboardMethod: { layout: "", combination: "", altCode: "Alt + 8711", notes: "" }
    },
    {
        id: "p06", symbol: "α",
        arabicName: "ألفا", englishName: "Alpha",
        category: "رموز علمية", subCategory: "فيزياء",
        keywords: ["alpha", "greek", "radiation", "إشعاع"],
        keyboardMethod: { layout: "", combination: "", altCode: "Alt + 945", notes: "" }
    },
    {
        id: "p07", symbol: "β",
        arabicName: "بيتا", englishName: "Beta",
        category: "رموز علمية", subCategory: "فيزياء",
        keywords: ["beta", "greek", "radiation", "إشعاع"],
        keyboardMethod: { layout: "", combination: "", altCode: "Alt + 946", notes: "" }
    },
    {
        id: "p08", symbol: "γ",
        arabicName: "جاما", englishName: "Gamma",
        category: "رموز علمية", subCategory: "فيزياء",
        keywords: ["gamma", "greek", "radiation", "إشعاع"],
        keyboardMethod: { layout: "", combination: "", altCode: "Alt + 947", notes: "" }
    },
    {
        id: "p09", symbol: "λ",
        arabicName: "لامدا (طول الموجة)", englishName: "Lambda / Wavelength",
        category: "رموز علمية", subCategory: "فيزياء",
        keywords: ["lambda", "wavelength", "wave", "طول موجي"],
        keyboardMethod: { layout: "", combination: "", altCode: "Alt + 955", notes: "" }
    },
    {
        id: "p10", symbol: "ν",
        arabicName: "نيو (تردد)", englishName: "Nu / Frequency",
        category: "رموز علمية", subCategory: "فيزياء",
        keywords: ["nu", "frequency", "wave", "تردد"],
        keyboardMethod: { layout: "", combination: "", altCode: "Alt + 957", notes: "" }
    },
    {
        id: "p11", symbol: "σ",
        arabicName: "سيجما (انحراف معياري / ضغط)", englishName: "Sigma",
        category: "رموز علمية", subCategory: "فيزياء",
        keywords: ["sigma", "stress", "standard deviation", "إجهاد"],
        keyboardMethod: { layout: "", combination: "", altCode: "Alt + 963", notes: "" }
    },
    {
        id: "p12", symbol: "τ",
        arabicName: "تاو (زمن / عزم)", englishName: "Tau",
        category: "رموز علمية", subCategory: "فيزياء",
        keywords: ["tau", "torque", "time constant", "عزم"],
        keyboardMethod: { layout: "", combination: "", altCode: "Alt + 964", notes: "" }
    },
    {
        id: "p13", symbol: "φ",
        arabicName: "في (زاوية / تدفق)", englishName: "Phi / Flux",
        category: "رموز علمية", subCategory: "فيزياء",
        keywords: ["phi", "flux", "angle", "تدفق"],
        keyboardMethod: { layout: "", combination: "", altCode: "Alt + 966", notes: "" }
    },
    {
        id: "p14", symbol: "ρ",
        arabicName: "رو (كثافة / مقاومية)", englishName: "Rho / Density",
        category: "رموز علمية", subCategory: "فيزياء",
        keywords: ["rho", "density", "resistivity", "كثافة"],
        keyboardMethod: { layout: "", combination: "", altCode: "Alt + 961", notes: "" }
    },
    {
        id: "p15", symbol: "ε",
        arabicName: "إبسيلون (سماحية / طاقة)", englishName: "Epsilon / Permittivity",
        category: "رموز علمية", subCategory: "فيزياء",
        keywords: ["epsilon", "permittivity", "energy", "سماحية"],
        keyboardMethod: { layout: "", combination: "", altCode: "Alt + 949", notes: "" }
    },
    {
        id: "p16", symbol: "η",
        arabicName: "إيتا (لزوجة / كفاءة)", englishName: "Eta / Efficiency",
        category: "رموز علمية", subCategory: "فيزياء",
        keywords: ["eta", "efficiency", "viscosity", "كفاءة"],
        keyboardMethod: { layout: "", combination: "", altCode: "Alt + 951", notes: "" }
    },
    {
        id: "p17", symbol: "θ",
        arabicName: "ثيتا (زاوية)", englishName: "Theta / Angle",
        category: "رموز علمية", subCategory: "فيزياء",
        keywords: ["theta", "angle", "rotation", "زاوية"],
        keyboardMethod: { layout: "", combination: "", altCode: "Alt + 952", notes: "" }
    },
    {
        id: "p18", symbol: "ω",
        arabicName: "أوميجا (سرعة زاوية)", englishName: "Omega / Angular Velocity",
        category: "رموز علمية", subCategory: "فيزياء",
        keywords: ["omega", "angular velocity", "frequency", "سرعة"],
        keyboardMethod: { layout: "", combination: "", altCode: "Alt + 969", notes: "" }
    },
    {
        id: "p19", symbol: "ℓ",
        arabicName: "طول (رمز فيزيائي)", englishName: "Script Small L",
        category: "رموز علمية", subCategory: "فيزياء",
        keywords: ["length", "script", "physics", "طول"],
        keyboardMethod: { layout: "", combination: "", altCode: "Alt + 8467", notes: "" }
    },
    {
        id: "p20", symbol: "⚡",
        arabicName: "كهرباء / برق", englishName: "Lightning / Electric",
        category: "رموز علمية", subCategory: "فيزياء",
        keywords: ["electric", "lightning", "energy", "كهرباء"],
        keyboardMethod: { layout: "", combination: "", altCode: "", notes: "" }
    },

    // ════════════════════════════════════════════
    // كيمياء
    // ════════════════════════════════════════════
    {
        id: "c01", symbol: "⇌",
        arabicName: "تفاعل كيميائي متوازن", englishName: "Equilibrium Arrow",
        category: "رموز علمية", subCategory: "كيمياء",
        keywords: ["equilibrium", "reaction", "chemistry", "تفاعل", "توازن"],
        keyboardMethod: { layout: "", combination: "", altCode: "Alt + 8652", notes: "" }
    },
    {
        id: "c02", symbol: "→",
        arabicName: "تفاعل كيميائي باتجاه واحد", englishName: "Reaction Arrow",
        category: "رموز علمية", subCategory: "كيمياء",
        keywords: ["reaction", "arrow", "chemistry", "تفاعل"],
        keyboardMethod: { layout: "", combination: "", altCode: "Alt + 8594", notes: "" }
    },
    {
        id: "c03", symbol: "≡",
        arabicName: "رابطة ثلاثية", englishName: "Triple Bond",
        category: "رموز علمية", subCategory: "كيمياء",
        keywords: ["triple bond", "chemistry", "covalent", "رابطة"],
        keyboardMethod: { layout: "", combination: "", altCode: "Alt + 8801", notes: "" }
    },
    {
        id: "c04", symbol: "°C",
        arabicName: "درجة مئوية (سيلزيوس)", englishName: "Celsius",
        category: "رموز علمية", subCategory: "كيمياء",
        keywords: ["celsius", "temperature", "degree", "حرارة", "مئوية"],
        keyboardMethod: { layout: "", combination: "", altCode: "Alt + 0176 + C", notes: "" }
    },
    {
        id: "c05", symbol: "°F",
        arabicName: "درجة فهرنهايت", englishName: "Fahrenheit",
        category: "رموز علمية", subCategory: "كيمياء",
        keywords: ["fahrenheit", "temperature", "degree", "حرارة"],
        keyboardMethod: { layout: "", combination: "", altCode: "Alt + 0176 + F", notes: "" }
    },
    {
        id: "c06", symbol: "⁺",
        arabicName: "شحنة موجبة (أيون)", englishName: "Positive Ion / Cation",
        category: "رموز علمية", subCategory: "كيمياء",
        keywords: ["positive", "cation", "ion", "charge", "شحنة"],
        keyboardMethod: { layout: "", combination: "", altCode: "Alt + 8314", notes: "" }
    },
    {
        id: "c07", symbol: "⁻",
        arabicName: "شحنة سالبة (أيون)", englishName: "Negative Ion / Anion",
        category: "رموز علمية", subCategory: "كيمياء",
        keywords: ["negative", "anion", "ion", "charge", "شحنة"],
        keyboardMethod: { layout: "", combination: "", altCode: "Alt + 8315", notes: "" }
    },
    {
        id: "c08", symbol: "Δ",
        arabicName: "حرارة (في التفاعلات)", englishName: "Heat in Reaction",
        category: "رموز علمية", subCategory: "كيمياء",
        keywords: ["heat", "delta", "reaction", "chemistry", "حرارة"],
        keyboardMethod: { layout: "", combination: "", altCode: "Alt + 916", notes: "" }
    },
    {
        id: "c09", symbol: "↑",
        arabicName: "غاز ناتج عن التفاعل", englishName: "Gas Product (Evolved)",
        category: "رموز علمية", subCategory: "كيمياء",
        keywords: ["gas", "evolved", "product", "chemistry", "غاز"],
        keyboardMethod: { layout: "", combination: "", altCode: "Alt + 8593", notes: "" }
    },
    {
        id: "c10", symbol: "↓",
        arabicName: "راسب (ترسيب)", englishName: "Precipitate",
        category: "رموز علمية", subCategory: "كيمياء",
        keywords: ["precipitate", "solid", "product", "chemistry", "راسب"],
        keyboardMethod: { layout: "", combination: "", altCode: "Alt + 8595", notes: "" }
    },
    {
        id: "c11", symbol: "·",
        arabicName: "رابطة تساهمية / نقطة مركزية", englishName: "Middle Dot / Bond",
        category: "رموز علمية", subCategory: "كيمياء",
        keywords: ["dot", "bond", "radical", "chemistry", "رابطة"],
        keyboardMethod: { layout: "", combination: "", altCode: "Alt + 0183", notes: "" }
    },
    {
        id: "c12", symbol: "∞",
        arabicName: "بوليمر (سلسلة لانهائية)", englishName: "Polymer Chain",
        category: "رموز علمية", subCategory: "كيمياء",
        keywords: ["polymer", "chain", "infinity", "بوليمر"],
        keyboardMethod: { layout: "", combination: "", altCode: "Alt + 236", notes: "" }
    },
    {
        id: "c13", symbol: "⊕",
        arabicName: "كربون رباعي التكافؤ (مركبات عضوية)", englishName: "Positive Charge Center",
        category: "رموز علمية", subCategory: "كيمياء",
        keywords: ["positive center", "organic", "chemistry", "عضوي"],
        keyboardMethod: { layout: "", combination: "", altCode: "Alt + 8853", notes: "" }
    },
    {
        id: "c14", symbol: "⊖",
        arabicName: "مركز شحنة سالبة (كيمياء عضوية)", englishName: "Negative Charge Center",
        category: "رموز علمية", subCategory: "كيمياء",
        keywords: ["negative center", "organic", "chemistry", "سالب"],
        keyboardMethod: { layout: "", combination: "", altCode: "Alt + 8854", notes: "" }
    },
    {
        id: "c15", symbol: "㏃",
        arabicName: "بيكريل (نشاط إشعاعي)", englishName: "Becquerel",
        category: "رموز علمية", subCategory: "كيمياء",
        keywords: ["becquerel", "radioactivity", "nuclear", "إشعاع"],
        keyboardMethod: { layout: "", combination: "", altCode: "", notes: "" }
    }
];
