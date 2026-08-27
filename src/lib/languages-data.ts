export interface LanguageInfo {
  code: string;
  name: string;
  nativeName: string;
  isRTL: boolean;
}

export const SUGGESTED_LANGUAGE_CODES = [
  "en",
  "hi",
  "ar",
  "es",
  "fr",
  "de",
  "ja",
  "zh-CN",
  "ru",
  "pt",
  "it",
  "ko",
];

export const RTL_LANGUAGE_CODES = new Set([
  "ar",
  "arc",
  "ckb",
  "dv",
  "fa",
  "he",
  "iw",
  "ks",
  "ku",
  "mzn",
  "pa-Arab",
  "pnb",
  "ps",
  "sd",
  "ug",
  "ur",
  "yi",
]);

export const ALL_LANGUAGES: LanguageInfo[] = [
  { code: "en", name: "English", nativeName: "English", isRTL: false },
  { code: "ab", name: "Abkhaz", nativeName: "Аҧсшәа", isRTL: false },
  { code: "ace", name: "Acehnese", nativeName: "Basa Acèh", isRTL: false },
  { code: "ach", name: "Acholi", nativeName: "Pa-Acoli", isRTL: false },
  { code: "af", name: "Afrikaans", nativeName: "Afrikaans", isRTL: false },
  { code: "sq", name: "Albanian", nativeName: "Shqip", isRTL: false },
  { code: "alz", name: "Alur", nativeName: "Dho-Alur", isRTL: false },
  { code: "am", name: "Amharic", nativeName: "አማርኛ", isRTL: false },
  { code: "ar", name: "Arabic", nativeName: "العربية", isRTL: true },
  { code: "hy", name: "Armenian", nativeName: "Հայերեն", isRTL: false },
  { code: "as", name: "Assamese", nativeName: "অসমীয়া", isRTL: false },
  { code: "awa", name: "Awadhi", nativeName: "अवधी", isRTL: false },
  { code: "ay", name: "Aymara", nativeName: "Aymar aru", isRTL: false },
  { code: "az", name: "Azerbaijani", nativeName: "Azərbaycan", isRTL: false },
  { code: "ban", name: "Balinese", nativeName: "Basa Bali", isRTL: false },
  { code: "bm", name: "Bambara", nativeName: "Bamanankan", isRTL: false },
  { code: "ba", name: "Bashkir", nativeName: "Башҡортса", isRTL: false },
  { code: "eu", name: "Basque", nativeName: "Euskara", isRTL: false },
  { code: "btx", name: "Batak Karo", nativeName: "Batak Karo", isRTL: false },
  { code: "bts", name: "Batak Simalungun", nativeName: "Batak Simalungun", isRTL: false },
  { code: "bbc", name: "Batak Toba", nativeName: "Batak Toba", isRTL: false },
  { code: "be", name: "Belarusian", nativeName: "Беларуская", isRTL: false },
  { code: "bem", name: "Bemba", nativeName: "Ichibemba", isRTL: false },
  { code: "bn", name: "Bengali", nativeName: "বাংলা", isRTL: false },
  { code: "bew", name: "Betawi", nativeName: "Baso Betawi", isRTL: false },
  { code: "bho", name: "Bhojpuri", nativeName: "भोजपुरी", isRTL: false },
  { code: "bik", name: "Bikol", nativeName: "Bikol", isRTL: false },
  { code: "bs", name: "Bosnian", nativeName: "Bosanski", isRTL: false },
  { code: "br", name: "Breton", nativeName: "Brezhoneg", isRTL: false },
  { code: "bg", name: "Bulgarian", nativeName: "Български", isRTL: false },
  { code: "bua", name: "Buryat", nativeName: "Буряад", isRTL: false },
  { code: "ca", name: "Catalan", nativeName: "Català", isRTL: false },
  { code: "ceb", name: "Cebuano", nativeName: "Sinugboanon", isRTL: false },
  { code: "ch", name: "Chamorro", nativeName: "Chamoru", isRTL: false },
  { code: "ce", name: "Chechen", nativeName: "Нохчийн", isRTL: false },
  { code: "ny", name: "Chichewa", nativeName: "ChiCheŵa", isRTL: false },
  { code: "zh-CN", name: "Chinese (Simplified)", nativeName: "简体中文", isRTL: false },
  { code: "zh-TW", name: "Chinese (Traditional)", nativeName: "繁體中文", isRTL: false },
  { code: "chk", name: "Chuukese", nativeName: "Foos Chuuk", isRTL: false },
  { code: "cv", name: "Chuvash", nativeName: "Чӑвашла", isRTL: false },
  { code: "co", name: "Corsican", nativeName: "Corsu", isRTL: false },
  { code: "crh", name: "Crimean Tatar", nativeName: "Qırımtatarca", isRTL: false },
  { code: "hr", name: "Croatian", nativeName: "Hrvatski", isRTL: false },
  { code: "cs", name: "Czech", nativeName: "Čeština", isRTL: false },
  { code: "da", name: "Danish", nativeName: "Dansk", isRTL: false },
  { code: "fa-AF", name: "Dari", nativeName: "دری", isRTL: true },
  { code: "dv", name: "Dhivehi", nativeName: "ދިވެހި", isRTL: true },
  { code: "din", name: "Dinka", nativeName: "Thuɔŋjäŋ", isRTL: false },
  { code: "doi", name: "Dogri", nativeName: "डोगरी", isRTL: false },
  { code: "nl", name: "Dutch", nativeName: "Nederlands", isRTL: false },
  { code: "dyu", name: "Dyula", nativeName: "Julakan", isRTL: false },
  { code: "dz", name: "Dzongkha", nativeName: "རྫོང་ཁ", isRTL: false },
  { code: "eo", name: "Esperanto", nativeName: "Esperanto", isRTL: false },
  { code: "et", name: "Estonian", nativeName: "Eesti", isRTL: false },
  { code: "ee", name: "Ewe", nativeName: "Eʋegbe", isRTL: false },
  { code: "fo", name: "Faroese", nativeName: "Føroyskt", isRTL: false },
  { code: "fj", name: "Fijian", nativeName: "Na Vosa Vakaviti", isRTL: false },
  { code: "fil", name: "Filipino", nativeName: "Filipino", isRTL: false },
  { code: "fi", name: "Finnish", nativeName: "Suomi", isRTL: false },
  { code: "fon", name: "Fon", nativeName: "Fon gbè", isRTL: false },
  { code: "fr", name: "French", nativeName: "Français", isRTL: false },
  { code: "fr-CA", name: "French (Canada)", nativeName: "Français (Canada)", isRTL: false },
  { code: "fy", name: "Frisian", nativeName: "Frysk", isRTL: false },
  { code: "fur", name: "Friulian", nativeName: "Furlan", isRTL: false },
  { code: "ff", name: "Fulani", nativeName: "Fulfulde", isRTL: false },
  { code: "gaa", name: "Ga", nativeName: "Ga", isRTL: false },
  { code: "gl", name: "Galician", nativeName: "Galego", isRTL: false },
  { code: "ka", name: "Georgian", nativeName: "ქართული", isRTL: false },
  { code: "de", name: "German", nativeName: "Deutsch", isRTL: false },
  { code: "el", name: "Greek", nativeName: "Ελληνικά", isRTL: false },
  { code: "gn", name: "Guarani", nativeName: "Avañe'ẽ", isRTL: false },
  { code: "gu", name: "Gujarati", nativeName: "ગુજરાતી", isRTL: false },
  { code: "ht", name: "Haitian Creole", nativeName: "Kreyòl Ayisyen", isRTL: false },
  { code: "cnh", name: "Hakha Chin", nativeName: "Lai holh", isRTL: false },
  { code: "ha", name: "Hausa", nativeName: "Harshen Hausa", isRTL: false },
  { code: "haw", name: "Hawaiian", nativeName: "ʻŌlelo Hawaiʻi", isRTL: false },
  { code: "iw", name: "Hebrew", nativeName: "עברית", isRTL: true },
  { code: "hil", name: "Hiligaynon", nativeName: "Ilonggo", isRTL: false },
  { code: "hi", name: "Hindi", nativeName: "हिन्दी", isRTL: false },
  { code: "hmn", name: "Hmong", nativeName: "Hmoob", isRTL: false },
  { code: "hu", name: "Hungarian", nativeName: "Magyar", isRTL: false },
  { code: "hrx", name: "Hunsrik", nativeName: "Hunsrik", isRTL: false },
  { code: "iba", name: "Iban", nativeName: "Jaku Iban", isRTL: false },
  { code: "is", name: "Icelandic", nativeName: "Íslenska", isRTL: false },
  { code: "ig", name: "Igbo", nativeName: "Asụsụ Igbo", isRTL: false },
  { code: "ilo", name: "Ilocano", nativeName: "Ilokano", isRTL: false },
  { code: "id", name: "Indonesian", nativeName: "Bahasa Indonesia", isRTL: false },
  { code: "iu", name: "Inuktut (Latin)", nativeName: "Inuktitut", isRTL: false },
  { code: "iu-Cans", name: "Inuktut (Syllabics)", nativeName: "ᐃᓄᒃᑎᑐᑦ", isRTL: false },
  { code: "ga", name: "Irish Gaelic", nativeName: "Gaeilge", isRTL: false },
  { code: "it", name: "Italian", nativeName: "Italiano", isRTL: false },
  { code: "jam", name: "Jamaican Patois", nativeName: "Patwa", isRTL: false },
  { code: "ja", name: "Japanese", nativeName: "日本語", isRTL: false },
  { code: "jv", name: "Javanese", nativeName: "Basa Jawa", isRTL: false },
  { code: "kac", name: "Jingpo", nativeName: "Jinghpaw", isRTL: false },
  { code: "kl", name: "Kalaallisut", nativeName: "Kalaallisut", isRTL: false },
  { code: "kn", name: "Kannada", nativeName: "ಕನ್ನಡ", isRTL: false },
  { code: "kr", name: "Kanuri", nativeName: "Kànurí", isRTL: false },
  { code: "pam", name: "Kapampangan", nativeName: "Kapampangan", isRTL: false },
  { code: "kk", name: "Kazakh", nativeName: "Қазақ тілі", isRTL: false },
  { code: "kha", name: "Khasi", nativeName: "Ktien Khasi", isRTL: false },
  { code: "km", name: "Khmer", nativeName: "ខ្មែរ", isRTL: false },
  { code: "cgg", name: "Kiga", nativeName: "Rukiga", isRTL: false },
  { code: "kg", name: "Kikongo", nativeName: "Kikongo", isRTL: false },
  { code: "rw", name: "Kinyarwanda", nativeName: "Ikinyarwanda", isRTL: false },
  { code: "ktu", name: "Kituba", nativeName: "Kikongo ya Leta", isRTL: false },
  { code: "trp", name: "Kokborok", nativeName: "Kokborok", isRTL: false },
  { code: "kv", name: "Komi", nativeName: "Коми кыв", isRTL: false },
  { code: "gom", name: "Konkani", nativeName: "कोंकणी", isRTL: false },
  { code: "ko", name: "Korean", nativeName: "한국어", isRTL: false },
  { code: "kri", name: "Krio", nativeName: "Krio", isRTL: false },
  { code: "ku", name: "Kurdish (Kurmanji)", nativeName: "Kurdî (Kurmancî)", isRTL: true },
  { code: "ckb", name: "Kurdish (Sorani)", nativeName: "کوردی (سۆرانی)", isRTL: true },
  { code: "ky", name: "Kyrgyz", nativeName: "Кыргызча", isRTL: false },
  { code: "lo", name: "Lao", nativeName: "ລາວ", isRTL: false },
  { code: "ltg", name: "Latgalian", nativeName: "Latgaļu", isRTL: false },
  { code: "la", name: "Latin", nativeName: "Latina", isRTL: false },
  { code: "lv", name: "Latvian", nativeName: "Latviešu", isRTL: false },
  { code: "lij", name: "Ligurian", nativeName: "Lìgure", isRTL: false },
  { code: "li", name: "Limburgish", nativeName: "Limburgs", isRTL: false },
  { code: "ln", name: "Lingala", nativeName: "Lingála", isRTL: false },
  { code: "lt", name: "Lithuanian", nativeName: "Lietuvių", isRTL: false },
  { code: "lmo", name: "Lombard", nativeName: "Lombard", isRTL: false },
  { code: "lg", name: "Luganda", nativeName: "Oluganda", isRTL: false },
  { code: "luo", name: "Luo", nativeName: "Dholuo", isRTL: false },
  { code: "lb", name: "Luxembourgish", nativeName: "Lëtzebuergesch", isRTL: false },
  { code: "mk", name: "Macedonian", nativeName: "Македонски", isRTL: false },
  { code: "mad", name: "Madurese", nativeName: "Basa Madura", isRTL: false },
  { code: "mai", name: "Maithili", nativeName: "मैथिली", isRTL: false },
  { code: "mak", name: "Makassar", nativeName: "Basa Mangkasara'", isRTL: false },
  { code: "mg", name: "Malagasy", nativeName: "Fiteny Malagasy", isRTL: false },
  { code: "ms", name: "Malay", nativeName: "Bahasa Melayu", isRTL: false },
  { code: "ml", name: "Malayalam", nativeName: "മലയാളം", isRTL: false },
  { code: "mt", name: "Maltese", nativeName: "Malti", isRTL: false },
  { code: "gv", name: "Manx", nativeName: "Gaelg", isRTL: false },
  { code: "mi", name: "Maori", nativeName: "Te Reo Māori", isRTL: false },
  { code: "mr", name: "Marathi", nativeName: "मराठी", isRTL: false },
  { code: "mh", name: "Marshallese", nativeName: "Kajin M̧ajeļ", isRTL: false },
  { code: "mwr", name: "Marwadi", nativeName: "मारवाड़ी", isRTL: false },
  { code: "mfe", name: "Mauritian Creole", nativeName: "Morisien", isRTL: false },
  { code: "mni-Mtei", name: "Meiteilon (Manipuri)", nativeName: "মৈতৈলোন্", isRTL: false },
  { code: "min", name: "Minangkabau", nativeName: "Baso Minang", isRTL: false },
  { code: "lus", name: "Mizo", nativeName: "Mizo ṭawng", isRTL: false },
  { code: "mn", name: "Mongolian", nativeName: "Монгол хэл", isRTL: false },
  { code: "my", name: "Myanmar (Burmese)", nativeName: "မြန်မာစာ", isRTL: false },
  { code: "nhe", name: "Nahuatl", nativeName: "Nāhuatl", isRTL: false },
  { code: "ndc-ZW", name: "Ndau", nativeName: "Ndau", isRTL: false },
  { code: "nr", name: "Ndebele (South)", nativeName: "isiNdebele", isRTL: false },
  { code: "new", name: "Nepalbhasa (Newari)", nativeName: "नेपाल भाषा", isRTL: false },
  { code: "ne", name: "Nepali", nativeName: "नेपाली", isRTL: false },
  { code: "nso", name: "Northern Sotho", nativeName: "Sesotho sa Leboa", isRTL: false },
  { code: "no", name: "Norwegian", nativeName: "Norsk", isRTL: false },
  { code: "nus", name: "Nuer", nativeName: "Thok Nath", isRTL: false },
  { code: "oc", name: "Occitan", nativeName: "Occitan", isRTL: false },
  { code: "or", name: "Odia (Oriya)", nativeName: "ଓଡ଼ିଆ", isRTL: false },
  { code: "om", name: "Oromo", nativeName: "Afaan Oromoo", isRTL: false },
  { code: "os", name: "Ossetian", nativeName: "Ирон æвзаг", isRTL: false },
  { code: "pag", name: "Pangasinan", nativeName: "Salitan Pangasinan", isRTL: false },
  { code: "pap", name: "Papiamento", nativeName: "Papiamentu", isRTL: false },
  { code: "ps", name: "Pashto", nativeName: "پښتو", isRTL: true },
  { code: "fa", name: "Persian", nativeName: "فارسی", isRTL: true },
  { code: "pl", name: "Polish", nativeName: "Polski", isRTL: false },
  { code: "pt", name: "Portuguese", nativeName: "Português", isRTL: false },
  { code: "pt-PT", name: "Portuguese (Portugal)", nativeName: "Português (Portugal)", isRTL: false },
  { code: "pa", name: "Punjabi", nativeName: "ਪੰਜਾਬੀ", isRTL: false },
  { code: "pa-Arab", name: "Punjabi (Shahmukhi)", nativeName: "پنجابی", isRTL: true },
  { code: "qu", name: "Quechua", nativeName: "Runasimi", isRTL: false },
  { code: "rom", name: "Romani", nativeName: "Romani čhib", isRTL: false },
  { code: "ro", name: "Romanian", nativeName: "Română", isRTL: false },
  { code: "rn", name: "Rundi", nativeName: "Ikirundi", isRTL: false },
  { code: "ru", name: "Russian", nativeName: "Русский", isRTL: false },
  { code: "sm", name: "Samoan", nativeName: "Gagana Samoa", isRTL: false },
  { code: "sg", name: "Sango", nativeName: "Sängö", isRTL: false },
  { code: "sa", name: "Sanskrit", nativeName: "संस्कृतम्", isRTL: false },
  { code: "sat", name: "Santali", nativeName: "ᱥᱟᱱᱛᱟᱲᱤ", isRTL: false },
  { code: "gd", name: "Scots Gaelic", nativeName: "Gàidhlig", isRTL: false },
  { code: "sr", name: "Serbian", nativeName: "Српски", isRTL: false },
  { code: "st", name: "Sesotho", nativeName: "Sesotho", isRTL: false },
  { code: "crs", name: "Seychellois Creole", nativeName: "Kreol Seselwa", isRTL: false },
  { code: "shn", name: "Shan", nativeName: "လိၵ်ႈတႆး", isRTL: false },
  { code: "sn", name: "Shona", nativeName: "chiShona", isRTL: false },
  { code: "scn", name: "Sicilian", nativeName: "Sicilianu", isRTL: false },
  { code: "szl", name: "Silesian", nativeName: "Ślōnski", isRTL: false },
  { code: "sd", name: "Sindhi", nativeName: "سنڌي", isRTL: true },
  { code: "si", name: "Sinhala", nativeName: "සිංහල", isRTL: false },
  { code: "sk", name: "Slovak", nativeName: "Slovenčina", isRTL: false },
  { code: "sl", name: "Slovenian", nativeName: "Slovenščina", isRTL: false },
  { code: "so", name: "Somali", nativeName: "Soomaali", isRTL: false },
  { code: "es", name: "Spanish", nativeName: "Español", isRTL: false },
  { code: "su", name: "Sundanese", nativeName: "Basa Sunda", isRTL: false },
  { code: "sw", name: "Swahili", nativeName: "Kiswahili", isRTL: false },
  { code: "ss", name: "Swati", nativeName: "SiSwati", isRTL: false },
  { code: "sv", name: "Swedish", nativeName: "Svenska", isRTL: false },
  { code: "tg", name: "Tajik", nativeName: "Тоҷикӣ", isRTL: false },
  { code: "ta", name: "Tamil", nativeName: "தமிழ்", isRTL: false },
  { code: "tt", name: "Tatar", nativeName: "Татар теле", isRTL: false },
  { code: "te", name: "Telugu", nativeName: "తెలుగు", isRTL: false },
  { code: "th", name: "Thai", nativeName: "ไทย", isRTL: false },
  { code: "bo", name: "Tibetan", nativeName: "བོད་སྐད", isRTL: false },
  { code: "ti", name: "Tigrinya", nativeName: "ትግርኛ", isRTL: false },
  { code: "tiv", name: "Tiv", nativeName: "Tiv", isRTL: false },
  { code: "tok", name: "Tok Pisin", nativeName: "Tok Pisin", isRTL: false },
  { code: "to", name: "Tongan", nativeName: "Lea Fakatonga", isRTL: false },
  { code: "ts", name: "Tsonga", nativeName: "Xitsonga", isRTL: false },
  { code: "tn", name: "Tswana", nativeName: "Setswana", isRTL: false },
  { code: "tr", name: "Turkish", nativeName: "Türkçe", isRTL: false },
  { code: "tk", name: "Turkmen", nativeName: "Türkmen dili", isRTL: false },
  { code: "tyv", name: "Tuvan", nativeName: "Тыва дыл", isRTL: false },
  { code: "ak", name: "Twi", nativeName: "Twi", isRTL: false },
  { code: "udm", name: "Udmurt", nativeName: "Удмурт кыл", isRTL: false },
  { code: "uk", name: "Ukrainian", nativeName: "Українська", isRTL: false },
  { code: "ur", name: "Urdu", nativeName: "اردو", isRTL: true },
  { code: "ug", name: "Uyghur", nativeName: "ئۇيغۇرچە", isRTL: true },
  { code: "uz", name: "Uzbek", nativeName: "Oʻzbekcha", isRTL: false },
  { code: "vi", name: "Vietnamese", nativeName: "Tiếng Việt", isRTL: false },
  { code: "war", name: "Waray", nativeName: "Winaray", isRTL: false },
  { code: "cy", name: "Welsh", nativeName: "Cymraeg", isRTL: false },
  { code: "wo", name: "Wolof", nativeName: "Wollof", isRTL: false },
  { code: "xh", name: "Xhosa", nativeName: "isiXhosa", isRTL: false },
  { code: "yi", name: "Yiddish", nativeName: "ייִדיש", isRTL: true },
  { code: "yo", name: "Yoruba", nativeName: "Èdè Yorùbá", isRTL: false },
  { code: "yua", name: "Yucatec Maya", nativeName: "Mayaʼ tʼàan", isRTL: false },
  { code: "zu", name: "Zulu", nativeName: "isiZulu", isRTL: false },
];

