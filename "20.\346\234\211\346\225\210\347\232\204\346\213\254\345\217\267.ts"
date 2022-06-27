/*
 * @lc app=leetcode.cn id=20 lang=typescript
 *
 * [20] 有效的括号
 */

// @lc code=start
function isValid(s: string): boolean {
  const pair = [
    ['(', ')'],
    ['[', ']'],
    ['{', '}'],
  ];

  const open = pair.map((p) => p[0]);
  const close = pair.map((p) => p[1]);

  const stack: string[] = [];
  for (let i = 0; i < s.length; i++) {
    const char = s.charAt(i);
    if (open.includes(char)) {
      stack.push(char);
    } else {
      const target = stack.pop();
      if (target) {
        if (open.indexOf(target) !== close.indexOf(char)) {
          return false;
        }
      } else {
        return false;
      }
    }
  }
  return stack.length ? false : true;
}
module.exports = isValid;
// @lc code=end
