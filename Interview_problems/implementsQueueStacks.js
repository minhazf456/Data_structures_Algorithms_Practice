class QueueTwoStacks {
    constructor () {
        this.inStack = [];
        this.outStack = [];
    }
        enqueue(item) {
            this.inStack.push(item);
        }

        dequeue(item) {
            if ( this.outStack.length ===0){
                // move items from instack to outstack, reversing order

                while (this.inStack.length > 0){
                    const newwestStacItem = this.inStack.pop();
                    this.outStack.push(newwestStacItem);
                }

                // if outstack is still empty 

                if (this.outStack.length ===0){
                    throw new Error ("can't dequeue from empty queue!");
                }
            }
            return this.outStack.pop();
        }
    }

    // We can get O(m)  runtime for m calls. Crazy, right?
