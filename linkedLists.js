// LLINKED LIST
/* Linear data structure that includes a series of connected node. node => data value, and a pointer to the next node
   can insert and remove elements without reallocation/restructuring entire structor. 
   Drawback: unable to random access of elements, accessing an element O(n)

   Three main operations: 
   Insertion - add elemnt at beginning and/or at given index
   Deletion - remove element given index or value
   Search - to find element given value

   Usage: Image view (slide show), stack and queues are implementations of linked lists
 */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  isEmpty() {
    return this.size === 0;
  }
  getSize() {
    return this.size;
  }
  prepend(value) {
    //O(1)
    //adds new node at the front of list
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }
  append(value) {
    //O(n) but can be improved with a tail pointer
    //adds new node at the end of list
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let prev = this.head;
      while (prev.next) {
        prev = prev.next;
      }
      prev.next = node;
    }
    this.size++;
  }
  insert(value, index) {
    if (index < 0 || index > this.size) {
      return;
    } else if (index === 0) {
      this.prepend(value);
    } else {
      const node = new Node(value);
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      node.next = prev.next;
      prev.next = node;
      this.size++;
    }
  }
  removeFrom(index) {
    if (index < 0 || index >= this.size) {
      return;
    }
    let removedNode;
    if (index === 0) {
      //constant time complexity
      removedNode = this.head;
      this.head = this.head.next;
    } else {
      //linear time complexity
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      removedNode = prev.next;
      prev.next = removedNode.next;
    }
    this.size--;
    return removedNode.value;
  }
  removeValue(value) {
    if (this.isEmpty()) {
      return;
    }
    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
      return value;
    } else {
      let prev = this.head;
      while (prev.next && prev.next.value != value) {
        prev = prev.next;
      }
      if (prev.next) {
        let removedNode = prev.next;
        prev.next = removedNode.next;
        this.size--;
        return value;
      } else {
        return null;
      }
    }
  }
  search(value) {
    if (this.isEmpty(0)) {
      return -1;
    }
    let i = 0;
    let curr = this.head;
    while (curr) {
      if (curr.value === value) {
        return i;
      } else {
        curr = curr.next;
        i++;
      }
    }
    return -1;
  }
  reverse() {
    let prev = null;
    let curr = this.head;

    while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev;
  }
  print() {
    if (this.isEmpty()) {
      console.log("List is empty");
    } else {
      let curr = this.head;
      let listValues = "";
      while (curr) {
        listValues += `${curr.value} `;
        curr = curr.next;
      }
      console.log(listValues);
    }
  }
}

// const list = new LinkedList();
// list.print();
// list.append(10);
// list.append(20);
// list.append(30);
// list.insert(4, 1);
// // console.log(list.removeFrom(3));
// // console.log(list.removeValue(4));
// list.reverse();
// list.print();
// // console.log(list.search(19));

// class Node {
//   //with tail
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class LinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.size = 0;
//   }
//   isEmpty() {
//     return this.size === 0;
//   }
//   getSize() {
//     return this.size;
//   }
//   prepend(value) {
//     //0(1)
//     const node = new Node(value);
//     if (this.isEmpty()) {
//       this.head = node;
//       this.tail = node;
//     } else {
//       node.next = this.head;
//       this.head = node;
//     }
//     this.size++;
//   }
//   append(value) {
//     //0(1)
//     const node = new Node(value);
//     if (this.isEmpty()) {
//       this.head = node;
//       this.tail = node;
//     } else {
//       this.tail.next = node;
//       this.tail = node;
//     }
//     this.size++;
//   }
//   removeFromFront() {
//     //0(1)
//     if (this.isEmpty()) {
//       return null;
//     }
//     const value = this.head.value;
//     this.head = this.head.next;
//     this.size--;
//     return value;
//   }
//   removeFromEnd() {
//     //0(n)
//     if (this.isEmpty()) {
//       return null;
//     }
//     const value = this.tail.value;
//     if (this.size === 1) {
//       this.head = null;
//       this.tail = null;
//     } else {
//       let prev = this.head;
//       while (prev.next !== this.tail) {
//         prev = prev.next;
//       }
//       prev.next = null;
//       this.tail = prev;
//     }
//     this.size--;
//     return value;
//   }
//   print() {
//     if (this.isEmpty()) {
//       console.log("List is empty");
//     } else {
//       let curr = this.head;
//       let listValues = "";
//       while (curr) {
//         listValues += `${curr.value} `;
//         curr = curr.next;
//       }
//       console.log(listValues);
//     }
//   }
// }

module.exports = LinkedList;

// const list = new LinkedList();
// list.print();
// list.append(10);
// list.append(20);
// list.append(30);
// list.prepend(1);
// console.log(list.removeFromEnd());
// console.log(list.removeFromFront());
// list.print();
