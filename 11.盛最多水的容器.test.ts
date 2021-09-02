it('盛最多水的容器', () => {
  const fn = require('./11.盛最多水的容器');
  expect(fn([1, 1])).toBe(1);
  expect(fn([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49);
  expect(fn([4, 3, 2, 1, 4])).toBe(16);
  expect(fn([1, 2, 4, 3])).toBe(4);
  expect(fn([1, 2, 1])).toBe(2);
  expect(fn([2, 3, 4, 5, 18, 17, 6])).toBe(17);
});
