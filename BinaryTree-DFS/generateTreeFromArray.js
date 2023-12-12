function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

function generateTreeFromArray(arr, index = 0) {
  if (index >= arr.length || arr[index] === null) {
    return null;
  }

  const root = new TreeNode(arr[index]);
  root.left = generateTreeFromArray(arr, 2 * index + 1);
  root.right = generateTreeFromArray(arr, 2 * index + 2);

  return root;
}

module.exports = generateTreeFromArray;
