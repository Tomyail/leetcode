/*
 * @lc app=leetcode.cn id=977 lang=typescript
 *
 * [977] 有序数组的平方
 */

// @lc code=start
function sortedSquares(nums: number[]): number[] {
  const result = new Array(nums.length);

  const length = nums.length;
  let i = 0;
  let j = length - 1;
  let pos = j;
  while (i <= j) {
    const left = nums[i] * nums[i];
    const right = nums[j] * nums[j];
    if (left > right) {
      result[pos] = left;
      // result.unshift(nums[i] * nums[i]);
      i++;
    } else {
      result[pos] = right;
      // result.unshift(nums[j] * nums[j]);
      j--;
    }
    pos--;
  }
  return result;
}
// @lc code=end
