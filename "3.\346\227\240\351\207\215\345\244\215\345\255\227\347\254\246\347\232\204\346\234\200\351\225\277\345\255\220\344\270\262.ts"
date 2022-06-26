/*
 * @lc app=leetcode.cn id=3 lang=typescript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
// 暴力枚举
function lengthOfLongestSubstring1(s: string): number {
  if (!s.length) return 0;

  const isAllDiff = (str: string) => {
    const sotred = str.split('').sort();

    for (let i = 0; i < sotred.length - 1; i++) {
      if (sotred[i] === sotred[i + 1]) return false;
    }

    return true;
  };
  let max = 1;
  for (let i = 0; i < s.length; i++) {
    let current = 1;

    for (let j = max; j < s.length - i; j++) {
      if (isAllDiff(s.slice(i, i + j + 1))) {
        current = j + 1;
      } else {
        break;
      }
    }
    if (current > max) {
      max = current;
    }
  }

  return max;
}

// 滑动窗口??
function lengthOfLongestSubstring(s: string): number {

  let result = 0;
  let left = 0;
  let right = -1;

  const freq: any = {};
  while (left < s.length) {
    if (right + 1 < s.length && !freq[s[right + 1]]) {
      freq[s[right + 1]] = 1;
      right++;
    } else {
      freq[s[left]]--;
      left++;
    }
    result = Math.max(result, right - left + 1);
  }
  return result
}

// @lc code=end
