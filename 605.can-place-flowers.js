// @leet start
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
// mutation version
// var canPlaceFlowers = function (flowerbed, n) {
//   //边界1
//   if (n === 0) return true;
//   //边界2
//   if (flowerbed.length === 1) {
//     return flowerbed[0] === 0 && n <= 1;
//   }
//   // 一维数组
//   let length = flowerbed.length;
//   for (let i = 0; i < length; i++) {
//     if (flowerbed[i] == 1) {
//       continue;
//     }
//
//     if (i == 0 && flowerbed[i + 1] == 0) {
//       // 开始边界
//       n--;
//       flowerbed[i] = 1;
//     } else if (i == length - 1 && flowerbed[i - 1] == 0) {
//       // 结束边界
//       n--;
//       flowerbed[i] = 1;
//     } else if (flowerbed[i - 1] === 0 && flowerbed[i + 1] === 0) {
//       // 中间
//       n--;
//       // mutation
//       flowerbed[i] = 1;
//     }
//     if (n === 0) {
//       break;
//     }
//   }
//   return n <= 0;
// };
//

// 为了避免修改原数组，我们可以使用额外的变量来跟踪前一个和后一个位置的值，而不是直接在数组上进行操作。以下是修改后的代码：
// immutable version
var canPlaceFlowers = function (flowerbed, n) {
  if (n === 0) return true;
  if (flowerbed.length === 1) {
    return flowerbed[0] === 0 && n <= 1;
  }

  let length = flowerbed.length;
  let prev = 0;
  let next;

  for (let i = 0; i < length; i++) {
    next = i === length - 1 ? 0 : flowerbed[i + 1];

    if (flowerbed[i] === 0 && prev === 0 && next === 0) {
      n--;
      prev = 1;
    } else {
      prev = flowerbed[i];
    }

    if (n === 0) {
      break;
    }
  }

  return n <= 0;
};
// @leet end
