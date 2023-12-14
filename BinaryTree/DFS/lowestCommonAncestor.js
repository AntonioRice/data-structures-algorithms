const generateTreeFromArray = require("../generateTreeFromArray.js");

//Definition for a binary tree node.
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.
 * According to the definition of LCA on Wikipedia:
 * “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”
 *
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  return lca(root, p, q);

  function lca(node, p, q) {
    if (!node) return;

    // only return once taget values are found and store in left/right variables
    if (node.val == p.val || node.val == q.val) {
      return node;
    }

    const left = lca(node.left, p, q); // traversing left to find target node
    const right = lca(node.right, p, q); // traversing right to find the target node

    // if both values are found by going left and right, the current node is lca
    if (left && right) return node;

    return left || right;
  }
};

const root1 = generateTreeFromArray([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4], true, TreeNode);
console.log(lowestCommonAncestor(root1, new TreeNode(5), new TreeNode(1))); // 3

const root2 = generateTreeFromArray([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4], true, TreeNode);
console.log(lowestCommonAncestor(root2, new TreeNode(5), new TreeNode(4))); // 5

const root3 = generateTreeFromArray([1, 2], true, TreeNode);
console.log(lowestCommonAncestor(root3, new TreeNode(1), new TreeNode(2))); // 1
