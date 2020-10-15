// Queue implemented using a singly linked list.

class _Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
    }

    // FIFO (First In First Out) 

    // Insertion
    enqueue(data) {
        const node = new _Node(data);

        if (this.first === null) {
            this.first = node;
        }

        if (this.last) {
            this.last.next = node; 
        }
        //make the new node the last item on the queue
        this.last = node;
    }

    // Removal
    dequeue() {
        //if the queue is empty, there is nothing to return
        if (this.first === null) {
            return;
        }

        const node = this.first;
        // assign first node to the next node in the list
        // ergo removing the first node because it no longer has a reference pointer (can I refer to this as a pointer as it is not a linked list?)
        this.first = this.first.next;
        // if this is the last item in the queue
        if (node === this.last) {
            this.last = null;
        }
        return node.value;
    }
}

module.exports = {
    _Node,
    Queue,
}