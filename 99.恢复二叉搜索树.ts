/*
 * @lc app=leetcode.cn id=99 lang=typescript
 *
 * [99] 恢复二叉搜索树
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

/**
 Do not return anything, modify root in-place instead.
 */
function recoverTree(root: TreeNode | null): void {
  const stack = [];

  let last;
  let x, y;
  while (stack.length || root) {
    while (root) {
      stack.push(root);
      root = root.left;
    }

    root = stack.pop();

    if (last && root.val < last.val) {
      //我不李姐
      y = root;
      if (!x) {
        x = last;
      } else {
        break;
      }
    }
    last = root;
    root = root.right;
  }

  // console.log(x.val,y.val)
  let temp = y.val;
  y.val = x.val;
  x.val = temp;
}
// @lc code=end
