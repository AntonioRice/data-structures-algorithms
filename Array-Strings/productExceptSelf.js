/**
 * LC 238
 * Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
 * The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 * You must write an algorithm that runs in O(n) time and without using the division operation.
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const ans = new Array(nums.length).fill(1);

  let left = 1;
  let right = 1;
  for (i = 0; i < nums.length; i++) {
    ans[i] = left;
    left *= nums[i];
  }
  for (i = nums.length - 1; i >= 0; i--) {
    ans[i] *= right;
    right *= nums[i];
  }

  return ans;
};

// const productExceptSelf = (list) => {
//   const res = new Array(list.length).fill(1);
//   let prefix = 1;
//   for (let i = 0; i < list.length; i++) {
//     res[i] = prefix;
//     prefix *= list[i];
//   }

//   let suffix = 1;
//   for (let i = list.length - 1; i >= 0; i--) {
//     res[i] *= suffix;
//     suffix *= list[i];
//   }

//   return res;
// };

// console.log(productExceptSelf([1, 2, 4, 6]));

const res = productExceptSelf([1, 2, 3, 4]);
const exp = [24, 12, 8, 6];
console.assert(JSON.stringify(res) !== JSON.stringify(exp), "PASSED");
console.log(productExceptSelf([-1, 1, 0, -3, 3])); //[0, 0, 9, 0, 0]
