class Heap {
  constructor() {
    this.data = [];
  }

  // helper methods to get index of parent, left, and right nodes of i
  getParentIndex(i) {
    return Math.floor((i - 1) / 2);
  }
  getLeftChildIndex(i) {
    return 2 * i + 1;
  }
  getRightChildIndex(i) {
    return 2 * i + 2;
  }
  swap(i1, i2) {
    [this.data[i1], this.data[i2]] = [this.data[i2], this.data[i1]];
  }
  // add to end of element
  push(key) {
    this.data.push(key);
    this.heapifyUp();
  }
  //biggest element from MaxHeap
  poll() {
    const maxVal = this.data[0];
    this.data[0] = this.data[this.data.length - 1];
    this.data.length--;
    this.heapifyDown(); //start from the top, and go to the bottom because we took an element from the top and moved it to the end

    return maxVal;
  }
  heapifyUp() {
    let currentIndex = this.data.length - 1;

    while (this.data[currentIndex] > this.data[this.getParentIndex(currentIndex)]) {
      this.swap(currentIndex, this.getParentIndex(currentIndex));
      currentIndex = this.getParentIndex(currentIndex);
    }
  }
  heapifyDown() {
    let currentIndex = 0; //start from the top

    while (this.data[this.getLeftChildIndex(currentIndex)]) {
      let biggestChildIndex = this.getLeftChildIndex(currentIndex);
      if (
        this.data[this.getRightChildIndex(currentIndex)] &&
        this.data[this.getRightChildIndex(currentIndex)] > this.data[this.getLeftChildIndex(currentIndex)]
      ) {
        biggestChildIndex = this.getRightChildIndex(currentIndex);
      }

      if (this.data[currentIndex] < this.data[biggestChildIndex]) {
        this.swap(currentIndex, biggestChildIndex);
        currentIndex = biggestChildIndex;
      } else {
        return;
      }
    }
  }
}

const heap = new Heap();
heap.push(25);
heap.push(5);
heap.push(40);
heap.push(70);
heap.push(90);
heap.push(44);

console.log(heap.data.join(","));

const a = [];
a.push(heap.poll());
a.push(heap.poll());
a.push(heap.poll());
a.push(heap.poll());
a.push(heap.poll());

console.log("Top 5 items: ", a);
console.log(heap.data.join(","));
