/*
 * @lc app=leetcode.cn id=53 lang=typescript
 *
 * [53] 最大子序和
 */

// @lc code=start
function maxSubArray(nums: number[]): number {
  const sum = (nums: number[], idx: number, length: number) => {
    let result = 0;
    for (let i = 0; i < length; i++) {
      result += nums[i + idx];
    }
    return result;
  };
  if (nums.length == 1) return nums[0];
  let result = Number.MIN_VALUE;
  let length = nums.length;
  for (let i = 1; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (i + j > length) continue;
      const _sum = sum(nums, j, i);
      if (_sum > result) {
        result = _sum;
      }
    }
  }
  return result;
}
// @lc code=end
