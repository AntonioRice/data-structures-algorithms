/**
 * LC 191
 * Write a function that takes the binary representation of an unsigned integer and returns the number of '1' bits it has (also known as the Hamming weight).
 * Note:
 * Note that in some languages, such as Java, there is no unsigned integer type. In this case, the input will be given as a signed integer type. It should not affect your implementation,
 * as the integer's internal binary representation is the same, whether it is signed or unsigned.
 * In Java, the compiler represents the signed integers using 2's complement notation. Therefore, in Example 3, the input represents the signed integer. -3.
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  let count = 0;

  while (n !== 0) {
    if (n & (1 === 1)) count++; // n&1 return 1 if n is 1

    n = n >>> 1; // shift from right
  }

  return count;
};

console.log(hammingWeight(00000000000000000000000000001011)); // 3
console.log(hammingWeight(00000000000000000000000010000000)); // 1
console.log(hammingWeight(11111111111111111111111111111101)); // 31
