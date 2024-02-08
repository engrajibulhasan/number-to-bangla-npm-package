# Convert Number To Bangla Number, Word and Date

## Installation

**number-to-bangla** has been designed for converting English Numbers and Date to Bangla Number and Date
`npm install number-to-bangla` or
`npm i number-to-bangla`

## Documentation

After Installation Import the Package

**Node JS**

```jsx
const bn = require("number-to-bangla");
```

**React JS**

```jsx
import { bn } from "number-to-bangla";
```

## Examples

```jsx
const bn = require("number-to-bangla");

// 1. Simple Convert
const banglaNumber = bn.engToNumber(123456);
console.log("Simple Bangla Number:", banglaNumber);
//Simple output Simple Bangla Number: ১২৩৪৫৬

// 2. To Word Convert
const banglaWord = bn.engToWord(9999);
console.log("Simple number to Bangla word: ", banglaWord);
//Output: Simple number to Bangla word: নয় হাজার নয়শত নিরানব্বই

const banglaWordDecimal = bn.engToWord(123456.9999);
console.log("Decimal Number to Bangla word: ", banglaWordDecimal);
//Output: Decimal Number to Bangla word: এক লক্ষ তেইশ হাজার চারশত ছাপ্পান্ন দশমিক নয় নয় নয় নয়

const banglaCurrency = bn.engToWord(123456, true);
console.log("Simple Number to Currency: ", banglaCurrency);
// Output: Simple Number to Currency:  এক লক্ষ তেইশ হাজার চারশত ছাপ্পান্নটাকা

const banglaCurrencyDecimal = bn.engToWord(55.56, true);
console.log("Decimal Number to Currency: ", banglaCurrencyDecimal);
//Output: Decimal Number to Currency: পঞ্চান্ন টাকা এবং পঞ্চান্ন পয়সা
```

### Note: This Package only support

1. Plain English Number Eg. 123456
2. Plain English String Type Number Eg. "123456"
3. Decimal Number 56.523
4. Support ** 9007199254740991<= number =>9007199254740991** Range
