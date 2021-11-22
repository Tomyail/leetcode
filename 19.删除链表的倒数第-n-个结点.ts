/*
 * @lc app=leetcode.cn id=19 lang=typescript
 *
 * [19] 删除链表的倒数第 N 个结点
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

function removeNthFromEnd2(head: ListNode | null, n: number): ListNode | null {
  let fast = head;
  for (let i = 0; i < n; i++) {
    fast = fast.next;
    if (!fast) break;
  }

  if (!fast) {
    head = head.next;
    return head;
  }

  let slow = head;
  while (fast) {
    fast = fast.next;

    if (!fast) {
      slow.next = slow.next.next;
      break;
    }
    slow = slow.next;
  }

  return head;
}

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let fast = head;
  let dummy = new ListNode(0, head);
  let slow = dummy;
  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }

  while (fast) {
    fast = fast.next;
    slow = slow.next;
  }

  slow.next = slow.next.next;

  let ans = dummy.next;
  dummy = null;
  return ans;
}

module.exports = removeNthFromEnd;
// @lc code=end
