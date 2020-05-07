const { fetchFileContent, fetchFileContentPromise } = require('./services/FileService');


const { log } = console;

//method : callback driven
function fetchFileCallback() {
    log('callback based')
    fetchFileContent((err, data) => {
        if (err) throw err;
        console.log(data);
    });
}
function fetchFilePromise() {
    log('promise based')
    fetchFileContentPromise()
        .then(log)
        .catch(log)
        .finally(() => log('file operation done!'))
}
async function fetchFileAsync() {
    log('async await based')
    try {
        const filecontent = await fetchFileContentPromise()
        log(filecontent);
    }
    catch (err) {
        log(err)
    }
    finally {
        log('file operation done!')
    }

}

fetchFileCallback();
fetchFilePromise()
fetchFileAsync();

