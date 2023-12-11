/**
 * Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where:
 * answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
 * answer[1] is a list of all distinct integers in nums2 which are not present in nums1.
 * Note that the integers in the lists may be returned in any order.
 *
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
  let arr1 = new Set(nums1);
  let arr2 = new Set(nums2);

  nums2.forEach((num) => {
    arr1.delete(num);
  });

  nums1.forEach((num) => {
    arr2.delete(num);
  });
  return [[...arr1], [...arr2]];
};

console.log(findDifference([1, 2, 3], [2, 4, 6])); // [[1,3],[4,6]]
