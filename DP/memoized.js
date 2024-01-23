/**
 * Dynamic Programing: Memoizaition + Divide & Conquer
 * Memoization is a way to store values, using a cache {}, so that we don't have to calculate it again.
 * Questions to ask:
 * Can be divided into subproblems? (Tree-like structure)
 * Recursive solution?
 * Are there repetitive subproblems?
 * Memoize subproblems
 */
// Example
const addTo80 = () => {
  return n + 80;
};

// Memoized solution 1
const cache = {};
const memoizedAddTo80 = (n) => {
  if (n in cache) {
    return cache[n];
  } else {
    cache[n] = n + 80;
    return cache[n];
  }
};

// console.log(memoizedAddTo80(5));
// console.log(memoizedAddTo80(10));
// console.log(memoizedAddTo80(5));

// Memoized solution 2 (using closures to prevent cache from being in global scope)
const memoizedAddTo80Two = () => {
  // lexical scope
  const cache = {};

  return (n) => {
    if (n in cache) {
      return cache[n];
    } else {
      cache[n] = n + 80;
      return cache[n];
    }
  };
};

// const memoized = memoizedAddTo80Two();

// console.log(memoized(5));
// console.log(memoized(10));
// console.log(memoized(5));

// Memoized Fibonacci
// TC --> O(2^n)
// 0,1,1,2,3,5,8,13,21,34,55,89,144,233...
const fibonacci = (n) => {
  if (n < 2) {
    return n;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
};

// TC -> O(n), SC -> O(n)
const memoizedFibonacci = () => {
  const cache = {};

  return function fib(n) {
    if (n in cache) {
      return cache[n];
    } else {
      if (n < 2) {
        return n;
      } else {
        cache[n] = fib(n - 1) + fib(n - 2);
        return cache[n];
      }
    }
  };
};

const memoized = memoizedFibonacci();
console.log(memoized(3));
console.log(memoized(8));
console.log(memoized(7));
console.log(memoized(100));
