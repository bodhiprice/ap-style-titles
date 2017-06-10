# AP Style Title Casing
This is a simple module that applies Associated Press style guidelines to strings that are intended to be used as titles. An explanation of the AP guidelines is [here](https://www.bkacontent.com/how-to-correctly-use-apa-style-title-case/). This is useful when you are working with data that has titles with different casing (or no casing) rules applied and you'd like them to conform to a well-known standard.

## The Rules
- First and last word of the string are always capitalized
- There is a list of articles, prepositions or conjunctions that have fewer than four letters on the link listed above. Words on that list are not capitalized when they are not the first or last word of the title.
- Some special abbreviations (vs, for example) are not capitalized.

## What This Doesn't Do
There are some grammar rules this doesn't cover. For example, "yet" should be capitalized when used as an adverb. This module won't catch that. It simply uses the rules above to add some consistency to title casing.

## Usage
First install the package:
`npm install ap-style-titles --save`

Then add it to the file where you want to transform the casing of a string:
```javascript
// ES5 require
const capitalize = require('ap-style-titles').default;
// ES6 import
import capitalize from 'ap-style-titles';

const capString = capitalize('the dangers of hiking without proper shoes');
console.log(capString);
// The Dangers of Hiking Without Proper Shoes
```

If you have suggestions for improving how this works, let me know.
