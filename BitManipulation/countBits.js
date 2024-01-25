/**
 * LC 338
 * Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n),
 * ans[i] is the number of 1's in the binary representation of i.
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  let results = [0];
  for (let i = 1; i <= n; i++) {
    const half = i >> 1;
    const odd = i & 1;

    results[i] = results[half] + odd;
  }

  return results;
};

console.log(countBits(2));
