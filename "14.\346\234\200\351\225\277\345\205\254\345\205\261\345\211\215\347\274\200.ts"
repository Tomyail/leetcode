/*
 * @lc app=leetcode.cn id=14 lang=typescript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 1) return strs[0];
  const sorted = strs.sort((a, b) => a.length - b.length);
  const min = sorted[0];

  let start = 0;
  let length = min.length;

  while (length) {
    let target = min.slice(start, length);
    let i = 1;
    for (i = 1; i < sorted.length; i++) {
      if (sorted[i].slice(start, start + length) !== target) {
        break;
      }
    }
    if (i === sorted.length) {
      break;
    }
    length--;
  }

  return min.slice(start, start + length);
}
module.exports = longestCommonPrefix;
// @lc code=end
