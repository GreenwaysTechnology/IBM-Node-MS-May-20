//require returns code from mylib as object
//
// const result = require('./mylib')
// console.log(result);

// console.log(result.name);
// console.log(result.id)
// console.log(result.isActive)
// console.log(result.calculateScore())
//object destructuring

const { id, name, isActive, calculateScore } = require('./mylib')

console.log(name);
console.log(id)
console.log(isActive)
console.log(calculateScore())