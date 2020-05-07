//fs.js : non block io
const fs = require('fs');

//write file
const writeFilepath = './src/assets/info-copy.txt';

const data = 'This is node IO file!';

console.log('start')

fs.writeFile(writeFilepath, data, function (err) {
    if (err) throw err;
    console.info(`The file ${writeFilepath} has been written!`)
});
console.log('end')