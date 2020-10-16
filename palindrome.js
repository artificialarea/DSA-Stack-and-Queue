class _Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

class Stack {
    constructor(){
        this.top = null
    }

    push(data){
        if (this.top === null){
            this.top = new _Node(data, null)
            return;
        }
        const node = new _Node(data, this.top)
        this.top = node

        //why not just the node.data like with pop()?
    }

    pop(){
        const node = this.top
        this.top = node.next
        return node.data
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
        return stack.top.data;
    }

}


function is_palindrome(s) {
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    const stack = new Stack
    // console.log(s)
    for (let i=0; i < s.length; i++){
        stack.push(s.charAt(i))
    }
// console.log(JSON.stringify(stack, null, 2))
    for (let i=0; i < s.length; i++){
        let curLetter = stack.pop()
        // console.log(curLetter)
        if (curLetter !== s[i]) {
            return false;
        }
    }
    return true;
}

// console.log(JSON.stringify(is_palindrome('dad'), null, 2))

// True, true, true, false
console.log(is_palindrome("dad"));
console.log(is_palindrome("A man, a plan, a canal: Panama"));
console.log(is_palindrome("1001"));
console.log(is_palindrome("Tauhida"));