class LinkedListNode {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }

  function containsCycle(firstNode){

    // start both runners ar the beginning

    let slowRunner = firstNode;
    let fastRunner = firstNOde;

    // untill we hit the end of the list

    while (fastRunner && fastRunner.next){
        slowRunner = slowRunner.next;
        fastRunner = fastRunner.next.next;

        // case : fast runner is about to lab slowRunner

        if (fastRunner===slowRunner){
            return true;
        }
    }
    // case : fast runner hit end of the list

    return false;

  }