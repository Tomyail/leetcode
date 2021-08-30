/*
 * @lc app=leetcode.cn id=11 lang=typescript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
function maxArea(height: number[]): number {
  //找出 数组里面数值 x 数值的索引差值的乘积最大的两个数字

  let max = 0;
  //先枚举 X 轴,再枚举 Y 轴
  for (let xDelta = 1; xDelta < height.length; xDelta++) {
    for (let i = 0; i < height.length; i++) {
      if (i + xDelta > height.length) {
        break;
      }
      const currentValue = xDelta * Math.min(height[i], height[i + xDelta]);
      if (currentValue > max) {
        max = currentValue;
      }
    }
  }

  return max;
}

module.exports = maxArea
// @lc code=end
