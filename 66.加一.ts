/*
 * @lc app=leetcode.cn id=66 lang=typescript
 *
 * [66] 加一
 */

// @lc code=start
function plusOne(digits: number[]): number[] {
  if (digits.length === 0) return [1];
  if (digits[digits.length - 1] < 9) {
    digits[digits.length - 1] += 1;
    return digits;
  } else {
    digits.length -= 1;
    const result = plusOne(digits);
    result.push(0);
    return result;
  }
}

module.exports = plusOne;
// @lc code=end
