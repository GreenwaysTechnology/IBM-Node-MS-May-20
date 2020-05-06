
//code sharing

//let exports= {}
//what exports?
/**
 * exports is just variable is declared by node intern. and 
 * its value is emty object
 *
 * function require(fileName){
 *  let exports ={}
 * 
 *  exports.id = 1
    exports.name = 'Subramanian';
    exports.isActive = true;
    exports.calculateScore = function () {
    return 10;
}
 * 
 *  return exports
 * }
 *  
 */

//here we are augmenting exports variable

exports.id = 1
exports.name = 'Subramanian';
exports.isActive = true;
exports.calculateScore = function () {
    return 10;
}

