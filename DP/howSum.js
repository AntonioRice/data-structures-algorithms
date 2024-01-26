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

// console.log(memoAllCombinations([5, 3, 4, 7], 7));
// console.log(memoAllCombinations([5, 3, 4, 7, 25], 100));

// Time: O(m^2*n), Space O(n^2)
//m = targetSum, n = numbrs.length
const tabHowSum = (numbers, targetSum) => {
  const table = new Array(targetSum + 1).fill(null);
  table[0] = [];

  for (let i = 0; i < table.length; i++) {
    //m iterations
    if (table[i] !== null) {
      for (let num of numbers) {
        // n iterations
        if (table[i + num] === null) {
          //process of copying over an array, m possible iterations
          table[i + num] = [...table[i], num]; //copy over current array and include value at i+num
        }
      }
    }
  }

  return table[targetSum];
};

console.log(tabHowSum([5, 3, 4], 7));
