// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.
// If the value isn't in the tree return null.

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  insert(data) { // some amount of data to insert our tree
    if (data < this.data && this.left) { // if the incoming data value is less then this data and there is already something
// assigned out to left property then I don't want to do anything else with this
      this.left.insert(data);
    } else if (data < this.data) { // 2nd case to check if there is no node to left side it will create node 
      this.left = new Node(data);
  // 3rd case along the right hand side we want to see if a node already exists there.
// If it does we'll pass this new value off to the insert method. On that note.  Otherwise we will create a new node and assign it to the right property.
    } else if (data > this.data && this.right) {
      this.right.insert(data);
    } else if (data > this.data) {
      this.right = new Node(data);
    }
  }

  contains(data) {
    if (this.data === data) { // 
      return this;
    }

    if (this.data < data && this.right) {
      return this.right.contains(data);
    } else if (this.data > data && this.left) {
      return this.left.contains(data);
    }

    return null;
  }
}

module.exports = Node;
