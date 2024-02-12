# Convert Number To Bangla Number, Word and Date

## Installation

**number-to-bangla** has been designed for converting English Numbers and Date to Bangla Number and Date

```
npm install number-to-bangla
```

or

```
npm i number-to-bangla
```

## Documentation

After Installation Import the Package

**Node JS**

```jsx
const bn = require("number-to-bangla");
```

**React JS**

```jsx
import bn from "number-to-bangla";
```

## Examples For Number & Currency

Check notes below of Examples

```jsx
const bn = require("number-to-bangla");

// 1. Simple Convert
bn.engToNumber(123456);
//Output: ১২৩৪৫৬

// 2. To Word Convert
bn.engToWord(9999);
//Output: নয় হাজার নয়শত নিরানব্বই

bn.engToWord(123456.9999);
//Output: এক লক্ষ তেইশ হাজার চারশত ছাপ্পান্ন দশমিক নয় নয় নয় নয়

bn.engToWord(123456, true);
// Output: এক লক্ষ তেইশ হাজার চারশত ছাপ্পান্ন টাকা

bn.engToWord(55.56, true);
//Output:  পঞ্চান্ন টাকা এবং ছাপ্পান্ন পয়সা
```

### Note For Numbers and Currency

1. Plain English Number Eg. 123456
2. Plain English String Type Number Eg. "123456"
3. Decimal Number 56.523
4. Support `9007199254740991<= number =>9007199254740991` Range

## Examples For Date

You can Pass valid date and string and will get expected resuklt.

```jsx
const bn = require("number-to-bangla");

bn.engToDate("12/08/2024");
//১২/০৮/২০২৪

bn.engToDate("12/08/2024");
//১২/০৮/২০২৪

bn.engToDate("12 Aug 2025");
//১২ আগস্ট ২০২৫

bn.engToDate("Sat 12 Aug 2025");
//শনি ১২ আগস্ট ২০২৫

bn.engToDate("Saturday 12 Aug 2025");
//শনিবার ১২ আগস্ট ২০২৫

bn.engToDate("Friday 12 August 2025 12:06:00 pm");
//শুক্রবার ১২ আগস্ট ২০২৫ ১২:০৬:০০ pm

bn.engToDate("Friday 12 August 2025 at 12:06:00 pm");
//Invalid Date or Time (Because of at)
```

### Note For Date

1. Do not suppor `RFC 3339` date formats eg. "2024-02-12T12:34:56Z"
2. Support `ISO 8601:` Date formats as well as Sort and long date formats.
