class _Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

class Stack {

    constructor() {
        this.top = null;
    }

    push(data) {
        if (this.top === null){
            this.top = new _Node(data, null);
            return;
        }
        const node = new _Node(data, this.top);
        this.top = node;

        //why not just the node.data like with pop()?
    }

    pop() {
        const node = this.top;
        this.top = node.next;
        return node.data;
    }

    // Integrate method into class. Previously in stackHelpers.peek service object.
    // Preference?
    peek() {
        return this.top;
    }
}


const stackHelpers = {
    peek: function(stack) {
        return stack.top;
    },
    isEmpty: function(stack) {
        if (stack.top === null) return true;
        return false;
    },
    display: function(stack) {
        // array to hold item values
        let items = [];
        // make sure it's a stack and not empty
        if (stack.top === null) {
            return 'stack is empty';
        }
        // else, point to top for iterations
        if (stack.top) {
            stack = stack.top;
        }
        // General case: iterate over items until next is null (end)
        while (stack.next !== null) {
            items.push(stack.data);
            // set pointer to next node
            stack = stack.next;
        }
        // push the last item to our array
        items.push(stack.data);
        // return the values
        return items.join('');
        // return the values, joined with line breaks
        // return items.join('\n');
    },
};

module.exports = {
    _Node,
    Stack,
    stackHelpers,
}