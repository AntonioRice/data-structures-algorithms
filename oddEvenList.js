const LinkedList = require("./linkedLists");
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list.
 * The first node is considered odd, and the second node is even, and so on.
 * Note that the relative order inside both the even and odd groups should remain as it was in the input.
 * You must solve the problem in O(1) extra space complexity and O(n) time complexity.
 *
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function (head) {
  if (head == null) return head;
  // set odd and even node to every other, respectively
  let odd = head;
  let even = head.next;
  // need to keep track of even not because once we move on, it'll be lost. At then end, need to set the tail of odd to head of even (combine group)
  let evenHead = even;

  // perform loop until even.next is null
  while (even != null && even.next != null) {
    // setting next to everyother
    odd.next = odd.next.next;
    // moving the pointer to the next node
    odd = odd.next;

    // repeat for even nodes
    even.next = even.next.next;
    even = even.next;
  }

  // set the tail of odd to head of even (combine group)
  odd.next = evenHead;

  return head;
};

const list1 = new LinkedList();
//[1,2,3,4,5]
list1.append(1);
list1.append(2);
list1.append(3);
list1.append(4);
list1.append(5);

var result = oddEvenList(list1.head);
console.log(JSON.stringify(result)); //[1,3,5,2,4]

const list2 = new LinkedList();
list2.append(2);
list2.append(1);
list2.append(3);
list2.append(5);
list2.append(6);
list2.append(4);
list2.append(7);

var result = oddEvenList(list2.head);
console.log(JSON.stringify(result)); //[2,3,6,7,1,5,4]
