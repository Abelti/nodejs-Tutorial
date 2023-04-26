const os = require('node:os');

console.log(os.hostname());

console.log(os.availableParallelism());

console.log(os.arch())

console.log(os.cpus());

console.log(os.totalmem());

console.log(os.freemem())

console.log(os.type());

console.log(os.version());

console.log(os.machine());

console.log(os.networkInterfaces());

console.log(os.platform());

console.log(os.release());

console.log(os.tmpdir());

console.log(os.uptime()); // in seconds

console.log(os.userInfo());

console.log(os.homedir());