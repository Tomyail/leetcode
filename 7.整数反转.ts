/*
 * @lc app=leetcode.cn id=7 lang=typescript
 *
 * [7] 整数反转
 */

// @lc code=start
// function reverse(x: number): number {
//   const flag = x < 0 ? -1 : 1;
//   const arr = Math.abs(x).toString().split('');
//   const max = (Math.pow(2, 31) - 1).toString();
//   const min = Math.pow(2, -31).toString();
//   //偶数
//   if (arr.length % 2 === 0) {
//     const middle = arr.length >> 1;
//     for (let i = 0; i < middle; i++) {
//       const temp = arr[middle + i];
//       arr[middle + i] = arr[middle - i - 1];
//       arr[middle - i - 1] = temp;
//     }
//   } else {
//     const middle = arr.length >> 1;
//     for (let i = 0; i < middle; i++) {
//       const temp = arr[middle + i + 1];
//       arr[middle + i + 1] = arr[middle - i - 1];
//       arr[middle - i - 1] = temp;
//     }
//   }

//   return parseInt(arr.join('')) * flag;
// }

function reverse(x: number): number {
  let res = 0;
  const max = Math.pow(2, 31) - 1;
  const min = Math.pow(-2, 31);
  while (x != 0) {
    // 除以10 是提前判断,否则 res 可能已经超出范围了.
    // 最大值 2147483647
    // 当 x % 10 = 8 ,9 时,还是会溢出. 但是输入的数据在有效范围内,所以第一位在在 res > max / 10 时只能是 2, 所以不能额外的 x%10 判断了
    // 最小值 -2147483648
    // dang x % 10 = -9 是,还是会溢出, 但是输入的数据在有效范围内,所以第一位在在 res < max / 10 时只能是 -2, 所以不能额外的 x%10 判断了
    if (res > max / 10 || res < min / 10) {
      return 0;
    }
    res = (x % 10) + res * 10;
    //骚操作,https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Bitwise_NOT
    //TODO 浮点值的表示方式
    x = ~~(x / 10);
  }

  return res;
}

module.exports = reverse;
// @lc code=end
