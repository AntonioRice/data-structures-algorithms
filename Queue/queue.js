const LinkedList = require("./linkedLists.js");
// Queue
/* FIFO, first in first out. Abstract data type, defined by its behavior.
   Support two main operation: 
   Enqueue - adds an element to the end/tail of the collection
   Dequeue - removes an element from the from/head of the collection

   Use cases: Printers,cpu task management, Javascript callback queue
 */
// linked list queue

class Queue {
  constructor() {
    this.list = new LinkedList();
  }

  enqueue(value) {
    this.list.append(value);
  }
  deqeue() {
    return this.list.removeFromFront();
  }
  peak() {
    if (this.list.getSize() > 0) {
      return this.list.head.value;
    }
    return this.list;
  }
  isEmpty() {
    return this.list.isEmpty();
  }
  getSize() {
    return this.list.getSize();
  }
  print() {
    this.list.print();
  }
}

// const queue = new LinkedListQueue();
// queue.isEmpty();
// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);
// queue.enqueue(4);
// queue.enqueue(5);
// queue.deqeue();
// console.log(queue.peak());
// console.log(queue.getSize());
// queue.print();

module.exports = Queue;

// class Queue {
//   constructor() {
//     this.items = [];
//   }
//   enqueue(element) {
//     this.items.push(element); //insert items at the end of array
//   }
//   dequeue() {
//     return this.items.shift(); //removes and returns elemennt from beginning of array LINEAR TIME O(n)
//   }
//   isEmpty() {
//     return this.items.length === 0;
//   }
//   peek() {
//     if (!this.items.isEmpty()) {
//       return this.items[0];
//     }
//     return null;
//   }
//   size() {
//     return this.items.length;
//   }
//   print() {
//     console.log(this.items.toString());
//   }
// }

// const queue = new Queue();
// console.log(queue);
// console.log(queue.isEmpty());
// queue.enqueue(10);
// queue.enqueue(12);
// queue.enqueue(13);
// console.log(queue);
// console.log(queue.size());
// console.log(queue.dequeue(10));
// queue.print();

// // OPTIMIZED QUEUE
// class Queue {
//   constructor() {
//     this.items = {}; //object
//     // need to keep track of the front and tail manually
//     this.rear = 0;
//     this.front = 0;
//   }
//   enqueue(element) {
//     //add element to the rear of queue
//     this.items[this.rear] = element;
//     this.rear++;
//   }
//   dequeue() {
//     // removes and return item from the front of queue
//     const item = this.items[this.front];
//     delete this.items[this.front];
//     this.front++;
//     return item;
//   }
//   isEmpty() {
//     return this.rear - this.front === 0;
//   }
//   peek() {
//     return this.items[this.front];
//   }
//   size() {
//     return this.rear - this.front;
//   }
//   print() {
//     console.log(this.items);
//   }
// }

// const queue = new Queue();
// console.log(queue.isEmpty());
// queue.enqueue(10);
// queue.enqueue(20);
// queue.enqueue(30);
// console.log(queue.size());
// console.log(queue.peek());
// console.log(queue.dequeue());
// queue.print();

// CIRCULAR QUEUE
/* The size of the queue is fixed and a single block of memeory is used. Referred to as circular buffer/ ring buffer queue. FIFO.
   When the dequeue operation is used, a circular queue will utilize the empty memory block.

   Support the two main opertions: Enqueue (insert as the end) and Dequeue (remove from beginning)

   Use cases: Clock, traffic lights, streaming data. Whenever you need to managed a fixed sized queue
 */

// class CircularQueue {
//   constructor(capacity) {
//     this.items = new Array(capacity);
//     this.capacity = capacity;
//     this.currentLength = 0;
//     this.rear = -1; //not pointing to any position in the queue. O is a position so -1 is used
//     this.front = -1;
//   }
//   isFull() {
//     return this.currentLength === this.capacity;
//   }
//   isEmpty() {
//     return this.currentLength === 0;
//   }
//   enqueue(element) {
//     if (!this.isFull()) {
//       this.rear = (this.rear + 1) % this.capacity;
//       this.items[this.rear] = element;
//       this.currentLength++;

//       if (this.front === -1) {
//         this.front = this.rear;
//       }
//     }
//   }
//   dequeue() {
//     if (this.isEmpty()) {
//       return null;
//     }
//     const item = this.items[this.front];
//     this.items[this.front] = null;
//     this.front = (this.front + 1) % this.capacity;
//     this.currentLength--;

//     if (this.isEmpty()) {
//       this.rear = -1;
//       this.front = -1;
//     }
//     return item;
//   }
//   peek() {
//     if (!this.isEmpty()) {
//       return this.items[this.front];
//     }
//   }
//   print() {
//     if (this.isEmpty()) {
//       console.log("Empty Circular Queue");
//     } else {
//       let i;
//       let str = "";
//       for (i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
//         str += this.items[i] + " ";
//       }
//       str += this.items[i];
//       console.log(str);
//     }
//   }
// }

// const queue = new CircularQueue(5);
// console.log(queue.capacity);
// console.log(queue.currentLength);
// queue.enqueue(10);
// queue.enqueue(20);
// queue.enqueue(30);
// queue.enqueue(40);
// queue.enqueue(50);
// console.log(queue.currentLength);
// console.log(queue.isFull());
// console.log(queue.dequeue());
// console.log(queue.currentLength);
// console.log(queue.peek());

// queue.enqueue(60);
// queue.print();
