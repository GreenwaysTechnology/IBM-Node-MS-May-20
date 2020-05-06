//functions
//declaration
/**
 * normal delcaration
 * literal declaration
 */
//function declaration

function sayHello() {
    //function body
    console.log('hello');
}
//invoke function
sayHello();

//some logic inside function
function calculator() {
    let a = 10;
    let b = 90;
    let result = a + b;
    console.log(`Result ${result}`)
}
calculator();
//parameters and args
//a and b are args
//es 6 has feature called "default args"
function add(a = 1, b = 1) {
    let result = a + b;
    console.log(`Result ${result}`)
}
//10,10 are parameters
add(10, 10)
add();//undefined,undefined

//i want to pass more parameters , i dont this in advance
//Rest operator
function logger(...logs) {
    // console.log(arguments)
    console.log(logs)
}
logger('msapp', 'warning')
logger('msapp')
logger('msapp', 'y', 'x', 'err')
//////////////////////////////////////////////////////////////////////////
// function multiply() {
//     return 10 * 10;

// }
function multiply(a = 1, b = 1) {
    return a * b;

}
console.log(multiply(34, 89))

function isValid() {
    return; // undefined==false
}
isValid() ? console.log('Valid') : console.log('InValid')








