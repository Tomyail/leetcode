it('5.最长回文子串', () => {
  const fn = require('./5.最长回文子串');
  expect(fn('babad')).toBe('bab');
  expect(fn('cbbd')).toBe('bb');
  expect(fn('a')).toBe('a');
  expect(fn('ac')).toBe('a');
  expect(fn('babab')).toBe('babab');
});
