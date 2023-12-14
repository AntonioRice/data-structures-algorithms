const generateTreeFromArray = require("../generateTreeFromArray.js");

//  Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {
  const result = [];
  const queue = [];

  if (!root) return result;

  queue.push([root, 0]);

  while (queue.length) {
    for (let i = 0; i < queue.length; i++) {
      let [node, depth] = queue.shift();
      if (!node) return;

      result[depth] = node.val;

      if (node.left) {
        queue.push([node.left, depth + 1]);
      }

      if (node.right) {
        queue.push([node.right, depth + 1]);
      }
    }
  }

  return result;
};

const root1 = generateTreeFromArray([1, 2, 3, null, 5, null, 4]);
console.log(rightSideView(root1)); // [1,3,4]

const root2 = generateTreeFromArray([1, null, 3]);
console.log(rightSideView(root2)); // [1,3]

const root3 = generateTreeFromArray([]);
console.log(rightSideView(root3)); // []

const root4 = generateTreeFromArray([1, 2, 3, null, 5, 6, null, 4]);
console.log(rightSideView(root4)); // [1,3,6,4]

const root5 = generateTreeFromArray([1, 2, 0]);
console.log(rightSideView(root5)); // [1,0]
