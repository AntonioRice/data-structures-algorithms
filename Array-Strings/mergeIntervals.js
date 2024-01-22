// Time: O(n log n), Space: O(n)
const mergeIntervals = (arr) => {
  // sort by first value
  const sortedIntervals = arr.sort((a, b) => a[0] - b[0]);

  let previous = sortedIntervals[0];
  let result = [previous];
  const start = 0;
  const end = 1;

  for (const current of sortedIntervals) {
    if (previous[end] >= current[start]) {
      previous[end] = Math.max(previous[end], current[end]);
    } else {
      result.push(current);
      previous = current;
    }
  }

  return result;
};

const arr = [
  [1, 3],
  [8, 10],
  [2, 6],
  [15, 18],
];
console.log(mergeIntervals(arr)); // [[1,6],[8,10],[15,18]]

const arr2 = [
  [4, 5],
  [1, 4],
];
console.log(mergeIntervals(arr2)); // [[1,5]]
