/*
 * @lc app=leetcode.cn id=77 lang=typescript
 *
 * [77] 组合
 */

// @lc code=start
function combine(n: number, k: number): number[][] {
  //  思路: 深度遍历(3), 遍历后的值符合条件放入 ans(2:结束),同时需要提前预判不可能的情况(1:防止堆栈溢出)
  const ans: any[] = [];
  const dfs = (cur: number, n: number, k: number, temp: any[]) => {
    // console.log('temp', temp, cur);
    //1
    // 剪枝：temp 长度加上区间 [cur, n] 的长度小于 k，不可能构造出长度为 k 的 temp
    if (temp.length + (n - cur + 1) < k) {
      // console.log('剪枝 return ', temp.length, cur, n, k);
      return;
    }
    //2
    // 记录合法的答案
    if (temp.length == k) {
      ans.push(temp);
      // console.log('记录 return');
      return;
    }
    //3
    // 考虑选择当前位置
    dfs(cur + 1, n, k, [...temp, cur]);
    // 考虑不选择当前位置
    //试着注释掉这一行,那就是一次单纯的深度遍历 (1=>1,2=>1,2,3)
    dfs(cur + 1, n, k, temp);
  };
  dfs(1, n, k, []);
  return ans;
}

module.exports = combine;
// @lc code=end
