//how to return function from another function

function counter() {
    console.log('counter')
    //inner function
    // return function increment() {
    //     console.log('increment')
    // }

    // //anonmous function
    return function (value) {
        console.log('increment')
        return value;
    }
    // //increment()
}
//inc is pointer to function:
// const inc = counter();
// console.log(inc(100));
console.log(counter()(1222))

//arrow version
// const counterNew = () => {
//     console.log('counter')
//     return value => `increment ${value}`;
// }
// const counterNew = () => {
//     return value => `increment ${value}`;
// }
const counterNew = () => value => `increment ${value}`;

// const inc1 = counterNew();
// console.log(inc1(100));
console.log(counterNew()(9000))
/////////////////////////////////////////////////////////////////////////////////

//curry function:function returns another function which returns another function and so...on

// function makeCake(milk) {
//     return function (cream) {
//         return function (sugar) {
//             return function (color) {
//                 return `${milk} ${cream} ${sugar} ${color}`
//             }
//         }
//     }
// }

// const makeCake = milk => {
//     return cream => {
//         return sugar => {
//             return color => {
//                 return `${milk} ${cream} ${sugar} ${color}`
//             }
//         }
//     }
// }
const makeCake = milk => cream => sugar => color => `${milk} ${cream} ${sugar} ${color}`

console.log(makeCake('cow milk')('cho cream')('brown sugar')('red'))