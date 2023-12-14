function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

function generateTreeFromArray(arr, inputClass, inputTreeNode) {
  if (!arr.length) {
    return null;
  }

  const root = inputClass ? new inputTreeNode(arr[0]) : new TreeNode(arr[0]);
  const queue = [root];
  let index = 1;

  while (index < arr.length) {
    const current = queue.shift();

    if (arr[index] !== null) {
      current.left = inputClass ? new inputTreeNode(arr[index]) : new TreeNode(arr[index]);
      queue.push(current.left);
    }
    index++;

    if (index < arr.length && arr[index] !== null) {
      current.right = inputClass ? new inputTreeNode(arr[index]) : new TreeNode(arr[index]);
      queue.push(current.right);
    }
    index++;
  }

  return root;
}

module.exports = generateTreeFromArray;
