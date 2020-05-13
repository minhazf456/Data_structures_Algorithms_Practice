
// You have a linked list ↴ and want to find the kkth to last node.
class LinkedList {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

function kthTTheLastNode (k, head){

   if (k<1){
       throw new Error(`Impossible to find less than first to last node: ${k}`);
   }

   ///   // STEP 1: get the length of the list
 // Start at 1, not 0
 // else we'd fail to count the head node!
 let listLength = 1;
 let currrentNode = head;

 // traverse the whole list, counting all the nodes to get the list of length

while(currrentNode.next){
   currrentNode = currrentNode.next;
   listLength +=1;
}
 // If k is greater than the length of the list, there can't
 // be a kth-to-last node, so we'll return an error!
 if (k > listLength) {
   throw new Error(`k is larger than the length of the linked list: ${k}`);
 }

   // STEP 2: walk to the target node
 // Calculate how far to go, from the head,
 // to get to the kth to last node

 const howFarToGo = listLength - k;
 currrentNode = head;
 for (i = 0; i < howFarToGo; i ++){
     currrentNode = currrentNode.next;
 }

 return currrentNode;

}