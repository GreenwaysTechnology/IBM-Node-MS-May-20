
/**
 * 
 * function require(fileName){
 * 
 * class CustomerService {
    constructor() {
        console.log('constructor is called')
    }
    findAll() {
        return [{ id: 1, name: 'A' }]
    }
}
    return CustomerService;
 * 
 * }
 */
const CUSTOMERS = require('../data/customer-data');

class CustomerService {
    constructor() {
        console.log('constructor is called')
    }
    findAll() {
        return CUSTOMERS;
    }
}
module.exports = CustomerService;