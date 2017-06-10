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
  'or'
];

const capFirstLetter = word =>
  `${word.charAt(0).toUpperCase()}${word.slice(1)}`;

const shouldCapitalize = (word, index, last) =>
  index === 0 || index === last || !noCaps.includes(word);

const capitalize = title => {
  const titleArray = title.split(' ');
  return titleArray
    .map(
      (word, index) =>
        shouldCapitalize(word, index, titleArray.length - 1)
          ? capFirstLetter(word)
          : word
    )
    .join(' ');
};

export default capitalize;
