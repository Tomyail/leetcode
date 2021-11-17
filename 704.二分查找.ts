/*
 * @lc app=leetcode.cn id=704 lang=typescript
 *
 * [704] 二分查找
 */

// @lc code=start
function search(nums: number[], target: number): number {
  const find = (num: number[], start: number, end: number) => {
    if (num[start] > target) return -1;
    if (num[end] < target) return -1;
    if (end - start === 1) {
      if (nums[start] === target) return start;
      if (nums[end] === target) return end;
      return -1;
    }
    const index = Math.floor((start + end) / 2);
    if (nums[index] === target) return index;
    if (nums[index] > target) {
      return find(num, start, index);
    } else if (nums[index] < target) {
      return find(num, index, end);
    }
  };
  return find(nums, 0, nums.length - 1);
}
// @lc code=end
