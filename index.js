'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// This file formatted with prettier https://www.npmjs.com/package/prettier
// Words that shouldn't be capitalized
var noCaps = ['a', 'for', 'so', 'an', 'in', 'the', 'and', 'nor', 'to', 'at', 'of', 'up', 'but', 'on', 'yet', 'by', 'or', 'vs', 'vs.'];

var transformCase = function transformCase(upper, word) {
  var firstLetter = word.charAt(0);
  var casedLetter = upper ? firstLetter.toUpperCase() : firstLetter.toLowerCase();
  return '' + casedLetter + word.slice(1);
};

var shouldCapitalize = function shouldCapitalize(word, index, last) {
  return index === 0 || index === last || !noCaps.includes(word.toLowerCase());
};

var capitalize = function capitalize(title) {
  var titleArray = title.split(' ');
  return titleArray.map(function (word, index) {
    return transformCase(shouldCapitalize(word, index, titleArray.length - 1), word);
  }).join(' ');
};

exports.default = capitalize;
