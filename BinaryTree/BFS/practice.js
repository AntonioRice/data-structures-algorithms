const generateTreeFromArray = require("../generateTreeFromArray.js");

// DFS - recursion
const maxDepthDFS = (root) => {
  if (!root) return 0;

  return 1 + Math.max(maxDepthDFS(root.left), maxDepthDFS(root.right));
};

const root = generateTreeFromArray([1, 2, 3, null, 5, null, 4]);
// console.log(maxDepthDFS(root)); // 3

// DFS - iterate (stack)
const maxDepthDFS2 = (root) => {
  const stack = [[root, 1]];
  let result = 0;

  while (stack.length) {
    let [child, depth] = stack.pop();

    result = Math.max(result, depth);

    if (child.left) stack.push([child.left, depth + 1]);
    if (child.right) stack.push([child.right, depth + 1]);
  }

  return result;
};

// console.log(maxDepthDFS2(root)); // 3

// BFS - queue
const maxDepthBFS = (root) => {
  const queue = [root];
  let result = 0;

  while (queue.length) {
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const node = queue.shift();
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    result += 1;
  }

  return result;
};

// console.log(maxDepthBFS(root)); // 3
