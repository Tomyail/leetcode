/*
 * @lc app=leetcode.cn id=9 lang=typescript
 *
 * [9] 回文数
 */

// @lc code=start
function isPalindrome(x: number): boolean {
  if (x < 0) return false;
  if (x == 0) return true;
  const str = x.toString()
  let start = 0;
  let end = str.length - 1;
  while (start < end) {
    if (str.charAt(start) !== str.charAt(end)) {
      return false;
    }
    start++;
    end--;
  }
  return true;
}
// @lc code=end
