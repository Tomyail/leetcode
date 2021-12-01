/*
 * @lc app=leetcode.cn id=101 lang=typescript
 *
 * [101] 对称二叉树
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

function isSymmetric2(root: TreeNode | null): boolean {
  const dfs = (left, right) => {
    if (!left && !right) return true;
    if (!left && right) return false;
    if (!right && left) return false;
    if (left && right) {
      return (
        left.val === right.val &&
        dfs(left.left, right.right) &&
        dfs(left.right, right.left)
      );
    }
  };

  return dfs(root, root);
}

function isSymmetric(root: TreeNode | null): boolean {
  if (!root) return true;
  let l = root;
  let r = root;
  const queue = [];
  queue.push(l);
  queue.push(r);

  while (queue.length) {
    l = queue.shift();
    r = queue.shift();

    if (!l && !r) continue;
    if (!l && r) return false;
    if (l && !r) return false;
    if (l.val !== r.val) return false;
    //这四个 push 的顺序很妙
    queue.push(l.left);
    queue.push(r.right);
    queue.push(l.right);
    queue.push(r.left);
  }
  return true;
}
// @lc code=end
