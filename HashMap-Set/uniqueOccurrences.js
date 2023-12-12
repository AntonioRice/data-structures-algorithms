/**
 * Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  const freqMap = new Map();
  const seenValues = new Set();

  for (let i = 0; i < arr.length; i++) {
    freqMap.set(arr[i], (freqMap.get(arr[i]) || 0) + 1);
  }

  for (const frequency of freqMap.values()) {
    if (seenValues.has(frequency)) {
      return false;
    }
    seenValues.add(frequency);
  }

  return true;
};

console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3])); // true
console.log(uniqueOccurrences([1, 2])); // false
console.log(uniqueOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0])); //true
