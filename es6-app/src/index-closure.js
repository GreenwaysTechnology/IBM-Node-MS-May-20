//closure : if outer is terminated but still inner will access outter function variables
//and args.

function counter(seedvalue = 1) {

    //outer function variable
    let count = seedvalue;
    return function () {
        //access outter function variable: closure
        return count++;
    }
}
let inc = counter(5)
console.log(inc());
console.log(inc());
console.log(inc());
console.log(inc());
console.log(inc());
console.log(inc());
console.log(inc());
console.log(inc());
console.log(inc());
console.log(inc());

