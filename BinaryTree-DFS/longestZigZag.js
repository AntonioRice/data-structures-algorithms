const generateTreeFromArray = require("./generateTreeFromArray.js");

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var longestZigZag = function (root) {
  return Math.max(dfs(root.left, true, 0), dfs(root.right, false, 0));

  function dfs(node, left, len) {
    if (!node) return len;

    if (left) {
      len = Math.max(len, dfs(node.right, false, len + 1), dfs(node.left, true, 0));
    } else {
      len = Math.max(len, dfs(node.left, true, len + 1), dfs(node.right, false, 0));
    }

    return len;
  }
};

//O(n) time (max number of nodes), O(h) space (max height of tree)

const root1 = generateTreeFromArray([1, null, 1, 1, 1, null, null, 1, 1, null, 1, null, null, null, 1]);
console.log(longestZigZag(root1)); //3

const root2 = generateTreeFromArray([1, 1, 1, null, 1, null, null, 1, 1, null, 1]);
console.log(longestZigZag(root2)); //4

const root3 = generateTreeFromArray([1]);
console.log(longestZigZag(root3)); //0
