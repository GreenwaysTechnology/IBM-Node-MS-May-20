//async programming patterns:


//callback based
//In any application, we need to handle errors.
//how to handle errors in async programming

// success,failure ===>resolve and reject

// const getUser = callback => {
//     let fakeData = {
//         id: 1,
//         name: 'admin'
//     }
//     setTimeout(callback, 1000, fakeData);
// }
// //get User 
// getUser(user => {
//     console.log(user)
// });


// biz logic with success and failure

const getUser = (resolve, reject) => {
    let fakeData = {
        id: 1,
        name: 'admin'
    }
    // let fakeData = null;//false
    //biz logic
    if (fakeData) {
        setTimeout(resolve, 1000, fakeData);
    } else {
        setTimeout(reject, 1000, { code: 500, message: 'User not found' });
    }
};

const login = (user, resolve, reject) => {
    //biz logic
    if (user.name === 'admin') {
        setTimeout(resolve, 1000, { code: 200, message: 'Login Success' });
    } else {
        setTimeout(reject, 1000, { code: 500, message: 'Login failed' });

    }
};

const showPage = (loginStatus, resolve, reject) => {
    //biz
    if (loginStatus.code === 200) {
        setTimeout(resolve, 1000, 'You are Administrator');
    } else {
        setTimeout(reject, 1000, 'You are not Administrator');
    }
}



//get User 
//getUser(user => console.log(user), err => console.log(err));

getUser(user => {
    //call login function with three parameters
    login(user, status => {
        showPage(status, isAdmin => {
            console.log(isAdmin)
        }, err => console.log(err));
    }, err => console.log(err));
}, err => console.log(err));