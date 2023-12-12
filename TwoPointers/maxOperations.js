/**
 * You are given an integer array nums and an integer k.
 * In one operation, you can pick two numbers from the array whose sum equals k and remove them from the array.
 * Return the maximum number of operations you can perform on the array.
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, target) {
  const freqMap = new Map();
  let count = 0;

  for (const num of nums) {
    let diff = target - num;
    if (freqMap.has(diff)) {
      const freq = freqMap.get(diff);
      if (freq == 1) {
        freqMap.delete(diff);
        freqMap.delete(num);
      } else {
        freqMap.set(diff, freqMap.get(diff) - 1);
      }
      count++;
    } else {
      freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }
  }

  return count;
};

// console.log(maxOperations([1, 2, 3, 4], 5)); // 2
// console.log(maxOperations([3, 1, 3, 4, 3], 6)); // 1
// console.log(maxOperations([3, 1, 3, 4, 3, 18], 10)); // 0
console.log(
  maxOperations([2, 5, 4, 4, 1, 3, 4, 4, 1, 4, 4, 1, 2, 1, 2, 2, 3, 2, 4, 2], 3)
); // 4
