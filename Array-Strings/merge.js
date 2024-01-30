/**
 * LC 88
 * You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n,
 * representing the number of elements in nums1 and nums2 respectively.
 * Merge nums1 and nums2 into a single array sorted in non-decreasing order.
 * The final sorted array should not be returned by the function, but instead be stored inside the array nums1.
 * To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged,
 * and the last n elements are set to 0 and should be ignored. nums2 has a length of n.
 *
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

// Naive approach. Time O(n*m), Space O(1)
var merge = function (nums1, m, nums2, n) {
  let k = m;
  for (let i = 0; i < n; i++) {
    nums1[m] = nums2[i];
    while (nums1[m - 1] > nums1[m]) {
      [nums1[m], nums1[m - 1]] = [nums1[m - 1], nums1[m]];
      m--;
    }

    m = ++k;
  }

  return nums1;
};

// Using Pointers. Time: O(n + m), Space O(1)
var merge2 = function (nums1, m, nums2, n) {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;

  while (j >= 0) {
    if (i >= 0 && nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      k--;
      i--;
    } else {
      nums1[k] = nums2[j];
      k--;
      j--;
    }
  }

  return nums1;
};

const nums1 = [4, 5, 6, 0, 0, 0];
const m = 3;
const nums2 = [1, 2, 3];
const n = 3;

console.log(merge2(nums1, m, nums2, n)); // [1,2,3,4,5,6]
