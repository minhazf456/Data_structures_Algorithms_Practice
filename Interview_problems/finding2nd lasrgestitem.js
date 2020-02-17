class BinaryTreeNode {
    constructor(value) {
      this.value = value;
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

  // first solution

  //getting the right most element in code

  function findLargest(rootNode) {
      if (!rootNode){
          throw new Error("Tree must have at least one node")
      }
      if (rootNode.right) {
          return findLargest(rootNode.right);
      }
      return rootNode.value:
  }

  function findSecondLargest(rootNode){
      if (!rootNode || (!rootNode.left && !rootNode.right)) {
          throw new Error ("Tree must have at least 2 nodes")
      }
// case: now we are currently at the largest element, and largest has a left subtree,
// so second largest is largest is said subtree
if (rootNode.left && !rootNode.right){
    return findLargest(rootNode.left);
}

// Case: we are at the largest, and largest has no left subtree
// so 2nd largst is largest in said subtree

if (rootNode.right &&  ! rootNode.right.left && ! rootNode.right.right){
    return rootNode.value;
}

// otherwise step right 
return findSecondLargest(rootNode.right)
}
