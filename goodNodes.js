/**
 * Given a binary tree root, a node X in the tree is named good if in the path from root to X there are no nodes with a value greater than X.
 * Return the number of good nodes in the binary tree.
 * @param {TreeNode} root
 * @return {number}
 */
var goodNodes = function (root) {
  let goodNodes = 0;

  findGoodNode(root, root.val);

  function findGoodNode(node, maxVal) {
    if (!node) return;
    if (node.val >= maxVal) {
      maxVal = Math.max(node.val, maxVal);
      goodNodes += 1;
    }

    findGoodNode(node.left, maxVal);
    findGoodNode(node.right, maxVal);
  }

  return goodNodes;
};

//Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const root1 = new TreeNode(
  3,
  new TreeNode(1, new TreeNode(3)),
  new TreeNode(4, new TreeNode(1), new TreeNode(5))
);
console.log(goodNodes(root1));

const root2 = new TreeNode(
  3,
  new TreeNode(3, new TreeNode(4), new TreeNode(2))
);
console.log(goodNodes(root2));

const root3 = new TreeNode(1);
console.log(goodNodes(root3));

const root4 = new TreeNode(9, null, new TreeNode(3, new TreeNode(6), null));
console.log(goodNodes(root4));
