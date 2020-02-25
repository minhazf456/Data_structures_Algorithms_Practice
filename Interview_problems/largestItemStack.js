class MaxStack {
    constructor() {
        this.stack = new stack();
        this.maxesStack = new this.stack()
    }

    // add a new item to the top of our stack. If a item is greater than 
    // or equal to the last item in in maxestack, its the
    //new max. SO we will add it to the maxesstack

    push(item) {
        this.stack.push(item);
        if (this.maxesStack.peek() == null || item >= this.maxesStack.peek()) {
            this.maxesStack.push(item);

        }
    }

    // quals and return the top item from our stack. if it equals
    // the top item in maxesStack, they musht have been pushed it together
    // so will pop it out of maxStack too

    pop() {
        const item = this.stack.pop();
        if (item == this.maxesStack.peek()){
            this.maxesStack.pop();
        }
        return item;
    }

    // the last item in the maxStack is the max item in our stack

    getMax(){
        return this.maxesStack.peek();
    }
}