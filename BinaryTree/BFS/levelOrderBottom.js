const generateTreeFromArray = require("../generateTreeFromArray.js");
/**
 * LC 107
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

// Time: 0(n), Space: O(n)
var levelOrderBottom = function (root) {
  const queue = [root];
  const results = [];

  while (queue.length) {
    const len = queue.length;
    const currentLevel = [];

    for (let i = 0; i < len; i++) {
      const node = queue.shift();

      if (!node) return [];
      currentLevel.push(node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    results.unshift(currentLevel);
  }

  return results;
};

const root = generateTreeFromArray([3, 9, 20, null, null, 15, 7]);
console.log(levelOrderBottom(root)); // [[15,7],[9,20],[3]]

const root2 = generateTreeFromArray([1]);
console.log(levelOrderBottom(root2)); // [[1]]

const root3 = generateTreeFromArray([]);
console.log(levelOrderBottom(root3)); // []
