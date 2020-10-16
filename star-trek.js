const { 
    Stack, 
    stackHelpers 
} = require('./stack-class');

const stackStarTrek = new Stack;

let addItems = ['Kirk', 'Spock', 'McCoy', 'Scotty'];

addItems.forEach(item => stackStarTrek.push(item));


console.log(stackHelpers.peek(stackStarTrek));
console.log(stackHelpers.display(stackStarTrek));
console.log(stackHelpers.isEmpty(stackStarTrek));

stackStarTrek.pop();
stackStarTrek.pop();
stackStarTrek.pop();
stackStarTrek.pop();

console.log(stackHelpers.display(stackStarTrek));
console.log(stackHelpers.isEmpty(stackStarTrek));