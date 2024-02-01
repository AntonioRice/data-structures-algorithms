const LinkedList = require("./linkedLists");
/**
 * LC 234
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  // find middle
  if (!head || !head.next) return true;
  let fast = head;
  let slow = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // fast is at the last node, slow is at the middle node

  // reverse nodes from middle node (slow) to end
  let prev = null;
  let curr = slow;
  while (curr) {
    let next = curr.next;
    [curr.next, prev, curr] = [prev, curr, next];
  }

  // Head is at beginning pointed forward ->
  // Prev is at the end pointed backwards <-
  let ptr1 = head;
  let ptr2 = prev;

  // check for val equality until null
  while (ptr1 && ptr2) {
    if (ptr1.value !== ptr2.value) return false;
    ptr1 = ptr1.next;
    ptr2 = ptr2.next;
  }

  return true;
};

const root1 = createRoot([1, 2, 2, 1]);
const root2 = createRoot([1, 2]);
const root3 = createRoot([1]);

console.log(isPalindrome(root1.head)); // true
console.log(isPalindrome(root2.head)); // false
console.log(isPalindrome(root3.head)); // false

function createRoot(arr) {
  const root = new LinkedList();
  for (const node of arr) {
    root.append(node);
  }

  return root;
}
