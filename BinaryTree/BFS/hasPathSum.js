const generateTreeFromArray = require("../generateTreeFromArray.js");
/**
 * LC 112
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */

// Time: 0(n), Space O(n)
// var hasPathSum = function (root, targetSum) {
//   if (!root) return;
//   let queue = [root];
//   let pathSum = [root.val];

//   while (queue.length) {
//     const currentNode = queue.shift();
//     const currentSum = pathSum.shift();

//     if (!currentNode) return;

//     if (!currentNode.left && !currentNode.right && currentSum == targetSum) return true;

//     if (currentNode.left) {
//       queue.push(currentNode.left);
//       pathSum.push(currentSum + currentNode.left.val);
//     }

//     if (currentNode.right) {
//       queue.push(currentNode.right);
//       pathSum.push(currentSum + currentNode.right.val);
//     }
//   }

//   return false;
// };

//wihtout using a pathSum queue
// var hasPathSum = function (root, targetSum) {
//   if (!root) return false;
//   const queue = [[root, root.val]];

//   while (queue.length) {
//     const [currentNode, currentSum] = queue.shift();

//     if (!currentNode) return;

//     if (!currentNode.left && !currentNode.right && currentSum == targetSum) return true;

//     if (currentNode.left) {
//       queue.push([currentNode.left, currentNode.left.val + currentSum]);
//     }

//     if (currentNode.right) {
//       queue.push([currentNode.right, currentNode.right.val + currentSum]);
//     }
//   }

//   return false;
// };

var hasPathSumDFS = function (root, targetSum) {
  const dfs = (node, currentSum) => {
    if (!node) return false;

    currentSum += node.val;

    if (!node.left && !node.right && currentSum === targetSum) return true;

    return dfs(node.left, currentSum) || dfs(node.right, currentSum);
  };

  return dfs(root, 0);
};

const root1 = generateTreeFromArray([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1]);
console.log(hasPathSumDFS(root1, 22));
