/*
 * @lc app=leetcode.cn id=141 lang=typescript
 *
 * [141] 环形链表
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

function hasCycle(head: ListNode | null): boolean {
  //题目没说不能修改原链表，这个算专空子吗。。。
  const flag = new ListNode();
  let pre;
  while (head) {
    pre = head;
    head = head.next;
    pre.next = flag;

    if (head === flag) {
      return true;
    }
  }
  return false;
}

function hasCycle2(head: ListNode | null): boolean {
  if (!head || !head.next) return false;
  let slow = head;
  let fast = head.next;
  while (slow != fast) {
    if (!fast || !fast.next) {
      return false;
    }
    slow = slow.next;
    fast = fast.next.next;
  }

  return true;
}

// @lc code=end
