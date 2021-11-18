/*
 * @lc app=leetcode.cn id=318 lang=typescript
 *
 * [318] 最大单词长度乘积
 */

// @lc code=start
/**
 * 虽然过了,但是胜率只有 5%...
 * @param words
 * @returns
 */
function maxProduct2(words: string[]): number {
  const sorted = words.sort((a, b) => a.length - b.length);

  const getProduct = (words: string[], start: number, end: number) => {
    const a = words[start];
    const b = words[end];

    const aMap: Record<string, number> = {};
    for (let i = 0; i < a.length; i++) {
      if (!aMap[a.charAt(i)]) {
        aMap[a.charAt(i)] = 1;
      }
    }

    for (let i = 0; i < b.length; i++) {
      if (aMap[b.charAt(i)]) {
        return -1;
      }
    }

    return a.length * b.length;
  };

  let end = sorted.length - 1;
  let start = end - 1;
  let max = 0;
  const map: Record<string, number> = {};

  const search = (
    words: string[],
    start: number,
    end: number,
    map: Record<string, number>
  ) => {
    if (map[`${start}:${end}`]) {
      return;
    }
    if (start < end && start > -1) {
      const result = getProduct(words, start, end);
      map[`${start}:${end}`] = result;
      if (result > 0) {
        max = Math.max(result, max);
        return;
      }

      search(words, start - 1, end, map);
      search(words, start, end - 1, map);
    }
  };

  search(words, start, end, map);

  return max;
}

function maxProduct(words: string[]): number {
  const sorted = words;



  let max = 0;
  const masks = new Array(sorted.length).fill(0);
  const getMask = (word: string) => {
    let mark = 0; //new Array(26).fill(0);
    const length = word.length;
    for (let i = 0; i < length; i++) {
      const index = word[i].charCodeAt(0) - 'a'.charCodeAt(0);
      mark |= 1 << index;
      // 1<<index 将 1 左移 index 为
      // 1<<1 = 二进制 10,就是十进制的 2
      // 1<<2 = 二进制 100,就是十进制 4

      // | 操作符,只要位是 1 就取 1. 二进制 101 | 100 = 101; 二进制 110 | 000 = 110
      // 所以总结起来  mark |= 1 << index; 就是给每个 index 为变为 1,
    }
    return mark;
  };

  const length = sorted.length
  for (let start = 0; start < length; start++) {
    masks[start] = getMask(words[start]);
  }

  for(let i = 0;i<length;i++){
    for(let j = i+1;j<length;j++){
      if((masks[i]  & masks[j]) === 0){
        max  = Math.max(max,sorted[i].length * sorted[j].length)
      }
    }
  }

  return max
}

module.exports = maxProduct;
// @lc code=end
