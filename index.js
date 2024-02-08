const NEGATIVE = "ঋণাত্মক";
const DECIMAL = " দশমিক";
const HUNDRED = 100;
const THOUSAND = 1000;
const LAC = 100000;
const CORE = 10000000;
const BILLION = 1000000000;
const TRILLION = 1000000000000;
const QUADRILLION = 1000000000000000;
const MAX_SAFE_NUMBER = 9007199254740991;

// English To Bangla Number Map
const banglaNumberMap = {
  1: "১",
  2: "২",
  3: "৩",
  4: "৪",
  5: "৫",
  6: "৬",
  7: "৭",
  8: "৮",
  9: "৯",
  0: "০",
  ".": ".",
  "-": "-",
  "+": "+",
  _: "_",
  "/": "/",
};

// English to Bangla Word Map
const banglaWordMap = {
  0: "শূন্য",
  1: "এক",
  2: "দুই",
  3: "তিন",
  4: "চার",
  5: "পাঁচ",
  6: "ছয়",
  7: "সাত",
  8: "আট",
  9: "নয়",
  10: "দশ",
  11: "এগারো",
  12: "বারো",
  13: "তেরো",
  14: "চৌদ্দ",
  15: "পনের",
  16: "ষোল",
  17: "সতের",
  18: "আঠার",
  19: "উনিশ",
  20: "বিশ",
  21: "একুশ",
  22: "বাইশ",
  23: "তেইশ",
  24: "চব্বিশ",
  25: "পঁচিশ",
  26: "ছাব্বিশ",
  27: "সাতাশ",
  28: "আটাশ",
  29: "ঊনত্রিশ",
  30: "ত্রিশ",
  31: "একত্রিশ",
  32: "বত্রিশ",
  33: "তেত্রিশ",
  34: "চৌত্রিশ",
  35: "পঁয়ত্রিশ",
  36: "ছত্রিশ",
  37: "সাঁইত্রিশ",
  38: "আটত্রিশ",
  39: "ঊনচল্লিশ",
  40: "চল্লিশ",
  41: "একচল্লিশ",
  42: "বিয়াল্লিশ",
  43: "তেতাল্লিশ",
  44: "চুয়াল্লিশ",
  45: "পঁয়তাল্লিশ",
  46: "ছিচল্লিশ",
  47: "সাতচল্লিশ",
  48: "আটচল্লিশ",
  49: "ঊনপঞ্চাশ",
  50: "পঞ্চাশ",
  51: "একান্ন",
  52: "বাহান্ন",
  53: "তেপ্পান্ন",
  54: "চুয়ান্ন",
  55: "পঞ্চান্ন",
  56: "ছাপ্পান্ন",
  57: "সাতান্ন",
  58: "আটান্ন",
  59: "ঊনষাট",
  60: "ষাট",
  61: "একষট্টি",
  62: "বাষট্টি",
  63: "তেষট্টি",
  64: "চৌষট্টি",
  65: "পঁয়ষট্টি",
  66: "ছেষট্টি",
  67: "সাতষট্টি",
  68: "আটষট্টি",
  69: "উনসত্তুর",
  70: "সত্তর",
  71: "একাত্তর",
  72: "বাহাত্তর",
  73: "তেহাত্তুর",
  74: "চুয়াত্তর",
  75: "পঁচাত্তর",
  76: "ছিয়াত্তর",
  77: "সাতাত্তর",
  78: "আটাত্তর",
  79: "ঊনআশি",
  80: "আশি",
  81: "একাশি",
  82: "বিরাশি",
  83: "তিরাশি",
  84: "চুরাশি",
  85: "পঁচাশি",
  86: "ছিয়াশি",
  87: "সাতাশি",
  88: "আটাশি",
  89: "উননব্বই",
  90: "নব্বই",
  91: "একানব্বই",
  92: "বিরানব্বই",
  93: "তিরানব্বই",
  94: "চুরানব্বই",
  95: "পঁচানব্বই",
  96: "ছিয়ানব্বই",
  97: "সাতানব্বই",
  98: "আটানব্বই",
  99: "নিরানব্বই",
  100: "শত",
  1000: "হাজার",
  100000: "লক্ষ",
  10000000: "কোটি",
  1000000000: "বিলিয়ন",
  1000000000000: "ট্রিলিয়ন",
  1000000000000000: "কোয়াড্রিলিয়ন",
};

