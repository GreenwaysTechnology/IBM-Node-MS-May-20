//functtion literal
/**
 * in js function is value.
 * since it is value can be assigned to variable.
 * since it is value can be passed as parameter to another function
 * since it is value can be returned from another function.
 */
//function declaration using literal
//let is keyword
//a is variable
//10 is numeric literal
let a = 10;

//function is assigned into a variable , that variable can be used to invoke that
//function
let add = function (a = 1, b = 1) {
    let result = a + b;
    console.log(result);
}
add();

let multiply = function (a = 1, b = 1) {
    return a * b;
}
console.log(multiply(12,34))