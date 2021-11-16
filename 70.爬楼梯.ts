/*
 * @lc app=leetcode.cn id=70 lang=typescript
 *
 * [70] 爬楼梯
 */

//常规递归版本，会超时
function clientStairsTimeout(n: number): number {
  if (n === 1) return 1;
  if (n === 2) return 2;
  return clientStairsTimeout(n - 2) + clientStairsTimeout(n - 1);
}
// @lc code=start
function climbStairs(n: number): number {
  const tailRec = (n: number, n1: number, n2: number): number => {
    if (n == 0) {
      return n2;
    }
    return tailRec(n - 1, n2, n1 + n2);
  };
  //因为函数的返回值是函数本身，所以不会有额外的栈开销
  return tailRec(n, 0, 1);
}

function climbStairs2(n: number): number {
  if (n == 1) return 1;
  if (n == 2) return 2;
  const result = [1, 2];
  for (let i = 2; i < n; i++) {
    result[i] = result[i - 2] + result[i - 1];
  }
  return result.pop()!
}

// fn = f(n-1) + f(n-2)
module.exports = climbStairs;
// @lc code=end
