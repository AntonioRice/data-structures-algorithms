/**
 * Given a binary array nums and an integer k,
 * return the maximum number of consecutive 1's in the array if you can flip at most k 0's.
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
  let start = 0;
  let end = 0;

  while (end < nums.length) {
    if (nums[end] == 0) {
      k--;
    }
    if (k < 0) {
      if (nums[start] == 0) {
        k++;
      }
      start++;
    }
    end++;
  }

  return end - start;
};

console.log(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2)); // 6
console.log(
  longestOnes([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3)
); //10
