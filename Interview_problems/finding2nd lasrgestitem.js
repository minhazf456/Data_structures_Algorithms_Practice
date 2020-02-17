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
          return findLargest(rootNode,)
      }
  }
