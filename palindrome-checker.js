const { 
    Stack,
    stackHelpers,
} = require ('./stack-class');

function is_palindrome(s) {
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');

    const stack = new Stack;

    for (let i=0; i < s.length; i++){
        stack.push(s.charAt(i));
        // console.log(stack.top.data);
    }

    // console.log(stackHelpers.display(stack));

    for (let i=0; i < s.length; i++){
        let curLetter = stack.pop();
        if (curLetter !== s[i]) {
            return false;
        }
    }

    return true;
}

// Should return: true, true, true, false
console.log(is_palindrome('dad'));
console.log(is_palindrome('A man, a plan, a canal: Panama'));
console.log(is_palindrome('1001'));
console.log(is_palindrome('Tauhida'));