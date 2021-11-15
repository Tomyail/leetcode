/*
 * @lc app=leetcode.cn id=70 lang=typescript
 *
 * [70] 爬楼梯
 */

// @lc code=start
function climbStairs(n: number): number {
  // x+ 2y = n
  // x = n - 2y
  let total = 0;
  for (let y = 0; 2 * y < n; y++) {
    const xCount = n - 2 * y;
    const YPos = Math.pow(xCount + 1, y);
    total += YPos;
  }
  return total;
}

module.exports = climbStairs
// @lc code=end
