const LinkedList = require("./linkedLists");
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * You are given the head of a linked list. Delete the middle node, and return the head of the modified linked list.
 * The middle node of a linked list of size n is the ⌊n / 2⌋th node from the start using 0-based indexing, where ⌊x⌋ denotes the largest integer less than or equal to x.
 * For n = 1, 2, 3, 4, and 5, the middle nodes are 0, 1, 1, 2, and 2, respectively.
 *
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteMiddle = function (head) {
  if (head == null) {
    return head;
  }

  let fast = head;
  let slow = head;
  let prev = null;

  while (fast != null && fast.next != null) {
    fast = fast.next.next;
    prev = slow;
    slow = slow.next;
  }

  if (!prev) return null;
  prev.next = slow.next;

  return head;
};

const list1 = new LinkedList();
list1.append(1);
list1.append(3);
list1.append(4);
list1.append(7);
list1.append(2);
list1.append(6);
console.log(deleteMiddle(JSON.stringify(list1))); //[1,3,4,1,2,6]

const list2 = new LinkedList();
list2.append(1);
list2.append(2);
list2.append(3);
list2.append(4);
console.log(JSON.stringify(list2)); //[1,2,4]

const list3 = new LinkedList();
list3.append(2);
list3.append(1);
console.log(deleteMiddle(JSON.stringify(list3))); //[2]
