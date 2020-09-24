/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  if (!head || !head.next) {
    return true;
  }

  let mid = head;
  let pre = head;
  let reversed = null;
  while (head && head.next) {
    mid = mid.next;
    head = head.next.next;
    // reversed
    pre.next = reversed;
    reversed = pre;
    pre = mid;
  }
  // 奇数情况 mid 往后走一位
  if (head) mid = mid.next;
  while (mid) {
    if (reversed.val !== mid.val) return false;
    reversed = reversed.next;
    mid = mid.next;
  }
  return true;
};
