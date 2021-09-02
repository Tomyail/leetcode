/*
 * @lc app=leetcode.cn id=11 lang=typescript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
// function maxArea(height: number[]): number {
//   //找出 数组里面数值 x 数值的索引差值的乘积最大的两个数字

//   let max = 0;
//   //先枚举 X 轴,再枚举 Y 轴
//   for (let xDelta = 1; xDelta < height.length; xDelta++) {
//     for (let i = 0; i < height.length - xDelta; i++) {
//       const currentValue =
//         xDelta * //Math.min(height[i], height[i + xDelta]);
//         (height[i] < height[i + xDelta] ? height[i] : height[i + xDelta]);
//       if (currentValue > max) {
//         max = currentValue;
//       }
//     }
//   }

//   return max;
// }

function maxArea(height: number[]): number {
  let start = 0,
    end = height.length - 1;

  let max = 0;

  while (start < end) {
    //比较两边,面积需要按照短的那一边算
    if (height[start] > height[end]) {
      max = Math.max(max, (end - start) * height[end]);
      //向内移动边,两边都可以移动,但是移动长边后,有2种可能:
      // 1 有更高的长边
      // 2 没有更高的长边
      //无论是哪一种,面积都按照短的那一边算,所以这两个结果都会导致更小的面积.
      //反过来如果移动短边,也有两种可能
      // 1 有更高的短边
      // 2 没有更高的短边
      // 如果出现情况 1, 获得面积将会大于当前值.
      // 所以移动短边是唯一能够获得更大面积的方法
      end--;
    } else {
      max = Math.max(max, (end - start) * height[start]);
      start++;
    }
  }
  return max;
}

module.exports = maxArea;
// @lc code=end
