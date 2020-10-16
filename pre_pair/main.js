const { Queue } = require("./queue");


function main() {
    let q = new Queue;

    q.enqueue('Tauhida');
    q.enqueue('Joe');
    q.enqueue('Tim');

    console.log(q.dequeue());

    q.enqueue('Alison');
    q.enqueue('Chris');

    console.log(q.dequeue());

    // display(q); // if had a service object helper
    console.log('q ', q);
    return q;
}

main();