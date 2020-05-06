
const { log } = console;
const getUser = () => {
    let fakeData = {
        id: 1,
        name: 'admin'
    }
    // let fakeData = null;//false
    //biz logic
    if (fakeData) {
        // setTimeout(resolve, 1000, fakeData);
        return Promise.resolve(fakeData);
    } else {
        // setTimeout(reject, 1000, { code: 500, message: 'User not found' });
        return Promise.reject({ code: 500, message: 'User not found' });
    }
};

const login = user => {
    //biz logic
    if (user.name === 'admin') {
        // setTimeout(resolve, 1000, { code: 200, message: 'Login Success' });
        return Promise.resolve({ code: 200, message: 'Login Success' });

    } else {
        // setTimeout(reject, 1000, { code: 500, message: 'Login failed' });
        return Promise.reject({ code: 500, message: 'Login failed' });

    }
};

const showPage = loginStatus => {
    //biz
    if (loginStatus.code === 200) {
        //setTimeout(resolve, 1000, 'You are Administrator');
        return Promise.resolve('You are Administrator');

    } else {
        // setTimeout(reject, 1000, 'You are not Administrator');
        return Promise.reject('You are not Administrator');

    }
}
//
// getUser(user => {
//     //call login function with three parameters
//     login(user, status => {
//         showPage(status, isAdmin => {
//             console.log(isAdmin)
//         }, err => console.log(err));
//     }, err => console.log(err));
// }, err => console.log(err));

// getUser()
//     .then(user => {
//         return login(user) //returns promise
//     })
//     .then(status => {
//         return showPage(status) //returns Promise
//     })
//     .then(log)
//     .catch(log)
//     .finally(() => console.log('Program is terminted'))


getUser()
    .then(user => login(user))//returns promise
    .then(status => showPage(status)) //returns Promise
    .then(log)
    .catch(log)
    .finally(() => console.log('Program is terminted'))