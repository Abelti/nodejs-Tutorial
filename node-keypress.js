const readline = require('node:readline'); //import the readline module from node.js
//readline module is used for reading of input streams line by line

readline.emitKeypressEvents(process.stdin);
//emitKeypressEvents is a method that emits a keypress event
//the parameter is the standard input (stdin) from the process module of node.js

process.stdin.setRawMode(true);
//a boolean method for having an input read character by character singularly
//control + c will not kill the terminal in this case hence the combination is not recognized
//for that we will write an if statement to kill the terminal using control + c keys

process.stdin.on('keypress', (str, key) => {
    
    if (key.ctrl && key.name === 'c') {
        process.exit();
    }

    else {
        console.log(`You pressed the "${str}" key`);
        console.log();
        console.log(key);
        console.log();
    }
});

console.log('Press any key...');