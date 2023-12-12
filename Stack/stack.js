const LinkedList = require("./test-ds");
// LAST IN, FIRST OUT
// insert at start - push()
// remove from start - pop()

class LinkedListStack {
  constructor() {
    this.list = new LinkedList();
  }
  isEmpty() {
    return this.list.isEmpty();
  }
  getSize() {
    return this.list.getSize();
  }
  push(value) {
    this.list.prepend(value);
  }
  pop() {
    return this.list.removeFromFront();
  }
  peak() {
    return this.list.head.value;
  }
  print() {
    this.list.print();
  }
}

const stack = new LinkedListStack();
console.log(stack.isEmpty());
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.print();
console.log(stack.getSize());
console.log(stack.pop());
stack.print();
console.log(stack.peak());

// STACK
/* Sequential data structure. Last in, first out (LIFO). Abstract data type, defined by behavior. So its a actually a list. 
   Useful for tracking back your last steps (browser history, undo operation when typing, expression conversion, javascript runtime call stack)
   push() and pop() are main operations
*/

// class Stack {
//   constructor() {
//     this.items = []; //array
//   }
//   push(element) {
//     return this.items.push(element);
//   }
//   pop() {
//     return this.items.pop();
//   }
//   peek() {
//     return this.items[this.items.length - 1];
//   }
//   isEmpty() {
//     return this.items.length === 0;
//   }
//   size() {
//     return this.items.length;
//   }
//   print() {
//     return console.log(this.items.toString());
//   }
// }

// const stack = new Stack();
// console.log(stack.isEmpty());
// stack.push(10);
// stack.push(20);
// stack.push(30);
// console.log(stack);
// console.log(stack.pop(30));
// console.log(stack.size());
// console.log(stack.peek());
// stack.print();

/*
Time Complexity
Insertion and removal O(1)
*/
