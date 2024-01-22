/**
 * LC 435
 * Given an array of intervals intervals where intervals[i] = [starti, endi], return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
  const sortedIntervals = intervals.sort((a, b) => a[1] - b[1]);

  let previous = 0;
  let overlap = 0;
  const start = 0;
  const end = 1;

  for (let i = 1; i < sortedIntervals.length; i++)
    if (sortedIntervals[previous][end] > sortedIntervals[i][start]) {
      overlap++;
    } else {
      previous = i;
    }

  return overlap;
};

const arr = [
  [3, 4],
  [1, 2],
  [2, 3],
  [1, 3],
];
console.log(eraseOverlapIntervals(arr)); // 1

const arr2 = [
  [1, 2],
  [1, 2],
  [1, 2],
];
console.log(eraseOverlapIntervals(arr2)); // 2

const arr3 = [
  [1, 2],
  [2, 3],
];
console.log(eraseOverlapIntervals(arr3)); // 0

const arr4 = [
  [1, 100],
  [11, 22],
  [1, 11],
  [2, 12],
];
console.log(eraseOverlapIntervals(arr4)); // 2
