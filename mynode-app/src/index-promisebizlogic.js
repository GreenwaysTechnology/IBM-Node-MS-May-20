

const { log } = console;

//success only
const getSuccess = () => Promise.resolve('Success')
getSuccess().then(log);

//rejection only
const getError = () => Promise.reject('Something went Wrong');
getError().catch(log);

//how to return both success and failure : biz logic
const getUser = () => {
    let fakeData = {
        id: 1,
        name: 'admin'
    }
   // let fakeData = null;
    //biz logic
    if (fakeData) {
        return Promise.resolve(fakeData)
    } else {
        return Promise.reject({ code: 500, message: 'User Not Found!' })
    }
}
//get User 
getUser()
    .then(log)
    .catch(log)
    .finally(() => { log('program is terminated') })
