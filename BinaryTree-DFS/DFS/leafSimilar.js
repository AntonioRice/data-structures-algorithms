/**
 * Consider all the leaves of a binary tree, from left to right order, the values of those leaves form a leaf value sequence.
 * For example, in the given tree above, the leaf value sequence is (6, 7, 4, 9, 8).
 * Two binary trees are considered leaf-similar if their leaf value sequence is the same.
 * Return true if and only if the two given trees with head nodes root1 and root2 are leaf-similar.
 * https://s3-lc-upload.s3.amazonaws.com/uploads/2018/07/16/tree.png
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */

// O(n) time and O(1) space
var leafSimilar = function (root1, root2) {
  const stack1 = [root1];
  const stack2 = [root2];

  while (stack1.length && stack2.length) {
    if (getLeafVal(stack1) !== getLeafVal(stack2)) {
      return false;
    }
  }

  return stack1.length == 0 && stack2.length == 0;

  function getLeafVal(stack) {
    while (stack.length) {
      let node = stack.pop();

      if (node) {
        if (!node.left && !node.right) {
          return node.val;
        }

        stack.push(node.left);
        stack.push(node.right);
      }
    }

    return null;
  }
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const root1 = new TreeNode(
  1,
  new TreeNode(2, null, null),
  new TreeNode(3, null, null)
);
const root2 = new TreeNode(
  1,
  new TreeNode(2, null, null),
  new TreeNode(3, null, null)
);

console.log(leafSimilar(root1, root2));
