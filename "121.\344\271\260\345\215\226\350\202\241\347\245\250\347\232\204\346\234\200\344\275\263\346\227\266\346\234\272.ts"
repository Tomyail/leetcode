/*
 * @lc app=leetcode.cn id=121 lang=typescript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
function maxProfit(prices: number[]): number {
  let minIndex = 0;
  let maxIndex = 0;
  let max = prices[0];
  let min = prices[0];
  let l = prices.length;
  let i = 0;
  let maxDelta = 0;
  while (i < l) {
    //找最大
    if (prices[i] > max) {
      max = prices[i];
      maxIndex = i;
    }

    //找最小
    if (prices[i] < min) {
      min = prices[i];
      minIndex = i;
    }

    //最大的必须在最小的左边
    // console.log(minIndex, maxIndex);
    if (maxIndex < minIndex) {
      maxIndex = minIndex;
      max = min;
    } else {
      //为啥要在这里算而不是while 结束算呢？因为【2，4，1】 这种必须提前算出2， 否则会变成0
      maxDelta = Math.max(maxDelta, prices[maxIndex] - prices[minIndex]);
      // console.log('max',maxDelta)
    }
    i++;
  }
  return maxDelta;
}
// @lc code=end
