function deleteNOde(NodeToDelete) {
    //  get the input's node next node , the one we want to skip to

    const nextNode = NodeToDelete.next;

    if (nextNode) {
        // replace the input node's value and pointer with the next
        // node's vlue and pointer. 
        // the previous node now effectively skips over the input's Node.

        NodeToDelete.value = nextNode.value;
        NodeToDelete.next = nextNode.next;
    }

    else {
        // Eep , we are trying to delete the last node
        throw new Error ("can't delete the last node with this technique")
    }
}