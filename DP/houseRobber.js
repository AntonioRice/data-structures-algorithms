/**
 * LC 198
 * You are a professional robber planning to rob houses along a street.
 * Each house has a certain amount of money stashed, the only constraint stopping you from
 * robbing each of them is that adjacent houses have security systems connected and it will
 * automatically contact the police if two adjacent houses were broken into on the same night.
 * Given an integer array nums representing the amount of money of each house,
 * return the maximum amount of money you can rob tonight without alerting the police.
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  let rob1 = 0,
    rob2 = 0;

  for (const n of nums) {
    let max = Math.max(rob1 + n, rob2);
    rob1 = rob2;
    rob2 = max;
  }

  return rob2;
};
