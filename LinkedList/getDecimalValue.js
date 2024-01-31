const LinkedList = require("./linkedLists");
/**
 * LC 1290
 * Given head which is a reference node to a singly-linked list. The value of each node in the linked list is either 0 or 1.
 * The linked list holds the binary representation of a number.
 * Return the decimal value of the number in the linked list.
 * The most significant bit is at the head of the linked list.
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @return {number}
 */
// Time: O(n + m), Space: O(n)
var getDecimalValue = function (head) {
  if (!head) return head;
  let binary = ""; // O(n) space
  let curr = head;

  //O(n) time
  while (curr) {
    binary += curr.value;
    curr = curr.next;
  }

  return binaryToDecimal(binary); //O(m) time

  function binaryToDecimal(binary) {
    let decimal = 0;
    let power = 0;

    for (let i = binary.length - 1; i >= 0; i--) {
      let digit = parseInt(binary[i]);
      decimal += digit * Math.pow(2, power);
      power++;
    }

    return decimal;
  }
};

// Time: O(n), Space: O(1)
function getDecimalValue(head) {
  let cur = head;
  let dec = 0;
  while (cur) {
    // Bit manipulation (need to learn formulas)
    dec += cur.value;
    dec *= 2;
    cur = cur.next;
  }

  return dec / 2;
}

const root = new LinkedList();
root.append(1);
root.append(0);
root.append(1);
console.log(getDecimalValue(root.head));
