const LinkedList = require("./linkedLists");
/**
 * LC 160
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let ptrA = headA;
  let ptrB = headB;
  let intersection = null;
  let prevIntersection = null;

  if (ptrA === ptrB) return ptr1;

  while (ptrA !== ptrB) {
    ptrA = ptrA.next === null ? headB : ptrA.next;
    ptrB = ptrB.next === null ? headA : ptrB.next;

    // Check for intersection
    if (ptrA === ptrB && intersection === null) {
      intersection = ptrA;
    } else if (ptrA === ptrB && intersection !== null) {
      // Multiple intersections: store in prevIntersection for later
      prevIntersection = intersection;
      intersection = ptrA;
    }
  }

  // Handle potential multiple intersections at the end
  if (ptrA === ptrB && prevIntersection !== null) {
    prevIntersection.next = null; // Disconnect last intersection
  }

  return intersection; // Head of linked list containing all intersections
};

const root1 = createRoot([4, 1, 8, 4, 5]);
const root2 = createRoot([5, 6, 1, 8, 4, 5]);

console.log(getIntersectionNode(root1.head, root2.head)); // 8

function createRoot(arr) {
  const root = new LinkedList();
  for (const node of arr) {
    root.append(node);
  }

  return root;
}
