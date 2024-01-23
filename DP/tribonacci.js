/**
 * LC 1137
 * The Tribonacci sequence Tn is defined as follows:
 * T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.
 * Given n, return the value of Tn.
 *
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
  const trib = [0, 1, 1];

  for (let i = 3; i <= n; i++) {
    trib[i] = trib[i - 1] + trib[i - 2] + trib[i - 3];
  }

  return trib[n];
};
