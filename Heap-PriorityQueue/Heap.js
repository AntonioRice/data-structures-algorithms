/**
 * max-heap implementation
 */
class Heap {
  constructor() {
    this.heap = [];
  }

  // helper methods to get index of parent, left, and right nodes of i
  parent(i) {
    return Math.floor((i - 1) / 2);
  }
  leftChild(i) {
    return 2 * i + 1;
  }
  rightChild(i) {
    return 2 * i + 2;
  }
  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }
  insert(value) {
    this.heap.push(value);
    this.heapifyUp();
  }
  remove() {
    if (this.heap.length === 0) return;
    if (this.heap.length === 1) return this.heap.pop();

    const max = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown(0);

    return max;
  }
  heapifyUp() {
    let index = this.heap.length - 1;
    while (index > 0 && this.heap[index] > this.heap[this.parent(index)]) {
      this.swap(index, this.parent(index));
      index = this.parent(index);
    }
  }
  heapifyDown(index) {
    let maxIndex = index;
    const left = this.leftChild(index);
    const right = this.rightChild(index);
    const heapSize = this.heap.length;

    if (left < heapSize && this.heap[left] > this.heap[maxIndex]) {
      maxIndex = left;
    }

    if (right < heapSize && this.heap[right] > this.heap[maxIndex]) {
      maxIndex = right;
    }

    if (index !== maxIndex) {
      this.swap(index, maxIndex);
      this.heapifyDown(maxIndex);
    }
  }
}

module.exports = Heap;

// const heap = new Heap();
// heap.push(25);
// heap.push(5);
// heap.push(40);
// heap.push(70);
// heap.push(90);
// heap.push(44);

// console.log(heap.heap.join(","));

// const a = [];
// a.push(heap.poll());
// a.push(heap.poll());
// a.push(heap.poll());
// a.push(heap.poll());
// a.push(heap.poll());

// console.log("Top 5 items: ", a);
// console.log(heap.heap.join(","));
