const generateTreeFromArray = require("./generateTreeFromArray");
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * LC 783
 * @param {TreeNode} root
 * @return {number}
 */
// IN ORDER -> Left, Root, Right
var minDiffInBST = function (root) {
  let min = Infinity;
  let prev = null;

  inOrder(root);

  return min;

  function inOrder(root) {
    if (!root) return;

    inOrder(root.left); //left
    if (prev) min = Math.min(min, root.val - prev.val);
    prev = root; //root
    inOrder(root.right); //right
  }
};

const root1 = generateTreeFromArray([4, 2, 6, 1, 3]);
console.log(minDiffInBST(root1)); // 1

const root2 = generateTreeFromArray([1, 0, 48, null, null, 12, 49]);
console.log(minDiffInBST(root2)); // 1
