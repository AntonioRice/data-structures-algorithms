/**
 * howSum: function that takes in a targetSum and an array of numbers as arguments
 * return a combination of elements that adds up to the target sum, or null
 * If multiple way, resurn just one
 */

// Brute Force
// Time: O(n^m * m) exponential, Space: O(m)
const howSum = (nums, targetSum) => {
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  for (const num of nums) {
    const remainder = targetSum - num;
    const results = howSum(nums, remainder);

    if (results) return [...results, num];
  }

  return null;
};

// console.log(howSum([5, 3, 4, 7], 7));

// Memoized
// Time: O(n * m * m) ==> O(n * m^2) not exponentail because the 2 is constannt, Space: O(m^2)
const memoHowSum = (nums, targetSum, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  for (const num of nums) {
    const remainder = targetSum - num;
    const results = memoHowSum(nums, remainder, memo);

    if (results) {
      memo[targetSum] = [...results, num];
      return memo[targetSum];
    }
  }

  return (memo[targetSum] = null);
};

// console.log(memoHowSum([5, 3, 4, 7], 7));
// console.log(memoHowSum([14, 7], 300));

// bestSum => "shorest path"
//
const bestSum = (nums, targetSum) => {
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  let shortestComination = null;

  for (const num of nums) {
    const remainder = targetSum - num;
    const remainderCombination = bestSum(nums, remainder);

    if (remainderCombination) {
      const combination = [...remainderCombination, num];
      //check shortests
      if (shortestComination === null || combination.length < shortestComination.length) {
        shortestComination = combination;
      }
    }
  }

  return shortestComination;
};

console.log(bestSum([5, 3, 4, 7], 7));

const memoAllCombinations = (nums, targetSum, memo = {}) => {
  if (targetSum === 0) return [[]];
  if (targetSum < 0) return null;
  if (targetSum in memo) return memo[targetSum];

  let allCombinations = [];

  for (const num of nums) {
    const remainder = targetSum - num;
    const remainderCombinations = memoAllCombinations(nums, remainder, memo);

    if (remainderCombinations !== null) {
      const targetCombinations = remainderCombinations.map((combination) => [...combination, num]);
      allCombinations.push(...targetCombinations);
    }
  }

  memo[targetSum] = allCombinations.length > 0 ? allCombinations : null;
  return memo[targetSum];
};
console.log(memoAllCombinations([5, 3, 4, 7], 7));
