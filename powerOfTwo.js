isPowerOfTwo = (n) => {
  if (n == 1) return true;

  if (n % 2 == 0) {
    return isPowerOfTwo(n / 2);
  }

  return false;
};

console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(2));
console.log(isPowerOfTwo(5));
console.log(isPowerOfTwo(8));
console.log(isPowerOfTwo(16));
console.log(isPowerOfTwo(12));

isPowerOfTwoBitWise = (n) => {
  if (n < 1) return false;

  return (n & (n - 1)) === 0;
};

console.log(isPowerOfTwoBitWise(1));
console.log(isPowerOfTwoBitWise(2));
console.log(isPowerOfTwoBitWise(8));
console.log(isPowerOfTwoBitWise(16));
console.log(isPowerOfTwoBitWise(12));
console.log(isPowerOfTwoBitWise(5));
