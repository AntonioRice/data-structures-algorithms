const LinkedList = require("./linkedLists");
/**
 * LC 876
 * Given the head of a singly linked list, return the middle node of the linked list.
 * If there are two middle nodes, return the second middle node.
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// Time: O(n), Space O(1)
var middleNode = function (head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
};

const root = new LinkedList();
root.append(1);
root.append(2);
root.append(3);
root.append(4);
root.append(5);
root.append(6);
console.log(middleNode(root.head)); // [3,4,5]