export const ALL_LANGUAGE_CODES = ALL_LANGUAGES.map((l) => l.code);

export function getLanguageByCode(code: string): LanguageInfo {
  const found = ALL_LANGUAGES.find((l) => l.code.toLowerCase() === code.toLowerCase());
  if (found) return found;
  // Fallback if code variant exists
  if (code.startsWith("zh")) {
    return code.toLowerCase().includes("tw") || code.toLowerCase().includes("hant")
      ? ALL_LANGUAGES.find((l) => l.code === "zh-TW")!
      : ALL_LANGUAGES.find((l) => l.code === "zh-CN")!;
  }
  if (code === "he") return ALL_LANGUAGES.find((l) => l.code === "iw")!;
  return ALL_LANGUAGES[0]; // English
}

export function isRtlLanguage(code: string): boolean {
  return RTL_LANGUAGE_CODES.has(code) || RTL_LANGUAGE_CODES.has(code.toLowerCase());
}

export function getSuggestedLanguages(): LanguageInfo[] {
  return SUGGESTED_LANGUAGE_CODES.map((code) => getLanguageByCode(code));
}

export function searchLanguages(query: string): LanguageInfo[] {
  const q = query.trim().toLowerCase();
  if (!q) return ALL_LANGUAGES;
  return ALL_LANGUAGES.filter(
    (lang) =>
      lang.name.toLowerCase().includes(q) ||
      lang.nativeName.toLowerCase().includes(q) ||
      lang.code.toLowerCase() === q
  );
}

