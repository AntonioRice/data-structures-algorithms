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
 * Given a root node reference of a BST and a key, delete the node with the given key in the BST.
 * Return the root node reference (possibly updated) of the BST.
 * Basically, the deletion can be divided into two stages:
 * 1. Search for a node to remove.
 * 2. If the node is found, delete the node.
 *
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
//Time: O(h) height of the tree
var deleteNode = function (root, key) {
  if (!root) return null;

  if (root.val == key) {
    // Possibility we need to account for:

    // 1. the target node has no children, return null
    if (!root.left && !root.right) return null;

    // 2. the target node has a left child and no right child, return left
    if (root.left && !root.right) return root.left;

    // 3. the target node has no left child but has a right child, return right
    if (!root.left && root.right) return root.right;

    // 4. the target node has both left and right child, we want to replace the target node with the next minimum number, and still satisfy the rules of a bst
    if (root.left && root.right) {
      // move to the right once, and go to the left until minimum is reached.
      let pointer = root.right; // need to keep track of position
      while (pointer.left) {
        pointer = pointer.left;
      }
      // pointer is now pointed to the minimum val, so replce the target val with the minimum val
      root.val = pointer.val;
      root.right = deleteNode(root.right, root.val); // now we want to delete everything
    }
  } else if (root.val > key) {
    root.left = deleteNode(root.left, key);
  } else if (root.val < key) {
    root.right = deleteNode(root.right, key);
  }

  return root;
};

const root1 = generateTreeFromArray([5, 3, 6, 2, 4, null, 7]);
console.log(deleteNode(root1, 3)); //[5,4,6,2,null,null,7]

const root2 = generateTreeFromArray([5, 3, 6, 2, 4, null, 7]);
console.log(deleteNode(root2, 0)); //[5,3,6,2,4,null,7]

const root3 = generateTreeFromArray([]);
console.log(deleteNode(root3, 0)); //[]
