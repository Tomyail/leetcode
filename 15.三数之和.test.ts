it('15.三数之和', () => {
  const fn = require('./15.三数之和');

  const res1 = fn([-1, 0, 1, 2, -1, -4]);
  const expect1 = [
    [-1, -1, 2],
    [-1, 0, 1],
  ];

  expect(res1.length === expect1.length);
  expect(fn([])).toEqual([]);
  expect(fn([0])).toEqual([]);
});
