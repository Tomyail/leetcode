/*
 * @lc app=leetcode.cn id=94 lang=typescript
 *
 * [94] 二叉树的中序遍历
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

function inorderTraversal2(root: TreeNode): number[] {
  const result: number[] = [];
  const inc = (root: TreeNode) => {
    if (root) {
      inc(root.left);
      result.push(root.val);
      inc(root.right);
    }
  };
  inc(root);
  return result;
}

function inorderTraversal(root: TreeNode): number[] {

  const stack:TreeNode[] = [];
  const result = [];
  while(root || stack.length){
    while(root){
      stack.push(root)
      root = root.left;
    }
    root = stack.pop()
    result.push(root.val)
    root = root.right
  }

  return result;
}
module.exports = inorderTraversal;
