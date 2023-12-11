/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeTwoLists = (list1, list2) => {
  const head = new ListNode(null);
  let curr = head;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      curr.next = list1;
      list1 = list1.next;
    } else {
      curr.next = list2;
      list2 = list2.next;
    }
    curr = curr.next;
  }

  if (list1 !== null) curr.next = list1;
  if (list2 !== null) curr.next = list2;

  return head.next;
};

// [1,2,4]
const list1 = new ListNode(1, new ListNode(2, new ListNode(4, null)));
// [1,3,4]
const list2 = new ListNode(1, new ListNode(3, new ListNode(4, null)));
// []
const list3 = new ListNode();
// [1,2,3]
const list4 = new ListNode(1, new ListNode(2, new ListNode(3, null)));

console.log(mergeTwoLists(list1, list2));
// console.log(mergeTwoLists(list3, list4));
