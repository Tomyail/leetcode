/*
 * @lc app=leetcode.cn id=58 lang=typescript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
function lengthOfLastWord(s: string): number {
  let length = 0;
  for (let i = s.length - 1; i > -1; i--) {
    if (s[i] === ' ') {
      if (length > 0) break;
      continue;
    }
    length++;
  }
  return length;
}

module.exports = lengthOfLastWord
// @lc code=end
