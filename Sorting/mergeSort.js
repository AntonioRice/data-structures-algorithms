/**
 * Merge Sort
 * Split array into sub arrays byt dividing by 2, sub array until each contains only one element (sorted).
 * Using a temp array, repeatedly merge sub arrays until only one remains.
 * Big O: Recursively dividing array into halves is O(logn). Merging array while while loop is O(n) ==> O(nlogn)
 * Space: 0(n)
 */

const mergeSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  //repeat if length of left and right arrays aren't one
  return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
  const sorted = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      sorted.push(left.shift()); //remember that arr.shift remove the element from arr
    } else {
      sorted.push(right.shift());
    }
  }

  return [...sorted, ...left, ...right];
};

const arr = [-6, 20, 8, -2, 4]; // return [-6, -2, 4, 8, 20]
console.log(mergeSort(arr));
