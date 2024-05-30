// @leet start
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  //边界1
  if (n === 0) return true;
  //边界2
  if (flowerbed.length === 1) {
    return flowerbed[0] === 0 && n <= 1;
  }
  // 一维数组
  let length = flowerbed.length;
  for (let i = 0; i < length; i++) {
    if (flowerbed[i] == 1) {
      continue;
    }

    if (i == 0 && flowerbed[i + 1] == 0) {
      // 开始边界
      n--;
      flowerbed[i] = 1;
    } else if (i == length - 1 && flowerbed[i - 1] == 0) {
      // 结束边界
      n--;
      flowerbed[i] = 1;
    } else if (flowerbed[i - 1] === 0 && flowerbed[i + 1] === 0) {
      // 中间
      n--;
      // mutation
      flowerbed[i] = 1;
    }
    if (n === 0) {
      break;
    }
  }
  return n <= 0;
};
// @leet end
