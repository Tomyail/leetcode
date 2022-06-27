/*
 * @lc app=leetcode.cn id=28 lang=typescript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
function strStr(haystack: string, needle: string): number {
  if (haystack === needle) return 0;
  // return haystack.indexOf(needle)
  const allMatch = (i: number) => {
    for (let j = 0; j < needle.length; j++) {
      if (haystack[i + j] !== needle[j]) {
        return false;
      }
    }
    return true;
  };
  for (let i = 0; i < haystack.length; i++) {
    if (allMatch(i)) {
      return i;
    }
  }
  return -1;
}
// @lc code=end
