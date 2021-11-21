/*
 * @lc app=leetcode.cn id=557 lang=typescript
 *
 * [557] 反转字符串中的单词 III
 */

// @lc code=start
function reverseWords(s: string): string {
  let i = 0;
  let start = 0;
  let end = 0;
  let length = s.length;
  let result = new Array(s.length);
  while (i < length) {
    if (s.charAt(i) === ' ' || i == length - 1) {
      result[i] = s.charAt(i);
      if (i === length - 1) {
        end = i;
      } else {
        end = i - 1;
      }

      while (start < end) {
        result[end] = s.charAt(start);
        result[start] = s.charAt(end);
        end--;
        start++;
      }
      if (start === end) {
        result[start] = s.charAt(start);
      }
      start = i + 1;
    }
    i++;
  }
  return result.join('');
}
// @lc code=end