// Utils Function
const isNumber = (str) => {
  // Remove leading and trailing whitespace
  let strTrim = str.toString().trim();
  // Check if the trimmed string is not empty and is a valid number
  return strTrim !== "" && !isNaN(strTrim);
};

// English to Bangla Word
function englishToBanglaWord(number) {
  let remainder,
    word,
    words = arguments[1];

  if (number === 0) {
    return !words ? banglaWordMap[0] : words.join(" ").replace(/,$/, "");
  }

  if (!words) {
    words = [];
  }

  if (number < 0) {
    words.push(NEGATIVE);
    number = Math.abs(number);
  }

  if (number < HUNDRED) {
    remainder = 0;
    word = banglaWordMap[number];
  } else if (number < THOUSAND) {
    remainder = number % HUNDRED;
    word = banglaWordMap[Math.floor(number / HUNDRED)] + banglaWordMap[HUNDRED];
  } else if (number < LAC) {
    remainder = number % THOUSAND;
    word =
      banglaWordMap[Math.floor(number / THOUSAND)] +
      " " +
      banglaWordMap[THOUSAND];
  } else if (number < CORE) {
    remainder = number % LAC;
    word = banglaWordMap[Math.floor(number / LAC)] + " " + banglaWordMap[LAC];
  } else if (number < BILLION) {
    remainder = number % CORE;
    word =
      englishToBanglaWord(Math.floor(number / CORE)) +
      " " +
      banglaWordMap[CORE];
  } else if (number < TRILLION) {
    remainder = number % BILLION;
    word =
      englishToBanglaWord(Math.floor(number / BILLION)) +
      " " +
      banglaWordMap[BILLION];
  } else if (number < QUADRILLION) {
    remainder = number % TRILLION;
    word =
      englishToBanglaWord(Math.floor(number / TRILLION)) +
      " " +
      banglaWordMap[TRILLION];
  } else if (number <= MAX_SAFE_NUMBER) {
    remainder = number % QUADRILLION;
    word =
      englishToBanglaWord(Math.floor(number / QUADRILLION)) +
      " " +
      banglaWordMap[QUADRILLION];
  }
  words.push(word);
  return englishToBanglaWord(remainder, words);
}

// English to Bangla Number
const englishToBanglaNumber = (number) => {
  {
    if (!isNumber(number)) return "Not a valid number";
    let toString = number.toString();
    let toBanglaNumber = "";
    for (let i = 0; i < toString.length; i++) {
      const element = toString[i];
      toBanglaNumber += banglaNumberMap[element];
    }
    return toBanglaNumber;
  }
};

const singleNumberToWord = (number) => {
  let result = "";
  for (const char of number) {
    result += `${banglaWordMap[char]} `;
  }
  return result;
};

// Main Function Start
function toBangla() {
  return {
    //   English to bangla Number
    engToNumber: (number) => englishToBanglaNumber(number),
    //   English to bangla Word
    engToWord: (number, currency) => {
      if (!isNumber(number)) return "Not a valid number";
      const numberToString = number.toString();
      if (numberToString.includes(".")) {
        const apart = numberToString.trim().split(".");
        const firstPart = englishToBanglaWord(apart[0]);
        const lastPart = currency
          ? englishToBanglaWord(apart[0].slice(0, 2))
          : singleNumberToWord(apart[1]);
        return currency
          ? `${firstPart} টাকা এবং ${lastPart} পয়সা`
          : `${firstPart}${DECIMAL} ${lastPart}`;
      }
      return currency
        ? englishToBanglaWord(number) + "টাকা"
        : englishToBanglaWord(number);
    },
  };
}

const bn = toBangla();
module.exports = bn;
