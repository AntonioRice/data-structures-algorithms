/**
 * Given a binary array nums, you should delete one element from it
 * Return the size of the longest non-empty subarray containing only 1's in the resulting array.
 * Return 0 if there is no such subarray.
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
  let start = 0;
  let end = 0;
  let k = 1;

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

  return end - start - 1;
};

console.log(longestSubarray([1, 1, 0, 1])); //3
console.log(longestSubarray([0, 1, 1, 1, 0, 1, 1, 0, 1])); //5
