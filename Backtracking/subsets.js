/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsets = (nums) => {
  const results = [];
  const path = [];

  backtrack(results, path, nums, 0);

  return results;
};

const backtrack = (results, path, nums, start) => {
  // add path to results
  results.push([...path]);

  for (let i = start; i < nums.length; i++) {
    // include num
    path.push(nums[i]);
    // backtrack
    backtrack(results, path, nums, i + 1);
    // do not include num
    path.pop();
  }
};

console.log(subsets([1, 2, 3])); // [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
console.log(subsets([0])); // [[],[0]]
