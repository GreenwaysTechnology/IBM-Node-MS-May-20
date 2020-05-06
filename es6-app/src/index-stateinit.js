// state : update

function Employee(id = 1, name = 'subramanian') {
    //state instance variable
    this.id = id //1;
    this.name = name //'subramanian';
    //methods
    this.calculateSalary = function () {
        return 1000;
    }
}
//object creation
//emp is just variable, new is operator,Employee() is constructor call
let emp = new Employee(45, 'john');

console.log(`id ${emp.id} Name ${emp.name} salary ${emp.calculateSalary()} `)

//after object creation
emp.name = 'ram'

console.log(`id ${emp.id} Name ${emp.name} salary ${emp.calculateSalary()} `)

// ES 6 CLASSES
class Customer {

    constructor(id = 1, name = 'subramanian') {
        this.id = id;//1;
        this.name = name;//'subramanian';
    }
    //methods
    calculateInvoice() {
        return 1000;
    }
}

let cust = new Customer(90, 'James');
console.log(`id ${cust.id} Name ${cust.name} Invoice ${cust.calculateInvoice()} `)

cust.name = 'ram';
console.log(`id ${cust.id} Name ${cust.name} Invoice ${cust.calculateInvoice()} `)
