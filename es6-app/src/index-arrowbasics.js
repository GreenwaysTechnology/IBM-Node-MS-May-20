//Arrow function : replacment of es 5 function literals


// pattern 1: simple arrow

// let hello = function () {
//     console.log('hello');
// }
let hello = () => {
    //function body
    console.log('hello');
}
hello();
//pattern 2: only one line of body,remove {}
let hai = () => console.log('hai');
hai();
//pattern 3: parameters and args : multi parameter with default args
let add = (a = 1, b = 2) => {
    let res = a + b;
    console.log(res);
}
add(39, 78)
//Pattern 4;single parameter without default args,drop ()
let greet = message => console.log(message);
greet('Hello')
//pattern 4: return values
let getValue = () => {
    return 100;
}
console.log(getValue());
//pattern 5: only return, no more body : remove {} and return statement
let getName = () => "Subramanian";
console.log(getName());
////pattern 6: args and return: single arg no default args, return the same
let getStatus = status => status;
console.log(getStatus(true))


