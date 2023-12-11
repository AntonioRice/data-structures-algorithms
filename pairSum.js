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
var pairSum = function (head) {};

const list1 = new LinkedList();
//[1,2,3,4,5]
list1.append(1);
list1.append(2);
list1.append(3);
list1.append(4);
list1.append(5);

var result = pairSum(list1.head);
console.log(JSON.stringify(result)); //[1,3,5,2,4]
