/**
 * Given an integer array nums and an integer k, return the kth largest element in the array.
 * Note that it is the kth largest element in the sorted order, not the kth distinct element.
 * Can you solve it without sorting?
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// using quick sort -> O(nlogn)
var findKthLargest = function (nums, k) {
  const sortedArr = quickSort(nums); // O(nlogn)

  return sortedArr[sortedArr.length - k]; // O(1)

  function quickSort(arr) {
    if (arr.length < 2) return arr;
    let pivot = arr[arr.length - 1];
    let left = [];
    let right = [];

    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
  }
};

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));
console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4));
