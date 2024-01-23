/**
 * LC 216
 * Find all valid combinations of k numbers that sum up to n such that the following conditions are true:
 * Only numbers 1 through 9 are used.
 * Each number is used at most once.
 * Return a list of all possible valid combinations. The list must not contain the same combination twice, and the combinations may be returned in any order.
 *
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */

// Time: O(n choose k) -> *Binomial Coefficient*, Space O(k)
var combinationSum3 = function (k, n) {
  const results = [];
  const path = [];

  backtrack(1, 0, path);

  return results;

  function backtrack(start, sum, path) {
    // check correct num of values (k) are populated.
    // check if sum is equal to n
    if (path.length === k && sum == n) {
      results.push([...path]);
      return;
    }

    if (sum > n) return;

    // loop through numbers 1-9
    for (let i = start; i <= 9; i++) {
      // prevent duplicate values from being added
      // set next path that needs to be explored
      path.push(i);
      // explore path/value
      backtrack(i + 1, sum + i, path);
      // remove explored path/value
      path.pop();
    }
  }
};

console.log(combinationSum3(3, 7)); // [[1,2,4]]
console.log(combinationSum3(3, 9)); // [[1,2,6],[1,3,5],[2,3,4]]
console.log(combinationSum3(4, 1)); // []
