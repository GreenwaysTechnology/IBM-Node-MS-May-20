const fs = require('fs');
const path = require('path');


console.log(__dirname)
console.log(__filename)

//const filePath = './src/assets/info.txt';
//const filePath = __dirname + '/assets/info.txt';
const filePath = path.join(__dirname,'assets/info.txt')
const config = {
    encoding: 'UTF-8'
}

console.log('start');
const data = fs.readFileSync(filePath, config);
console.log(data);
console.log('end')