/**
 * Given an integer array nums, return true if there exists a triple of indices (i, j, k) such that i < j < k and nums[i] < nums[j] < nums[k].
 * If no such indices exists, return false.
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
  let min = -Infinity;
  let max = Infinity;
  let i = 0;

  while (i < nums.length) {
    if (nums[i] <= min) {
      min = nums[i];
    } else if (nums[i] <= max) {
      max = nums[i];
    } else {
      return true;
    }
    i++;
  }

  return false;
};

console.log(increasingTriplet([1, 2, 3, 4, 5])); //true
console.log(increasingTriplet([2, 1, 5, 0, 4, 6])); //true
console.log(increasingTriplet([5, 4, 3, 2, 1])); //false
console.log(increasingTriplet([20, 100, 10, 12, 5, 13])); //true
