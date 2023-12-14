const generateTreeFromArray = require("./generateTreeFromArray.js");

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * Given the root of a binary tree and an integer targetSum, return the number of paths where the sum of the values along the path equals targetSum.
 * The path does not need to start or end at the root or a leaf, but it must go downwards (i.e., traveling only from parent nodes to child nodes).
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}
 */

var pathSum = function (root, targetSum) {
  // initialize a count int to keep track of how many time the targetSum was observed
  const hashMap = new Map(); // {sum: freq}
  hashMap.set(0, 1); //initial with first case, target is node.val

  // start dfs by passing in initial root with the runningSum of 0
  return dfs(root, 0);

  function dfs(root, runningSum) {
    if (!root) return 0;
    // update runningSum
    runningSum += root.val;
    // set count variable to the value of the the observed sum of runningSum-targetSum, 0 being default.
    let count = hashMap.get(runningSum - targetSum) || 0;
    // set the runningSum/increment it freq
    hashMap.set(runningSum, (hashMap.get(runningSum) || 0) + 1);
    // update the count by adding left and right dfs solutions
    count += dfs(root.left, runningSum) + dfs(root.right, runningSum);
    //remove runningSum from table (essentially backtrack), since we'd done processing the curr running sum
    hashMap.set(runningSum, hashMap.get(runningSum) - 1);

    return count;
  }
};

const root = generateTreeFromArray([10, 5, -3, 3, 2, null, 11, 3, -2, null, 1]);
console.log(pathSum(root, 8)); // 3

const root2 = generateTreeFromArray([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1]);
console.log(pathSum(root2, 22)); // 3

const root3 = new TreeNode(
  1,
  null,
  new TreeNode(2, null, new TreeNode(3, null, new TreeNode(4, null, new TreeNode(5, null, null))))
);
console.log(pathSum(root3, 3)); // 2

const root4 = new TreeNode(1, null, null);
console.log(pathSum(root4, 1)); //1
