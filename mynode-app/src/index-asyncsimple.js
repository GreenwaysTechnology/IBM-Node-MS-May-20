//async and await

//async function
/**
 * async by default return success promise without using Promsise.resolve
 */
// async function getValue() {
//     return "Hello" // return Promise.resolove("Hello")
// }
const { log } = console
async function getValue() {
    return Promise.resolve("Hello") // return Promise.resolove("Hello")
}
//error
async function getError() {
    return Promise.reject(new Error('something went wrong'))
}

//console.log(getValue())
getValue().then(log)
getError().catch(log)

function getName() {
    return "hello"
} //return type is string=value
log(getName());