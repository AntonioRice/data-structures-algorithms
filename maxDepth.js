/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * Given the root of a binary tree, return its maximum depth.
 * A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
 *
 * @param {TreeNode} root
 * @return {number}
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

//// recursive - DFS
// var maxDepth = function (root) {
//   if (root == null) return 0;

//   let left = maxDepth(root.left);
//   let right = maxDepth(root.right);

//   return Math.max(left, right) + 1; // adding one to act out a counter as we traverse down
// };

//// Bredth First Search uses a queue. Adds each level's children to queue and keep track of level count
// var maxDepth = function (root) {
//   if (root == null) return 0;
//   let queue = [];
//   let level = 0;

//   // add root to queue
//   queue.push(root);

//   //loop through queue
//   while (queue.length) {
//     // loop through each item in queue (child level)
//     for (let i = 0; i < queue.length; i++) {
//       let node = queue.shift();
//       // add left and right nodes to queue to be checked for children
//       if (node.left != null) {
//         queue.push(node.left);
//       }
//       if (node.right != null) {
//         queue.push(node.right);
//       }
//     }
//     // after each check, add the levels
//     level += 1;
//   }

//   return level;
// };

// pre-Order DFS uses a stack
var maxDepth = function (root) {
  // add node to stack with its depth
  const stack = [[root, 1]];
  let maxLevel = -Infinity;

  // loop through the stack, removing the parent, and adding it children to the stack
  while (stack.length) {
    let [node, depth] = stack.pop();

    // add left and right child to stack to continue the process, and keeping track of the depth
    if (node != null) {
      maxLevel = Math.max(maxLevel, depth);
      stack.push([node.left, depth + 1]);
      stack.push([node.right, depth + 1]);
    }
  }

  // once the leafs reach null, the stack with be empty, return observed max level

  return maxLevel;
};

const tree1 = new TreeNode(
  3,
  new TreeNode(9, null, null),
  new TreeNode(20, new TreeNode(15, null), new TreeNode(7, null))
);

console.log(maxDepth(tree1));

const tree2 = new TreeNode(1, null, new TreeNode(2, null, null));

console.log(maxDepth(tree2));
