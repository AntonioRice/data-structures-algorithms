// bestSum => "shorest path"
// Time O(n^m * m) exponentional, Space: O(m^2)
// memoized time: O(m*n*m) => O(m^2), Space O(m^2)
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

// console.log(bestSum([5, 3, 4, 7], 7));

// Time: O(m^2 * n), Space O(m^2)
// m = targetSum, n = numbers.length
const tabBestSum = (numbers, targetSum) => {
  const table = new Array(targetSum + 1).fill(null);
  table[0] = [];

  // m iterations
  for (let i = 0; i < targetSum; i++) {
    if (table[i] !== null) {
      // n iterations
      for (let num of numbers) {
        // m operations
        const combination = [...table[i], num];
        if (!table[i + num] || table[i + num].length > combination.length) {
          table[i + num] = combination;
        }
      }
    }
  }

  return table[targetSum];
};

console.log(tabBestSum([2, 3, 5], 8));
