// This file formatted with prettier https://www.npmjs.com/package/prettier
// Words that shouldn't be capitalized
const noCaps = [
  'a',
  'for',
  'so',
  'an',
  'in',
  'the',
  'and',
  'nor',
  'to',
  'at',
  'of',
  'up',
  'but',
  'on',
  'yet',
  'by',
  'or',
  'vs',
  'vs.'
];

const transformCase = (upper, word) => {
  const firstLetter = word.charAt(0);
  const casedLetter = upper
    ? firstLetter.toUpperCase()
    : firstLetter.toLowerCase();
  return `${casedLetter}${word.slice(1)}`;
};

const shouldCapitalize = (word, index, last) =>
  index === 0 || index === last || !noCaps.includes(word.toLowerCase());

const capitalize = title => {
  const titleArray = title.split(' ');
  return titleArray
    .map((word, index) =>
      transformCase(shouldCapitalize(word, index, titleArray.length - 1), word)
    )
    .join(' ');
};

export default capitalize;
