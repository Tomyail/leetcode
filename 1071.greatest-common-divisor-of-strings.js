// @leet start
/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
  //这道题的理论基础比较重要, 首先需要理解最大公约数的概念
  //两个数的最大公约数是指两个数公共的约数中最大的那个
  // 2 和 4 的最大公约数是 2; 4 和 6 的最大公约数是 2; 4 和 8 的最大公约数是 4;6 和 8 的最大公约数是 2
  //
  // 假设存在公约字符串x, 那么 str1 = x * a, str2 = x * b (a,b 是正整数)
  // 存在 str1 + str2 = x * a + x * b = x * (a + b) === x * (b + a) === str2 + str1
  // 所以 str1 + str2 === str2 + str1 是存在的前提
  //
  // 另一个问题,假设一定存在公约字符,为什么两个字符串的最大公约数就是他们长度的最大公约数?
  // 下面是ai的解释...
  // 这个问题的答案基于字符串的性质和最大公约数的定义。
  //
  // 假设存在一个公约字符串x，那么字符串str1和str2可以表示为x的重复，即str1 = x * a，str2 = x * b（这里的a和b是x的重复次数，是正整数）。这意味着str1和str2的长度都是x的长度的整数倍。
  //
  // 根据最大公约数的定义，两个数的最大公约数是能够同时整除这两个数的最大的数。因此，如果x是str1和str2的公约字符串，那么x的长度就是str1和str2长度的最大公约数。这是因为x的长度能够同时整除str1和str2的长度，而且是所有能够同时整除str1和str2长度的数中最大的一个。
  //
  // 所以，如果存在公约字符串，那么两个字符串的最大公约数就是他们长度的最大公约数。

  const gcd = (a, b) => {
    if (b === 0) return a;
    return gcd(b, a % b);
  };

  if (str1 + str2 !== str2 + str1) return '';
  return str1.slice(0, gcd(str1.length, str2.length));
};

// @leet end
