class _Node {
    constructor(value, next){
        this.value = value
        this.next = next
    }
}

class StackStarTreck {
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

const starTreck = new StackStarTreck

starTreck.push('Kirk');
starTreck.push('Spock');
starTreck.push('McCoy');
starTreck.push('Scotty');

console.log(starTreck)
console.log(JSON.stringify(starTreck, null, 4))