# Convert Number To Bangla Number, Word and Date

## How to Install

`npm install number-to-bangla` or
`npm i number-to-bangla`

## How to Use in Node Project

After Installing it Import the package

```
const bn = require("number-to-bangla");
const banglaNumber = bn.engToNumber(123456);
console.log("banglaNumber", banglaNumber);

const banglaNumberDecimal = bn.engToNumber(-55589.5265);
console.log("banglaNumberDecimal", banglaNumberDecimal);

const banglaWord = bn.engToWord(9999);
console.log("banglaWord", banglaWord);

const banglaWordDecimal = bn.engToWord(123456.9999);
console.log("banglaWordDecimal", banglaWordDecimal);

const banglaCurrency = bn.engToWord(123456, true);
console.log("banglaCurrency", banglaCurrency);

const banglaCurrencyDecimal = bn.engToWord(55.56, true);
console.log("banglaCurrencyDecimal", banglaCurrencyDecimal);
```

## Output

banglaNumber ১২৩৪৫৬
index.js:260
banglaNumberDecimal -৫৫৫৮৯.৫২৬৫
index.js:263
banglaWord নয় হাজার নয়শত নিরানব্বই
index.js:266
banglaWordDecimal এক লক্ষ তেইশ হাজার চারশত ছাপ্পান্ন দশমিক নয় নয় নয় নয়
index.js:269
banglaCurrency এক লক্ষ তেইশ হাজার চারশত ছাপ্পান্নটাকা
index.js:272
banglaCurrencyDecimal পঞ্চান্ন টাকা এবং পঞ্চান্ন পয়সা
