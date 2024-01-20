/**
 * You have a set which contains all positive integers [1, 2, 3, 4, 5, ...].
 * Implement the SmallestInfiniteSet class:
 * SmallestInfiniteSet() Initializes the SmallestInfiniteSet object to contain all positive integers.
 * int popSmallest() Removes and returns the smallest integer contained in the infinite set.
 * void addBack(int num) Adds a positive integer num back into the infinite set, if it is not already in the infinite set.
 *
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */

class SmallestInfiniteSet {
  constructor() {
    this.present = new Array(1001).fill(true);
  }

  popSmallest() {
    for (let i = 1; i <= 1000; i++) {
      if (this.present[i]) {
        this.present[i] = false;
        return i;
      }
    }
  }
  addBack(num) {
    this.present[num] = true;
  }
}

const x = new SmallestInfiniteSet();

console.log(x.present);
