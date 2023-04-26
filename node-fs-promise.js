const { error } = require('node:console');
const fs = require('node:fs/promises');

async function readFile () {
    try {
        const data = await fs.readFile('file.txt', 'utf-8');
        console.log('1' + data);
    }
    catch (err) {
        console.log(err);
    }
};

readFile();

fs.readFile('file.txt', 'utf-8')
.then((data) => console.log(data))
.catch((error) => console.log(error));