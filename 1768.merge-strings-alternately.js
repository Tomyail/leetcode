// @leet start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  let result = '';
  let w1Pointer = 0;
  let w2Pointer = 0;
  let w1Finished = false;
  let w2Finished = false;

  // 用这两个变量比判断length 应该能提前结束
  while (!w1Finished && !w2Finished) {
    const char1 = word1.charAt(w1Pointer);
    const char2 = word2.charAt(w2Pointer);

    if (char1) {
      result += char1;
      w1Pointer++;
    } else {
      w1Finished = true;
    }
    if (char2) {
      result += char2;
      w2Pointer++;
    } else {
      w2Finished = true;
    }
  }
  if (w1Finished) {
    result += word2.slice(w2Pointer);
  } else if (w2Finished) {
    result += word1.slice(w1Pointer);
  }
  return result;
};
// @leet end
