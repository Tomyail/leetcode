// @leet start
/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  // 关键是如何在给特定的索引加上一个数字后,判断它是否是当前数字里面最大的值?
  // 方法1 ,暴力遍历, 时间复杂度 O(n*n)
  // 方法2, 先记录之前的最大值, 然后判断加上后的值是不是比他大,如果是,则是最大值,否则不是
  const oldMax = Math.max(...candies);
  return candies.map((candy) => candy + extraCandies >= oldMax);
};
// @leet end
