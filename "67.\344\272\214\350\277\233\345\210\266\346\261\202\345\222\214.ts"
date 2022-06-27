/*
 * @lc app=leetcode.cn id=67 lang=typescript
 *
 * [67] 二进制求和
 */

// @lc code=start
function addBinary(a: string, b: string): string {
  if (a.length > b.length) {
    const temp = a;
    a = b;
    b = temp;
  }
  let result: number[] = new Array(b.length);
  let increase = 0;

  for (let bi = b.length - 1; bi > -1; bi--) {
    let ai = bi - (b.length - a.length);
    if (ai > -1) {
      const sum = Number(b[bi]) + Number(a[ai]) + increase;
      const left = sum % 2;
      increase = Math.floor(sum / 2);

      result[bi] = left;
    }
    //都是长一点的 b 的事情了
    else {
      const sum = Number(b[bi]) + increase;
      const left = sum % 2;
      increase = Math.floor(sum / 2);
      result[bi] = left;
    }
  }

  if (increase) {
    result.unshift(increase);
  }

  return result.join('');
}

module.exports = addBinary
// @lc code=end
