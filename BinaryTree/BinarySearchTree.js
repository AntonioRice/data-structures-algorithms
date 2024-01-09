/** 
None linear data structure
Will not contain any loops or cycles
Quicker than linear data structures
Heirachical representation of data
Dom, chatbot, file systems

Terminology: 
Root Node - Node from which tree originates, do not have a parent
Parent Node - Immediate Predecessor of a node
Child Node - Immediate successor of a node
Leaf - Nodes that do not have any child nodes
Siblings - Nodes that have the same parents
Ancestor - Parents parent
Path - The squence of nodes edges from one node to another
Distance - The number of edges along the shortest path between two nodes

Node Specific properties:
Degree - total number of child nodes it has
Depth - The number of edges from the root to that node
Height - The number of edges from the deepest leaf to that node 

Most popular tree:
Searching/Sorting/impent abstract data types lookup tables and priority queues
Binary Tree - Each node has at MOST 2 child nodes referred to a left/right child
Binary Search trees (BTS) - In addition to BT, the value of the left nodes node must be smaller that the parent. The value of the right node must be larger than the parent node. 

Operations:
Insertion - To add node to the tree
Search - To find a node given its value
DFT & BFS - To visit or traverse all nodes in the tree
Deletion - remove a node given its value

Traversals:

Depth First Search (DFS) - Starts at the root node, visits all nodes on left subtree, then all nodes on right subtree (Does path exist problems, uses less memory but can get slow)
* Pre-Order - Read the data of the node, visit the left subtree, visit the right subtree
* Inorder - Visit the left subtree, read the  detail of node, visit right subtree
* Postorder - visit the left subtree, visit the right subtree, read the details of the node

Breadth First Search (BFS) - Exploring each level before proceeding to the next (Shortest Path, closer Nodes, but uses more memory)
*Create a queue, enqueue the root node, as long as the node exists: 
*Dequeue the node from the front, Read the node's value, enqueue the node's left child if exist, enqueue the node's right child if exist

**/

// Implementation
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null; // When a tree is emptry, root points a null
  }
  isEmpty() {
    return this.root === null;
  }
  insert(value) {
    const newNode = new TreeNode(value);
    if (this.isEmpty()) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }
  insertNode(root, newNode) {
    if (newNode.value < root.value) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }
  search(root, value) {
    if (!root) {
      return false;
    } else {
      if (root.value === value) {
        return true;
      } else if (value < root.value) {
        return this.search(root.left, value);
      } else {
        return this.search(root.right, value);
      }
    }
  }
  //dfs -> start with parent and go let to right
  preOrder(root, list) {
    if (root) {
      // console.log(root.value);
      list.push(root.value);
      this.preOrder(root.left, list);
      this.preOrder(root.right, list);
    }
    return list;
  }
  //dfs -> returns results in order (traversing all the way left and then right)
  inOrder(root, list) {
    if (root) {
      this.inOrder(root.left, list);
      // console.log(root.value);
      list.push(root.value);
      this.inOrder(root.right, list);
    }
    return list;
  }
  //dfs -> starts with children first
  postOrder(root, list) {
    if (root) {
      this.postOrder(root.left, list);
      this.postOrder(root.right, list);
      // console.log(root.value);
      list.push(root.value);
    }
    return list;
  }
  //bfs
  levelOrder() {
    //Use optimized queue
    const queue = [];
    queue.push(this.root);
    while (queue.length) {
      let curr = queue.shift();
      console.log(curr.value);
      if (curr.left) {
        queue.push(curr.left);
      }
      if (curr.right) {
        queue.push(curr.right);
      }
    }
  }
  min(root) {
    if (!root.left) {
      return root.value;
    } else {
      return this.min(root.left);
    }
  }
  max(root) {
    if (!root.right) {
      return root.value;
    } else {
      return this.max(root.right);
    }
  }
  delete(value) {
    this.root = this.deleteNode(this.root, value);
  }

  deleteNode(root, value) {
    if (root === null) {
      return root;
    }
    if (value < root.value) {
      root.left = this.deleteNode(root.left, value);
    } else if (value > root.value) {
      root.right = this.deleteNode(root.right, value);
    } else {
      if (!root.left && !root.right) {
        return null;
      }
      if (!root.left) {
        return root.right;
      } else if (!root.right) {
        return root.left;
      }
      root.value = this.min(root.right);
      root.right = this.deleteNode(root.right, root.value);
    }

    return root;
  }
}

const bst = new BinarySearchTree();
// console.log(bst.isEmpty());
bst.insert(9);
bst.insert(4);
bst.insert(1);
bst.insert(6);
bst.insert(20);
bst.insert(15);
bst.insert(170);
// console.log(bst.search(bst.root, 10));
// console.log(bst.search(bst.root, 7));
console.log(bst.postOrder(bst.root, []));
console.log(bst.preOrder(bst.root, []));
console.log(bst.inOrder(bst.root, []));
// bst.preOrder();
// bst.postOrder();
// bst.levelOrder();
// console.log(bst.min());
// console.log(bst.max());
// console.log(bst.height(bst.root));

module.exports = BinarySearchTree;
