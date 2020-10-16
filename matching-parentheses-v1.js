const { 
    Stack,
    stackHelpers,
} = require ('./stack-class');


function parenthesesChecker(exp) {
    console.log(exp);
    const stack = new Stack;

    // const regex = /[(]/g; 
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match

    let openingIndex = [];
    let index = 0;
    for (let char of exp) {
        // Add 
        if (char.match(/[(]/g)) {
            stack.push(char);
            openingIndex.push(index);
        }
        // console.log(openingIndex);
        // console.log(stackHelpers.display(stack));
        if (char.match(/[)]/g)) {
            if (!stackHelpers.peek(stack) || stackHelpers.peek(stack).data !== '(') {
                return `ERROR: ')' at index ${index} -- missing open parentheses '('`;
            } else {
                // remove associated instance of '(' from the top of the stack 
                stack.pop();
                // remove index instace from end of array (associated to stack.top item)
                openingIndex.pop();
            }
        }
        index++;
    }
    
    if (!stackHelpers.isEmpty(stack)) {
        return `ERROR: '(' at index ${openingIndex[openingIndex.length - 1]} -- missing closed parentheses ')'\n`;
    }

    return 'All parentheses are closed \n';
}

let addExpressions = [
    '(((( ))))',
    '(((( )))',
    '(((( ))',
    '(((( )',
    '(( )))))))))))))))))))))))',
];

addExpressions.forEach(exp => {
    console.log(parenthesesChecker(exp));
});
