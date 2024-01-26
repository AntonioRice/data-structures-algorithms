/**
 * canSum: given an array of integers and a target interger, can a the target be reached given the nums provided.
 * Use any num as much as possible, non negative assumption
 */

// Brute force
// Time: O(n^m), Space(m) (height of the tree)
// m = target sum, n => array length
const canSum = (numbers, targetSum) => {
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;

  for (const num of numbers) {
    const remainder = targetSum - num;
    const isPossible = canSum(numbers, remainder);

    if (isPossible) return true;
  }

  return false;
};

// console.log(canSum([5, 3, 4, 7], 7)); // true =>
// console.log(canSum([5, 3], 7)); // false

//Time: O(m*n), Space O(m)
const memoCanSum = (numbers, targetSum, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;

  for (const num of numbers) {
    const remainder = targetSum - num;
    memo[targetSum] = memoCanSum(numbers, remainder, memo);

    if (memo[targetSum]) return true;
  }

  return (memo[targetSum] = false);
};
// console.log(memoCanSum([5, 3, 4, 7], 7)); // true =>
// console.log(memoCanSum([5, 3], 7)); // false
// console.log(memoCanSum([5, 1], 7)); // true
// console.log(memoCanSum([14, 7], 300)); // true

// Time: O(nm),Space: O(m)
// m = targetSum, n = numbers.length
const tabCanSum = (numbers, targetSum) => {
  const table = new Array(targetSum + 1).fill(false);
  table[0] = true;

  for (let i = 0; i <= table.length; i++) {
    if (table[i] === true) {
      for (let num of numbers) {
        if (table[i + num] != null) table[i + num] = true;
      }
    }
  }

  return table[targetSum];
};

console.log(tabCanSum([5, 3, 4], 7));
