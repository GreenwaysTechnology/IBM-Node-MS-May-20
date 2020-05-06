//object based programming

//object template : function

function Employee() {
    //state instance variable
    this.id = 1;
    this.name = 'subramanian';
    //methods
    this.calculateSalary = function () {
        return 1000;
    }
}
//object creation
//emp is just variable, new is operator,Employee() is constructor call
let emp = new Employee();
console.log(`id ${emp.id} Name ${emp.name} salary ${emp.calculateSalary()} `)

// ES 6 CLASSES
class Customer {
    id = 1;
    name = 'subramanian';
    //methods
    calculateInvoice() {
        return 1000;
    }
}

let cust = new Customer();
console.log(`id ${cust.id} Name ${cust.name} Invoice ${cust.calculateInvoice()} `)
