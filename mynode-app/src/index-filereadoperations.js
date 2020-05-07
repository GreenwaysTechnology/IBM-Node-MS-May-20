//non blocking fs io
const fs = require('fs');


const path = './src/assets/info.txt';
const config = {
    encoding: 'UTF-8'
}

//callback based programming
console.log('start')
fs.readFile(path, config,  (err, data)=> {
    if (err) throw err;
    console.log(data);
})
console.log('end')
