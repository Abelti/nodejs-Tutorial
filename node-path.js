const path = require('node:path')
const process = require('node:process')

// console.log(__filename);
// console.log(__dirname);

// console.log(path.basename(__filename));
// console.log(path.basename('./node-os.JS'));
// console.log(path.basename(__dirname));

function test() {
path.extname('index.html');
console.log('1' + ' ' + path.extname('index.html'));
// Returns: '.html'

path.extname('index.coffee.md');
console.log('2' + ' ' + path.extname('index.coffee.md'));
// Returns: '.md'

path.extname('index.');
console.log('3' + ' ' + path.extname('index.'));
// Returns: '.'

path.extname('index');
console.log('4' + ' ' + path.extname('index'));
// Returns: ''

path.extname('.index');
console.log('5' + ' ' + path.extname('.index'));
// Returns: ''

path.extname('.index.md');
console.log('6' + ' ' + path.extname('.index.md'));
// Returns: '.md'
};

test();

// console.log(path.parse(__filename));

// console.log(path.isAbsolute(__filename));
// console.log(path.isAbsolute('./node-os.js'));

// console.log(path.delimiter)

// console.log(path.format({
//     root: 'D:\\',
//     dir: 'D:\\EthioBytes\\EB-Projects\\Node\\node_temp',
//     base: 'node-path.js',
//     ext: '.js',
//     name: 'node-path'
//   }));

//   console.log(path.sep);