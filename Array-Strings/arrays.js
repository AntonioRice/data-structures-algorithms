/* 
Time Complexity
Inserting or removing from END - O(1)
Inserting or removing from BEGINNINNG - O(n) -> because the index has to be reset for all elements.
Accessing - O(1)
Search - O(n)

Dynamic arrays expand as you add more items: insertion is 0(1) but can be 0(n). If not enogh storage is allocated, to add new item JS doubles the sixe of the array and copies each item over to the new one
Static arrays are instantiated with a set number of spaces (size)
 */
// Array Implementation

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }
  push(item) {
    this.data[this.length++] = item;
    return this.length;
  }
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }
  delete(index) {
    const item = this.data[index];
    //need to shift index of items
    this.shiftItems(index);
  }
  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const newArray = new MyArray();
newArray.push("!");
newArray.push("to");
newArray.push("hi");
newArray.delete(1);
newArray.push("hdsd");
newArray.push("i");
newArray.push("dhgrh");
console.log(newArray);

// const arr = [1, 2, 3, 4, "test"];
// arr.push(5); //O(1)
// arr.pop(); // O(1)
// arr.unshift(0); // O(n)
// arr.shift(); // O(n)

// // shift - unshift - concat - slice - splice -> O(n)
// // forEach - map - filter - reduce -> O(n)

// // console.log(arr);

// // for (const item of arr) {
// //   console.log(item);
// // }

// const strings = ["a", "b", "c", "d"]; // 4*4 = 16 bytes of storage in a 32bit system
