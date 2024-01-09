/**
 * Bubble Sort
 * Given an a array of integers, sort array
 * Conmpare adjacent elements in an array, and swap the positions if they're not in the intended order
 * Big-O = O(n^2)
 */

const arr = [-6, 20, 8, -2, 4]; // return [-6, -2, 4, 8, 20]
let swapped;

const bubbleSort = (arr) => {
  do {
    swapped = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
  } while (swapped);
};

bubbleSort(arr);
console.log(arr);
