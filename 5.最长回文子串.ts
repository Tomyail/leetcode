/*
 * @lc app=leetcode.cn id=5 lang=typescript
 *
 * [5] 最长回文子串
 */

// @lc code=start
function longestPalindrome(s: string): string {
  const isPalindrome = (str: string) => {
    if (str.length === 0) return true;
    if (str.length === 1) return true;
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
  };

  const length = s.length;
  for (let sliceLength = length; sliceLength > 0; sliceLength--) {
    for (let start = 0; start + sliceLength <= length; start++) {
      const target = s.slice(start, start + sliceLength);
      if (isPalindrome(target)) {
        return target;
      }
    }
  }

  return s;
}

module.exports = longestPalindrome;
// @lc code=end
