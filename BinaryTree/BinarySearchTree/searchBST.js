const generateTreeFromArray = require("../generateTreeFromArray.js");

// Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */

// // Time: O(2^h), Space O(h)- checking both sides and not splitting in half
// var searchBST = function (root, val) {
//   return bst(root);

//   function bst(node) {
//     if (!node) return null;

//     if (node.val == val) {
//       return node;
//     }

//     const leftResult = bst(node.left);
//     const rightResult = bst(node.right);

//     return leftResult || rightResult;
//   }
// };

// Time: O(log N), Space: O(log N) - tree is split in half after earch iteration
var searchBST = function (root, val) {
  return bst(root);

  function bst(node) {
    if (!node) return null;

    if (node.val == val) {
      return node;
    }

    // "splitting in half"
    if (node.val > val) {
      return bst(node.left);
    }
    if (node.val < val) {
      return bst(node.right);
    }
  }
};

const root1 = generateTreeFromArray([4, 2, 7, 1, 3]);
console.log(searchBST(root1, 2)); //[2,1,3]

const root2 = generateTreeFromArray([4, 2, 7, 1, 3]);
console.log(searchBST(root1, 5)); //[]
