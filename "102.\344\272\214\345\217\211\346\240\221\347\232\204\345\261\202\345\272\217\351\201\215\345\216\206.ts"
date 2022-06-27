/*
 * @lc app=leetcode.cn id=102 lang=typescript
 *
 * [102] 二叉树的层序遍历
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

function levelOrder(root: TreeNode | null): number[][] {
  const result: number[][] = [];

  if (!root) {
    return result;
  }

  const queue = [root];

  while (queue.length) {
    let size = queue.length;
    const data: number[] = [];
    while (size) {
      const head = queue.shift();

      data.push(head.val)
      if (head.left) {
        queue.push(head.left);
      }
      if (head.right) {
        queue.push(head.right);
      }
      size--;
    }
    result.push(data);
  }
  return result
}
// @lc code=end
