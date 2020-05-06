//async programming :timers

function hello() {
    console.log('hello')
}

hello();
//async

// setTimeout(function () {
//     console.log('i am delayed')
// }, 1000);

setTimeout(() => {
    console.log('i am delayed')
}, 1000);

const callback = function () {
    console.log('i am delayed 2')

}
setTimeout(callback, 3000);

hello()
console.log('something ...')
///////////////////////////////////////////////////////////////////////////////
// function connect(cb) {
//     //timer
//     // setTimeout(cb, 1000); 
//     setTimeout(() => {
//         cb();
//     }, 1000)
// }
// connect(() => {
//     console.log('HTTP server')
// })
//after time out , i want to return data
function connect(cb) {
    //timer
    // setTimeout(cb, 1000); 
    let fakeData = 'Web Server';

    setTimeout(() => {
        cb(fakeData);
    }, 1000)
    //setTimeout(cb, 1000, fakeData);
}
//connect(func)===>stack==>excution starts===setTimeout---|never creates--
//|register callback---move control to libuv| control is returned to main process
//js engine

//libuv---will schedule the job in os | thread is running---emit event(timer)--->
//libuv(event queue)----loop runs--check whether current stack is empty--if yes
//then push into stack==>frame is created==>result is returned to client
connect(message => {
    console.log(message)
})



