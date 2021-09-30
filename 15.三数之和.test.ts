it('15.三数之和', () => {
  const fn = require('./15.三数之和');

  const res1 = fn([-1, 0, 1, 2, -1, -4]);
  const expect1 = [
    [-1, -1, 2],
    [-1, 0, 1],
  ];

  // console.log(res1.length, res1);
  expect(res1.length).toBe(expect1.length);

  const res2 = fn([-1, 0, 0, 1, -1, -1, 2, 1, 2, -1, -4, 2, 2]);
  const expect2 = [
    [-4, 2, 2],
    [-1, -1, 2],
    [-1, 0, 1],
  ];

  // console.log(res2.length, res2);
  expect(res2.length).toBe(expect2.length);

  const res3 = fn([-2, 0, 1, 1, 2]);
  const expect3 = [
    [-2, 0, 2],
    [-2, 1, 1],
  ];

  console.log(res3);
  expect(res3.length).toBe(expect3.length);

  const res4 = fn([-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4]);
  const expect4 = [
    [-4, 0, 4],
    [-4, 1, 3],
    [-3, -1, 4],
    [-3, 0, 3],
    [-3, 1, 2],
    [-2, -1, 3],
    [-2, 0, 2],
    [-1, -1, 2],
    [-1, 0, 1],
  ];

  console.log(res4);
  expect(res4.length).toBe(expect4.length);
  expect(fn([])).toEqual([]);
  expect(fn([0])).toEqual([]);
});
