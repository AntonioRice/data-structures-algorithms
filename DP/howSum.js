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
const memoHowSum = (nums, targetSum, memo = {}, all = []) => {
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

console.log(memoHowSum([5, 3, 4, 7], 7));
console.log(memoHowSum([14, 7], 300));
