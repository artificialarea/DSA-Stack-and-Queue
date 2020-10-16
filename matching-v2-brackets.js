const { 
    Stack,
    stackHelpers,
} = require ('./stack-class');


// POST-SCRIPT: REFACTOR?
// The problem with this approach is that any character in the expression that isn't a bracket will result in a return of false, so it's not terribly useful as a language parser.
// Could this be due to having abandoned match(regex) per v1?
// Also, why do we have a faux-stack array instead of a bonafide stack? 


function bracketChecker(exp) {
    console.log(exp);

    // const stack = new Stack;
    const stack = [];   // but it's not a real stack, it's an array.

    // map instead of regex
    let map = {
        '(': ')',
        '[': ']',
        '{': '}',
    };

    // loop over characters in the string
    for (let i = 0; i < exp.length; i++) {
        // If character is an opening type of bracket, add it to the stack
        if (exp[i] === '(' || exp[i] === '[' || exp[i] === '{') {
            stack.push(exp[i]);
        }
        //  If that character is a closing brace, pop from the stack, which will also reduce the length of the stack each time a closing bracket is encountered.
        else {
            let lastChar = stack.pop();

            // If the popped element from the stack, which is the last opening brace doesn’t match the corresponding closing brace in the map, then return false
            if (exp[i] !== map[lastChar]) {
                console.log('brackets don\'t match');
                return false;
            }
        }
    }

    // By the completion of the for loop after checking all the brackets of the str, at the end, if the stack is not empty then fail
    if (stack.length !== 0) {
        console.log('stack length isn\'t empty, it\'s: ', stack.length, stackHelpers.display(stack));
        return false;
    }

    return true;
}

let addExpressions = [
    '(){}[]',
    '([{ }])',
    '([ )]',
    '([ 8 * 2 ])',
];

addExpressions.forEach(exp => {
    console.log(bracketChecker(exp), '\n');
});
