// Time: 0(n), Space O(n) ==> linear (bottom up approach)
function fibonacci(n) {
  const fib = [0, 1];
  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib[n];
}

//Time: O(2^n), Space O(n)
const fib = (n) => {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
};

//Time: O(2^n), Space O(n)
const dib = (n) => {
  if (n <= 1) return;
  dib(n - 1);
  dib(n - 1);
};

console.log(fibonacci(1)); //[0,1]
console.log(fibonacci(2)); //[0,1]
console.log(fibonacci(3)); //[0,1,1]
console.log(fibonacci(7)); //[0,1,1,2,3,5,8]
