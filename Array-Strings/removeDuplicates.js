/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (nums.length <= 1) return nums.length;
  let left = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[left] != nums[i]) {
      left++;
      nums[left] = nums[i];
    }
  }

  return nums;
};

console.log(removeDuplicates([1]));
console.log(removeDuplicates([1, 2]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
