/*
 * @lc app=leetcode.cn id=15 lang=typescript
 *
 * [15] 三数之和
 */

// @lc code=start
// function threeSum(nums: number[]): number[][] {
//   if (nums.length < 3) return [];

//   // const twoSum = (nums: number[]) => {};

//   const addIfNotContain = (source: number[], target: number[][]) => {
//     if (
//       !target.some(
//         ([a, b, c]) => source[0] === a && source[1] === b && source[2] === c
//       )
//     ) {
//       target.push(source);
//     }
//   };
//   const result: number[][] = [];
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       for (let k = j + 1; k < nums.length; k++) {
//         if (nums[i] + nums[j] + nums[k] === 0) {
//           addIfNotContain(
//             [nums[i], nums[j], nums[k]].sort((a, b) => a - b),
//             result
//           );
//         }
//       }
//     }
//   }

//   return result;
// }

function threeSum(nums: number[]): number[][] {
  if (nums.length < 3) return [];

  // const twoSum = (nums: number[]) => {};

  const addIfNotContain = (source: number[], target: number[][]) => {
    if (
      !target.some(
        ([a, b, c]) => source[0] === a && source[1] === b && source[2] === c
      )
    ) {
      target.push(source);
    }
  };

  const sorted = nums.sort((a, b) => a - b);
  const result: number[][] = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          addIfNotContain(
            [nums[i], nums[j], nums[k]].sort((a, b) => a - b),
            result
          );
        }
      }
    }
  }

  return result;
}
module.exports = threeSum;
// @lc code=end
