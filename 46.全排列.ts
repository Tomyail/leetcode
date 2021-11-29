/*
 * @lc app=leetcode.cn id=46 lang=typescript
 *
 * [46] 全排列
 */

// @lc code=start
function permute(nums: number[]): number[][] {
  // debugger;
  const ans: any[][] = [];
  const swap = (data: any[], i: number, j: number) => {
    const temp = data[i];
    data[i] = data[j];
    data[j] = temp;
  };
  const backtrack = (
    n: number,
    output: any[],
    result: any[],
    first: number
  ) => {
    console.log(`first: ${first},n:${n},output:${output}`);
    if (first == n) {
      result.push([...output]);
    }
    for (let i = first; i < n; i++) {
      // const out = [...output];
      // console.logs(output);
      console.log('loop:before swap', first, i, output);
      swap(output, first, i);
      console.log('loop:afters swap', first, i, output);
      backtrack(n, output, result, first + 1);
      swap(output, first, i);
      console.log('===\n');
      // console.log(`end: i: ${i}, first:${first}`);
    }
  };

  backtrack(nums.length, nums, ans, 0);

  return ans;
}

permute([1, 2, 3]);

module.exports = permute;
// @lc code=end
