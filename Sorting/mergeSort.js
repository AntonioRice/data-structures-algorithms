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

const arr = [-6, 20, 8, -2, 4]; // return [-6, -2, 4, 8, 20]
console.log(mergeSort(arr));
