/**
 * Two Sum - Tow Pointers
 * Time: if arr is pre-sorted O(n), else O(n log n) due to having to sort it
 *  Space O(1)
 */

const twoSum = (arr, target) => {
  // if unsorted array
  arr.sort((a, b) => a - b); // O(n log n)

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];

    if (sum == target) {
      return [left, right];
    }

    if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return -1;
};

const target = 70;
const arr = [10, 20, 35, 50];
console.log(twoSum(arr, target));
