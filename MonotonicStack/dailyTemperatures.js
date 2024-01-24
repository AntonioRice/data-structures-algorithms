/**
 * LC 739
 * Given an array of integers temperatures represents the daily temperatures,
 * return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature.
 * If there is no future day for which this is possible, keep answer[i] == 0 instead.
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (t) {
  const results = new Array(t.length).fill(0);
  const stack = []; //[temp, index]

  for (let i = 0; i < t.length; i++) {
    while (stack.length && t[i] > stack[stack.length - 1][0]) {
      let [temp, index] = stack.pop();
      results[index] = i - index;
    }
    stack.push([t[i], i]);
  }

  return results;
};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])); // Output: [1,1,4,2,1,1,0,0]
console.log(dailyTemperatures([30, 40, 50, 60])); // Output: [1,1,1,0]
console.log(dailyTemperatures([30, 60, 90])); // Output: [1,1,0]
