/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let firstIndex = -1;

  while (firstIndex < nums.length) {
    firstIndex += 1;
    const first = nums[firstIndex];
    let secondIndex = firstIndex;
    while (secondIndex < nums.length) {
      secondIndex += 1;
      const second = nums[secondIndex];
      if (first + second === target) {
        return [firstIndex, secondIndex];
      }
    }
  }
  return;
};
