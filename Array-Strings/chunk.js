/**
 * LC 2677
 * Given an array arr and a chunk size size, return a chunked array.
 * A chunked array contains the original elements in arr, but consists of subarrays each of length size. The length of the last subarray may be less than size if arr.length is not evenly divisible by size.
 * You may assume the array is the output of JSON.parse. In other words, it is valid JSON.
 * Please solve it without using lodash's _.chunk function.
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function (arr, size) {
  let result = [];
  let temp = [];

  for (let i = 0; i < arr.length; i++) {
    temp.push(arr[i]);
    if (temp.length == size) {
      result.push(temp);
      temp = [];
    }
  }

  if (temp.length) result.push(temp);

  return result;
};

console.log(chunk([1, 2, 3, 4, 5], 1));
console.log(chunk([1, 9, 6, 3, 2], 3));
console.log(chunk([8, 5, 3, 2, 6], 6));
