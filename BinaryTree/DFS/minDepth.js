const generateTreeFromArray = require("../generateTreeFromArray.js");
/**
 * LC 111
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
const minDepthDFS = (root) => {
  if (root == null) return 0;

  const left = minDepthDFS(root.left);
  const right = minDepthDFS(root.right);

  return 1 + (Math.min(left, right) || Math.max(left, right)); // if 0, return max max
};

const root1 = generateTreeFromArray([2, null, 3, null, 4, null, 5, null, 6]);
console.log(minDepthDFS(root1)); // 5
