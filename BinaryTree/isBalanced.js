const generateTreeFromArray = require("./generateTreeFromArray");
/**
 * LC 110
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

// dfs
var isBalanced = function (root) {
  let balanced = true;
  dfs(root);

  function dfs(node) {
    if (!node) return 0;

    const left = 1 + dfs(node.left);
    const right = 1 + dfs(node.right);

    if (Math.abs(right - left) > 1) balanced = false;

    return Math.max(left, right);
  }

  return balanced;
};

const root1 = generateTreeFromArray([3, 9, 20, null, null, 15, 7]);
console.log(isBalanced(root1)); // true

// const root2 = generateTreeFromArray([1, 2, 2, 3, 3, null, null, 4, 4]);
// console.log(isBalanced(root2)); // false

// const root3 = generateTreeFromArray([1, 2, 2, 3, null, null, 3, 4, null, null, 4]);
// console.log(isBalanced(root3)); // false
