import capitalize from '../src/index';

test('It capitalizes the string properly', () => {
  expect(capitalize('the dangers of hiking without proper shoes')).toEqual(
    'The Dangers of Hiking Without Proper Shoes'
  );
});
