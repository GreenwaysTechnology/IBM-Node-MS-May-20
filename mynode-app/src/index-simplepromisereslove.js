
//Promises

//Create Promise Object using factory apis
//Promises are by default async
const { log } = console;

//resolve
function getSuccess() {
    //return promise Object
    return Promise.resolve('Success');//New Promise Object
}
log('start')
// let result = getSuccess();
// //to get output
// result.then(res => console.log(res));
//code : builder pattern or command chain pattern
//"hello".toLocaleLowerCase().toUpperCase().trim()
//getSuccess().then(res => console.log(res));

//if single variable , that are going to print, you need not declare that variable
//getSuccess().then(console.log);
getSuccess().then(log);

log('end');
