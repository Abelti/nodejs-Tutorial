const fs = require('node:fs');


//writeFile
//writeFileSync
//readFile
//readFileSync

console.log('First');

const myFile = fs.readFileSync('./NewText.txt', 'utf-8');
console.log('1' + ' ' + myFile);

console.log('Second');

const myFile2 = fs.readFile('./myText.txt', 'utf-8', (error, data) => {
        if (error) {
            console.log(error);
        }
        else {
            console.log(data);
        }
    });
console.log('Third');

fs.writeFile('./NewTextNew.txt', 'New text file',(error) => {
    if (error) {
        console.log(error);
    }
    else {
        console.log('The file was saved!');
    }
});


