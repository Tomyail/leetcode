/*
 * @lc app=leetcode.cn id=53 lang=typescript
 *
 * [53] 最大子序和
 */

/**
 * 我一开始的思路是暴力的分解,从 最大分解到 1对. 然后分别对没对求和,比如
 * [1,2,3,4] 分解之后就有
 * [1,2,3,4]
 * [1,2,3], [2,3,4]
 * [1,2], [2,3], [2,3], [3,4]
 * [1],[2],[3], [4]
 * 然后提交超时了...
 * 有没有可能出现一种情况你没有计算第 0 个,然后 1,2 的和是最大? 没有计算 0,1,2 最大的可能只有 0 是负数
 * 当 0 是正数时,得出答案一定大于 1,2 的和
 * @param nums
 * @returns
 */
// @lc code=start
function maxSubArray(nums: number[]): number {
  if (nums.length == 1) return nums[0];

  let max = nums[0];
  const dp = new Array(nums.length);
  dp[0] = nums[0]
  for (let i = 1; i < nums.length; i++) {
    if (dp[i - 1] > 0) {
      dp[i] = nums[i] + dp[i - 1];
    } else {
      dp[i] = nums[i];
    }
    max = Math.max(max, dp[i]);
  }

  return max;
}

module.exports = maxSubArray;
// @lc code=end
