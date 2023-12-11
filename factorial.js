//Fibonacci

// function factorial_(n) {
//   let result = 1;
//   for (let i = n; i > 1; i--) {
//     result = result * i;
//   }

//   return result;
// }

// linear time complexition
const factorial = (n) => {
  // With factorial, starting at the top (n), decrement n by one, multiplying the n by n-1  ----> (result = result * 1)
  // If n is less than or equal to one, return 1.
  return n <= 1 ? 1 : n * factorial(n - 1);
  // if (n <= 1) {
  //   return 1;
  // } else {
  //   return n * factorial(n - 1);
  // }
};

console.log(factorial(4)); //24
console.log(factorial(5)); //120
console.log(factorial(0)); //1
console.log(factorial(1)); //1
