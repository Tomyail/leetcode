/*
 * @lc app=leetcode.cn id=4 lang=typescript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const result = nums1.concat(nums2).sort((a, b) => a - b);

  if (result.length === 0) {
    return 0;
  }
  if (result.length == 1) {
    return result[0];
  }

  if (result.length === 2) {
    return (result[0] + result[1]) /2 ;
  }

  //偶数
  if (result.length % 2 === 0) {
    const index = result.length >> 1;
    return (result[index - 1] + result[index]) / 2;
  } else {
    // >> 操作类似下去整
    return result[result.length >> 1];
  }

  //[], [2,3] => 2.5
}
// @lc code=end
