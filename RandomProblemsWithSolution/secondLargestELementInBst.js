/// creating class

class BinaryTreeNode {
  constructor(vlaue) {
    this.value = this.value;
    this.left = null;
    this.right = null;
  }

  insertLeft(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
  }
  insertRight(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
  }
}

//lets find the largest element first

function findLargest(rootNode) {
  let current = rootNode;
  while (current) {
    if (!current.right) 
      return current.value;
    current = current.right
  }
}

// lets find the second largest element

function secondLargestelement(rootNode) {
  if (!rootNode || (!rootNode.left && !rootNode.right)) {
    throw new Error("Tree must have at least 2 nodes")
  }

  let current = rootNode;
  while (current) {
    // Case: current is largest and has a left subtree 2nd largest is the largest in
    // that subtree
    if (current.left && !current.left) {
      return findLargest(current.left)
    }

    // case current is parent of largest and largest has no children

    if (current.right && !current.right.left && !current.right.left) {
      return current.value;
    }
    current = current.right;

  }

}