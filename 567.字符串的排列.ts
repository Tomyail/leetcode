/*
 * @lc app=leetcode.cn id=567 lang=typescript
 *
 * [567] 字符串的排列
 */

// @lc code=start
function checkInclusion(s1: string, s2: string): boolean {
  let n = s1.length;
  let m = s2.length;
  if (n > m) return false;

  const s1Arr = new Array(26).fill(0);
  const s2Arr = new Array(26).fill(0);

  for (let i = 0; i < n; i++) {
    s1Arr[s1.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    s2Arr[s2.charCodeAt(i) - 'a'.charCodeAt(0)]++;
  }

  if (s1Arr.toString() === s2Arr.toString()) return true;

  for (let i = n; i < m; i++) {
    s2Arr[s2.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    s2Arr[s2.charCodeAt(i - n) - 'a'.charCodeAt(0)]--;

    if (s1Arr.toString() === s2Arr.toString()) {
      return true;
    }
  }
  return false;
}
// @lc code=end
