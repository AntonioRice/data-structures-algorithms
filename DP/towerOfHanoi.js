/**
 * Tower of Hanoi
 * Objective: Three rod puzzle (A, B, C). Starting at A, move pyramid stack of discs to rod C.
 * Only able to move one at a time. No disc can go on top of a smaller disc.
 * Big-O: O(2^n-1)
 * As n get larger, the number of calls increases
 */

const towerOfHanoi = (n, fromRod, toRod, usingRod) => {
  if (n === 1) {
    console.log(`Move disk ${n} from ${fromRod} to ${toRod}`);
    return;
  }
  towerOfHanoi(n - 1, fromRod, usingRod, toRod);
  console.log(`Move disk ${n} from ${fromRod} to ${toRod}`);
  towerOfHanoi(n - 1, usingRod, toRod, fromRod);
};

towerOfHanoi(2, "A", "C", "B");
