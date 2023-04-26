// Node.js program to demonstrate the
// new URL() method

// Using require to access url module
const url = require('url');
const parseURL = url.parse(
'https://geeksforgeeks.org:3000/p/a/t/h?query=string#hash');

console.log("1 =>", parseURL)

// Prints parsed URL
const newUrl1 = new URL('https://gfg.com');

// prints https://xn--g6w251d/
console.log("2 =>", newUrl1.href)

const myURL = new URL('/alfa',
	'https://akash.org/');
console.log("3 =>", myURL.href)

// https://akash.org/alfa
let newUrl3 = new URL('http://Gfg.com/',
	'https://gfg.org/');

// Prints http://gfg.com/
console.log("4 =>", newUrl3.href)

newUrl4 = new URL('https://Gfg.com/',
	'https://gfg.org/');

// Prints https://gfg.com/
console.log("5 =>", newUrl4.href)

newUrl5 = new URL('foo://Geekyworld.com/',
	'https://geekyworld.org/');
// prints foo://Geekyworld.com/
console.log("6 =>", newUrl5.href)

newUrl6 = new URL('http:Akash.com/',
	'https://akash.org/');
// prints http://akash.com/
console.log("7 =>", newUrl6.href)

newUrl10 = new URL('http:Chota.com/',
	'https://bong.org/');
// prints http://bong.com/
console.log("8 =>", newUrl10.href)

newUrl7 = new URL('https:Chota.com/',
	'https://bong.org/');
// prints https://bong.org/Chota.com/
console.log("9 =>", newUrl7.href)

newUrl8 = new URL('foo:ALfa.com/',
	'https://alfa.org/');

// Prints foo:ALfa.com/
console.log("10 =>", newUrl8.href)
