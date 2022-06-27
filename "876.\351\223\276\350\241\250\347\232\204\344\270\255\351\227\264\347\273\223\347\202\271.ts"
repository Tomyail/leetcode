/*
 * @lc app=leetcode.cn id=876 lang=typescript
 *
 * [876] 链表的中间结点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function middleNode(head: ListNode | null): ListNode | null {
  let slow = head;
  let fast = head;
  let n = 1;
  while (slow) {
    fast = slow;
    for (let i = 0; i < n; i++) {
      fast = fast.next;
      if (!fast) break;
    }

    if (!fast) break;
    n++;
    slow = slow.next;
  }
  return slow;
}
// @lc code=end
