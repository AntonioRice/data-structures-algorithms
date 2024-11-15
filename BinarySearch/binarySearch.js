const binarySearch = (arr) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);

    if (arr[mid] == target) return mid;

    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
};

const target = 5;
const arr = [1, 3, 5, 8, 19, 30];

console.log(binarySearch(arr));
