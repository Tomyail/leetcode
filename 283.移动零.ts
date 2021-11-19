/*
 * @lc app=leetcode.cn id=283 lang=typescript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  const length = nums.length;
  let i = 0;
  let j = i + 1;
  while (i < length) {
    if (nums[i] === 0) {
      // console.log(i,j)
      // j = i + 1;
      while (j < length) {
        if (nums[j] !== 0) {
          break;
        }
        j++;
      }

      if (j >= length) break;
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
      i++;
      j++;
    } else {
      i++;
      j++;
    }
  }
}
// @lc code=end
