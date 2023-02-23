const plus = require('./plus')

test('adds 1 + 2 to equal 3', () => {
  const testingResult = plus(1, 2)
  expect(testingResult).toBe(3);
});

test('adds 2 + 2 to equal 4', () => {
  const testingResult = plus(2, 2)
  expect(testingResult).toBe(4);
});