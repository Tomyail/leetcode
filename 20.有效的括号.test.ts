it('20.有效的括号', () => {
  const fn = require('./20.有效的括号');
  console.log('hello')
  expect(fn('()[]{}')).toBe(1);
  // expect(fn('(]')).toBe(false);
  // expect(fn('([)]')).toBe(false);
  // expect(fn('{[]}')).toBe(true);
});
