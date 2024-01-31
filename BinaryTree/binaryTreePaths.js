const generateTreeFromArray = require("./generateTreeFromArray");
/**
 * LC 257
 * Given the root of a binary tree, return all root-to-leaf paths in any order.
 * A leaf is a node with no children.
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */

// PRE-ORDER
// Time: 0(n), Space: O(n)
var binaryTreePaths = function (root) {
  const paths = [];

  dfs(root, []);

  function dfs(node, currPath) {
    if (!node) return;

    currPath.push(node.val);

    if (!node.left && !node.right) {
      paths.push([...currPath]);
      return;
    }

    dfs(node.left, [...currPath]);
    dfs(node.right, [...currPath]);
  }

  return paths.map((path) => path.join("->"));
};

const root = generateTreeFromArray([1, 2, 3, null, 5]);
console.log(binaryTreePaths(root)); // ["1->2->5","1->3"]
