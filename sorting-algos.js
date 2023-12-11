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
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
};

// bubbleSort(arr);
// console.log(arr);

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

// insertionSort(arr);
// console.log(arr);

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

// console.log(quickSort(arr));

/**
 * Merge Sort
 * Split array into sub arrays byt dividing by 2, sub array until each contains only one element (sorted).
 * Using a temp array, repeatedly merge sub arrays until only one remains.
 * Big O: Recursively dividing array into halves is O(logn). Merging array while while loop is O(n) ==> O(nlogn)
 */

const mergeSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, mid);
  const rightArr = arr.slice(mid);

  //repeat if length of left and right arrays aren't one
  return merge(mergeSort(leftArr), mergeSort(rightArr));
};

const merge = (leftArr, rightArr) => {
  const sortedArr = [];
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      sortedArr.push(leftArr.shift()); //remember that arr.shift remove the element from arr
    } else {
      sortedArr.push(rightArr.shift());
    }
  }

  return [...sortedArr, ...leftArr, ...rightArr];
};

console.log(mergeSort(arr));
