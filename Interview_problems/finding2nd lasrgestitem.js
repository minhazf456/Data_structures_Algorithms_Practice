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



//   function findLargest(rootNode) {
//       if (!rootNode){
//           throw new Error("Tree must have at least one node")
//       }
//       if (rootNode.right) {
//           return findLargest(rootNode.right);
//       }
//       return rootNode.value:
//   }

//   function findSecondLargest(rootNode){
//       if (!rootNode || (!rootNode.left && !rootNode.right)) {
//           throw new Error ("Tree must have at least 2 nodes")
//       }
// // case: now we are currently at the largest element, and largest has a left subtree,
// // so second largest is largest is said subtree
// if (rootNode.left && !rootNode.right){
//     return findLargest(rootNode.left);
// }

// // Case: we are at the largest, and largest has no left subtree
// // so 2nd largst is largest in said subtree

// if (rootNode.right &&  ! rootNode.right.left && ! rootNode.right.right){
//     return rootNode.value;
// }

// // otherwise step right 
// return findSecondLargest(rootNode.right)
// }

// Okay awesome. This'll work. It'll take O(h) time (where h is the height of the tree) and O(h) space.
// But that h space in the call stack  is avoidable.

// 2nd solution~~~~~~~~~~~~~~~~~~~~~~~


//  The largest value is simply the "rightmost" one, so we can get it in one walk down the tree by traversing rightward until we don't have a right child anymore
function findLargest(rootNode) {
    current = rootNode;
    while(current) {
        if (! current.right) return current.value;
        current= current.right;
    }
}

    function findSecondLargest(rootNode) {
        if (!rootNode || (!rootNode.left && !rootNode.right)) {
          throw new Error('Tree must have at least 2 nodes');
        }
         let current = rootNode;

         while(current){
             // case: current is the largest and has left subtree
             // 2nd largest is the largest in that subtree

             if (current.left && !current.right){
                 return findLargest(current.left)
             }

             // case: caurrent is the parent of largest and largest has no children 
             // so current is the second largest

             if (current.right && ! current.right.left && !current.right.right){
                 return current.value;
             }
             current= current.right;

         }
        }