export function getStoredLanguage(): string {
  if (typeof window === "undefined") return "en";
  try {
    const local = localStorage.getItem("user_selected_language");
    if (local) return local;
    const match = document.cookie.match(/googtrans=\/[^/]+\/([^;]+)/);
    if (match && match[1]) return match[1];
  } catch {
    // fallback
  }
  return "en";
}

export function setGoogleTransCookie(langCode: string): void {
  if (typeof document === "undefined") return;

  const targetCode = langCode && langCode !== "en" ? langCode : "";
  const hostname = window.location.hostname;
  const isLocal = !hostname || hostname === "localhost" || hostname === "127.0.0.1" || hostname.includes("192.168.");

  try {
    localStorage.setItem("user_selected_language", targetCode || "en");
  } catch {}

  if (!targetCode) {
    // Revert to English: delete cookies
    document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "googtrans=/en/en; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    if (!isLocal) {
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${hostname};`;
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.${hostname};`;
    }
  } else {
    // Set cookie on root path
    document.cookie = `googtrans=/en/${targetCode}; path=/;`;
    if (!isLocal) {
      document.cookie = `googtrans=/en/${targetCode}; path=/; domain=${hostname};`;
      document.cookie = `googtrans=/en/${targetCode}; path=/; domain=.${hostname};`;
      const parts = hostname.split(".");
      if (parts.length > 2) {
        const rootDomain = parts.slice(-2).join(".");
        document.cookie = `googtrans=/en/${targetCode}; path=/; domain=.${rootDomain};`;
      }
    }
  }
}
