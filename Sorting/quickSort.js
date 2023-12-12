/**
 * Quick Sort
 * First, identify the pivot element in the array (pick first, last, median, or random as pivot)
 * Traverse array and put everything thats smaller than the pivot into a 'left' array and everything thats larger in a 'right' array
 * Repeat the process for the individual 'left' and 'right' array until you have and array with lenngth 0, which is sorted
 * Repeatedly concatenate arrays
 * Merge left, pivot, and right
 * Big O: worst case is O(n^2) when arr is already sorted annd you end up comparing with every other element (unlikely). But average is O(nlogn)
 * recursively deviding array into smaller arrays is logn, and  the forloop is 0(n)
 */

const quickSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }
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
};

const arr = [-6, 20, 8, -2, 4]; // return [-6, -2, 4, 8, 20]
console.log(quickSort(arr));
