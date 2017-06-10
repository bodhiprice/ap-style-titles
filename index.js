'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// This file formatted with prettier https://www.npmjs.com/package/prettier
// Words that shouldn't be capitalized
var noCaps = ['a', 'for', 'so', 'an', 'in', 'the', 'and', 'nor', 'to', 'at', 'of', 'up', 'but', 'on', 'yet', 'by', 'or'];

var capFirstLetter = function capFirstLetter(word) {
  return '' + word.charAt(0).toUpperCase() + word.slice(1);
};

var shouldCapitalize = function shouldCapitalize(word, index, last) {
  return index === 0 || index === last || !noCaps.includes(word);
};

var capitalize = function capitalize(title) {
  var titleArray = title.split(' ');
  return titleArray.map(function (word, index) {
    return shouldCapitalize(word, index, titleArray.length - 1) ? capFirstLetter(word) : word;
  }).join(' ');
};

exports.default = capitalize;
'use strict';

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

test('It capitalizes the string properly', function () {
  expect((0, _index2.default)('the dangers of hiking without proper shoes')).toEqual('The Dangers of Hiking Without Proper Shoes');
});
