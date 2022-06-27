/*
 * @lc app=leetcode.cn id=98 lang=typescript
 *
 * [98] 验证二叉搜索树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isValidBST(root: TreeNode | null): boolean {
  // 利用中序遍历的次序,每次记下的值应该都比之前的大,否则返回 false
  // 中序遍历的次序是深度遍历到最左边,然后左中右 上去 左中右的遍历

  let min = Number.MIN_SAFE_INTEGER;
  // 深度优先的套路似乎都是利用堆栈来完成的.
  const stack = [];
  while (stack.length || root) {
    //先深度往左下使劲的搜,同时把搜过的放到堆栈里面方便后面拿回来
    // console.log('forward begin');
    while (root) {
      // console.log(root.val);
      stack.push(root);
      root = root.left;
    }
    // console.log('forward end\n====');
    //此时已经到了最左边,利用 stack 取出最左边的那个
    root = stack.pop(); //此时 root 一定存在

    if (root.val <= min) {
      // console.log(`break by ${root.val}`);
      return false;
    }
    min = root.val;

    // console.log(`current:${min}\n`);
    //这一步是灵魂, 有效的和最外面的 stack.length while 进行了互动,自己感受
    root = root.right; //此时 root 不一定存在
    // console.log(`redirect:${root?.val}\n=====`);
  }
  return true;
}
// @lc code=end
