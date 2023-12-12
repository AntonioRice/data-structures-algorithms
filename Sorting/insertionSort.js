/**
 * Inseertion Sort
 * Virtually spit array into a sorted and unsorted part.
 * Assume that the first element is already sorted and the remaining elements aren't
 * Select element from the unsorted part, and compare it to all element in the sorted part
 * If the elements in the sorted part is smaller, than the selected element, proceed to the next element in the unsorted part.
 * Else, shift larger elements in the sorted part to towards the right
 * Insert selected elemennt at the right index
 * Repeat for all unsorted elements
 * Big-O = O(n^2)
 */

const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let numberToInsert = arr[i];
    let j = i - 1; //index of sorted element

    while (j >= 0 && arr[j] > numberToInsert) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = numberToInsert;
  }
};

const arr = [-6, 20, 8, -2, 4]; // return [-6, -2, 4, 8, 20]

insertionSort(arr);
console.log(arr);
