class _Node {
    constructor(value, next){
        this.value = value
        this.next = next
    }
}

class StackStarTrek {
    constructor(){
        this.top = null
    }

    push(value){
        if (this.top === null){
            this.top = new _Node(value, null)
            return;
        }
        const node = new _Node(value, this.top)
        this.top = node

        //why not just the node.value like with pop()?
    }

    pop(){
        const node = this.top
        this.top = node.next
        return node.value
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
        return stack.top.value;
    }

}

const starTrek = new StackStarTrek

starTrek.push('Kirk');
starTrek.push('Spock');
starTrek.push('McCoy');
starTrek.push('Scotty');

// console.log(starTrek)
// console.log(JSON.stringify(starTrek, null, 4))

// console.log(stackHelpers.peek(starTrek));
console.log(stackHelpers.isEmpty(starTrek));
console.log(stackHelpers.display(starTrek));

starTrek.pop();
starTrek.pop();
console.log(stackHelpers.display(starTrek));