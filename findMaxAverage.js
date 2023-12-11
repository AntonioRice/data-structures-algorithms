/**
 * You are given an integer array nums consisting of n elements, and an integer k.
 * Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value.
 * Any answer with a calculation error less than 10-5 will be accepted.
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var findMaxAverage = function (nums, k) {
  if (k > nums.length) {
    return 0;
  }

  let windowEnd = k;
  let currentSum = 0;

  for (let i = 0; i < k; i++) {
    currentSum += nums[i];
  }

  let maxAvg = currentSum / k;

  while (windowEnd < nums.length) {
    currentSum = currentSum - nums[windowEnd - k] + nums[windowEnd];
    maxAvg = Math.max(currentSum / k, maxAvg);
    windowEnd++;
  }

  return maxAvg;
};

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4)); // 12.75000
console.log(findMaxAverage([5], 1)); // 5
console.log(findMaxAverage([-1], 1)); // 1
