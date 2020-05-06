//Promise constructor 

const { log } = console;

const getUser = () => {

    return new Promise((resolve, reject) => {
        //biz logic
        let fakeUser = {
            id: 1,
            name: 'admin'
        }
        if (fakeUser) {
            setTimeout(resolve, 1000, fakeUser);
        } else {
            setTimeout(reject, 1000, { code: 500, message: 'Error' })
        }

    });

}
getUser()
    .then(log)
    .catch(log)
