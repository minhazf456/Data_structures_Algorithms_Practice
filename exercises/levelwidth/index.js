// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
    const arr = [root, 's']; // s is a stopper value it can be anything null or undefined. we used to recognise the at the end of an array.
    counter =[0];

    while (arr.length >1) {
        const node = arr.shift(); // will take the first element of array
       
        if (node === 's') {
            counters.push(0);
            arr.push('s');  // put that back at the end of the arrray
          } else {
            arr.push(...node.children);
            counters[counters.length - 1]++;
          }
        }
      
        return counters;
}

module.exports = levelWidth;
