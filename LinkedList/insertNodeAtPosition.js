// Hackerrack

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  append(val) {
    const node = new Node(val);
    if (this.size == 0) {
      this.head = node;
      this.size++;
    } else {
      let curr = this.head;
      while (curr.next) {
        curr = curr.next;
      }
      curr.next = node;
      this.size++;
    }
  }
  // Time: O(n), Space: O(1)
  reverse() {
    if (this.size <= 1) {
      return this.head;
    }

    let curr = this.head;
    let prev = null;

    while (curr) {
      [curr.next, prev, curr] = [prev, curr, curr.next];
    }

    this.head = prev;

    return this.head;
  }
  // Time: O(n), Space: O(n) because of the call stack
  reverse2() {
    function Recursive(head) {
      if (head == null || head.next == null) return head;

      const p = Recursive(head.next);
      head.next.next = head;
      head.next = null;

      return p;
    }

    this.head = Recursive(this.head);

    return this.head;
  }
}

// const insertNodeAtPosition = () => {};

const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);
list.reverse2();

console.log(JSON.stringify(list));
