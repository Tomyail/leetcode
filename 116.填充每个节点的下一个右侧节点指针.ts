/*
 * @lc app=leetcode.cn id=116 lang=typescript
 *
 * [116] 填充每个节点的下一个右侧节点指针
 */

// @lc code=start
/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     left: Node | null
 *     right: Node | null
 *     next: Node | null
 *     constructor(val?: number, left?: Node, right?: Node, next?: Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function connect(root: Node | null): Node | null {
  if (root == null) return root;

  const queue = [root];

  while (queue.length) {
    let size = queue.length
    for (let i = 0; i < size; i++) {
      const head = queue.shift();
      if (i < size-1) {
        head.next = queue[0];
      }
      if (head.left) {
        queue.push(head.left);
      }
      if (head.right) {
        queue.push(head.right);
      }
    }
  }
  return root;
}
// @lc code=end
