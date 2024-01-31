/**
 * LC 226
 * Given the root of a binary tree, invert the tree, and return its root.
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

const generateTreeFromArray = require("./generateTreeFromArray");

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
// BFS
var invertTree = function (root) {
  if (!root) return root;

  const queue = [root];

  while (queue.length) {
    const node = queue.shift();

    if (node) {
      [node.left, node.right] = [node.right, node.left];
      queue.push(node.left);
      queue.push(node.right);
    }
  }

  return root;
};

const root = generateTreeFromArray([4, 2, 7, 1, 3, 6, 9]);
console.log(invertTree(root)); // [4,7,2,9,6,3,1]

const root2 = generateTreeFromArray([2, 1, 3]);
console.log(invertTree(root2)); // [2,3,1]

const root3 = generateTreeFromArray([]);
console.log(invertTree(root3)); // []
