const generateTreeFromArray = require("../generateTreeFromArray.js");
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxLevelSum = function (root) {
  let queue = [];
  let maxSum = -Infinity;
  let maxDepth = -Infinity;

  let depth = 1;
  queue.push(root);

  while (queue.length) {
    let levelSum = 0;
    let nextLevel = [];

    for (const node of queue) {
      levelSum += node.val;

      if (node.left) {
        nextLevel.push(node.left);
      }

      if (node.right) {
        nextLevel.push(node.right);
      }
    }

    if (levelSum > maxSum) {
      maxSum = levelSum;
      maxDepth = depth;
    }

    queue = nextLevel;
    depth += 1;
  }

  return maxDepth;
};

const root1 = generateTreeFromArray([1, 7, 0, 7, -8, null, null]);
console.log(maxLevelSum(root1)); // 2

const root2 = generateTreeFromArray([989, null, 10250, 98693, -89388, null, null, null, -32127]);
console.log(maxLevelSum(root2)); // 2

const root3 = generateTreeFromArray([1, 2, 3]);
console.log(maxLevelSum(root3)); // 2
