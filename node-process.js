const process = require('node:process');
const fs = require('fs');

fs.createReadStream(__filename).pipe(process.stdout); // display the content of the file given

console.log(process.platform());
console.log(process.argv) // argv is an array containing the properties passed to node process
//first element is the absolute path to the node
// second element is the file currently running

// setTimeout(() => { 
//     process.stdout.write('Executed after 1000 ms' + '\n'); 
//     }, 1000) // executes and returns the result after 1 second
// setInterval(() => { 
//     process.stdout.write('Executed after 1000 ms' + '\n'); 
//     }, 1000) // it will run forever

console.log(process.pid) // returns the process id
console.log(process.platform); // returns the platform same as OS.platform
console.log(process.version); // returns the node version
console.log(process.title); // returns the title of the current process
console.log(process.execPath); // returns the executable process path
console.log(process.argv); // returns the arguments passed to the process command
console.log(process.env)

// process.nextTick(() => {  
//     console.log('Got triggered in the next iteration of event loop');  
//  });  
//  setTimeout(() => {  
//     console.log("Even after nextTick is executed");  
//  }, 0);  
//  console.log("First text to be printed"); 


//functions

console.log(process.cwd()); // returns current working directory
console.log(process.hrtime()); // returns the current high-resolution real-time in a second, nano-second array
console.log(process.memoryUsage()); // returns an object having information of memory usage
console.log(process.uptime()); //returns the current node.js process uptime in seconds
console.log(process.kill()); // to kill a given process