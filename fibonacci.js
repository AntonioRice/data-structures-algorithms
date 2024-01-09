function fibonacci(n) {
  // Big-O 0(n) - linear
  const fib = [0, 1];
  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib[n];

  // // Big-O O(2^n)
  // if (n < 2) {
  //   return n;
  // } else {
  //   return fibonacci(n - 1) + fibonacci(n - 2);
  // }
}

console.log(fibonacci(1)); //[0,1]
console.log(fibonacci(2)); //[0,1]
console.log(fibonacci(3)); //[0,1,1]
console.log(fibonacci(7)); //[0,1,1,2,3,5,8]
