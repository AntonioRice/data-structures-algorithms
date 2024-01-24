/**
 * LC 162
 * A peak element is an element that is strictly greater than its neighbors.
 * Given a 0-indexed integer array nums, find a peak element, and return its index. If the array contains multiple peaks, return the index to any of the peaks.
 * You may imagine that nums[-1] = nums[n] = -∞. In other words, an element is always considered to be strictly greater than a neighbor that is outside the array.
 * You must write an algorithm that runs in O(log n) time.
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  let left = 0;
  let right = nums.length - 1;

  if (nums.length == 1) return 0;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid - 1] < nums[mid] && nums[mid] > nums[mid + 1]) return mid;

    if (nums[mid] > nums[mid + 1]) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
};

console.log(findPeakElement([1, 2, 3, 1])); // 2
console.log(findPeakElement([1, 2, 1, 3, 5, 6, 4])); //5
console.log(findPeakElement([1])); // 0
console.log(findPeakElement([2, 4, 5, 6, 8, 2, 7])); // 4
