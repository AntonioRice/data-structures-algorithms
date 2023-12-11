const LinkedList = require("./linkedLists");
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * In a linked list of size n, where n is even, the ith node (0-indexed) of the linked list is known as the twin of the (n-1-i)th node, if 0 <= i <= (n / 2) - 1.
 * For example, if n = 4, then node 0 is the twin of node 3, and node 1 is the twin of node 2. These are the only nodes with twins for n = 4.
 * The twin sum is defined as the sum of a node and its twin.
 * Given the head of a linked list with even length, return the maximum twin sum of the linked list.
 * @param {ListNode} head
 * @return {number}
 */

// // using a stack - O(n) space
// var pairSum = function (head) {
//   const stack = [];
//   let maxSum = -Infinity;
//   let slow = head;

//   while (slow != null) {
//     stack.push(slow.value);
//     slow = slow.next;
//   }

//   for (let i = 0; i < stack.length; i++) {
//     maxSum = Math.max(maxSum, stack[i] + stack.pop());
//   }

//   return maxSum;
// };

// without stack - O(1) space
var pairSum = function (head) {
  let maxSum = -Infinity;
  let slow = head;
  let fast = head.next;

  while (fast != null && fast.next != null) {
    fast = fast.next.next;
    slow = slow.next;
  }
  fast = head;

  let prev = null;
  let curr = slow;

  while (curr != null) {
    let next = curr.next;
    curr.next = prev;
    [prev, curr] = [curr, next];
  }
  slow = prev;

  while (slow != null && fast != null) {
    maxSum = Math.max(maxSum, fast.value + slow.value);
    slow = slow.next;
    fast = fast.next;
  }

  return maxSum;
};

const list1 = new LinkedList();
// [5,4,2,1]
list1.append(5);
list1.append(4);
list1.append(2);
list1.append(1);

var result = pairSum(list1.head);
console.log(result); // 6

const list2 = new LinkedList();
// [4,2,2,3]
list2.append(4);
list2.append(2);
list2.append(2);
list2.append(3);

var result = pairSum(list2.head);
console.log(result); // 7

const list3 = new LinkedList();
// [5,4,2,1,10,20]
list3.append(5);
list3.append(4);
list3.append(2);
list3.append(1);
list3.append(10);
list3.append(20);

var result = pairSum(list3.head);
console.log(result); // 25
