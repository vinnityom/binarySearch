import binarySearch from '../src/binarySearch';

describe('should get index right', () => {
  const numbers = [1, 2, 3, 5, 6, 8, 9, 10, 11, 12, 12];

  test.each([
    [3, 2],
    [4, null],
    [9, 6],
    [12, 9],
    [14, null],
  ])('index of %i should be %p',
    (numberToSearch, expected) => {
      expect(binarySearch(numbers, numberToSearch)).toBe(expected);
    },
  );
});
