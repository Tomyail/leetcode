/*
 * @lc app=leetcode.cn id=136 lang=typescript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
// 不合符线性时间复杂度。。。
function singleNumber2(nums: number[]): number {
  const sorted = nums.sort((a, b) => a - b);
  let i = 0;
  let l = sorted.length;
  while (i < l - 1) {
    if (sorted[i] !== sorted[i + 1]) {
      return sorted[i];
    }
    i += 2;
  }
  return sorted[l - 1];
}

function singleNumber(nums: number[]): number {
  //xor 喵啊
  return nums.reduce((acc, cur) => acc ^ cur, 0);
}

// @lc code=end
