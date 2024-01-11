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
 * @return {boolean}
 */
var isValidBST = function (root) {
  const queue = [[root]];
  while (queue.length) {
    const [currNode, min, max] = queue.shift();

    if (max != null && currNode.val >= max) return false;
    if (min != null && currNode.val <= min) return false;

    if (currNode.left) queue.push([currNode.left, min, currNode.val]);
    if (currNode.right) queue.push([currNode.right, currNode.val, max]);
  }

  return true;
};

const root1 = generateTreeFromArray([2, 1, 3]);
console.log(isValidBST(root1)); // true
const root2 = generateTreeFromArray([5, 1, 4, null, null, 3, 6]);
console.log(isValidBST(root2)); // false
const root3 = generateTreeFromArray([5, 4, 6, null, null, 3, 7]);
console.log(isValidBST(root3)); // false
