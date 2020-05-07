const fs = require('fs');
const path = require('path');


//const path = './src/assets/info.txt';

const filePath = path.join(__dirname, 'assets/info.txt')
const config = {
    encoding: 'UTF-8'
}

class FileService {
    constructor() {

    }
    //api callback based file read api
    fetchFileContent(handler) {
        fs.readFile(filePath, config, handler);
    }
    fetchFileContentPromise() {

        //return promise
        return new Promise((resolve, reject) => {

            fs.readFile(filePath, config, (err, data) => {

                if (err) {
                    reject(err);
                }
                resolve(data);

            });
        });
    }
}

module.exports = new FileService();