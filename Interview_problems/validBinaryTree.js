class BinaryTreeNode {
    constructor(value) {
        this.value =value;
        this.left =null;
        this.right =null;
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
 function isBinarySearchTree(treeRoot)

// start at the root, with an arbitrarily low  lower bound
// and the arbitrarily high upper bound

const nodeAndBoundsStack= [];
nodeAndBoundsStack.push({
    node: treeRoot,
    lowerBound: Number.NEGATIVE_INFINITY,
    upperBound: Number.POSITIVE_INFINITY,
  });

//   depth-first Traversal
  while (nodeAndBoundsStack.length) {
    const { node, lowerBound, upperBound } = nodeAndBoundsStack.pop();

    // If this node is invalid, we return false right away
    if (node.value <= lowerBound || node.value >= upperBound) {
      return false;
    }

    if (node.left) {

      // This node must be less than the current node
      nodeAndBoundsStack.push({
        node: node.left,
        lowerBound,
        upperBound: node.value,
      });
    }

    if (node.right) {

      // This node must be greater than the current node
      nodeAndBoundsStack.push({
        node: node.right,
        lowerBound: node.value,
        upperBound,
      });
    }
  }

  // If none of the nodes were invalid, return true
  // (At this point we have checked all nodes)
  return true;
}





