//inhertiance 
//has-a composition

class Customer {
    constructor(id = 1, name = 'Subrammanian') {
        this.id = id;
        this.name = name;
    }
}

class Account {

    constructor(accountNo, name, customer = new Customer()) {
        this.accountNo = accountNo;
        this.name = name;
        //has-a relationship
        this.customer = customer;

        console.log('account')
    }
    //method
    withdraw() {
        return 100;
    }
}
class SavingsAccount extends Account {
    constructor(accountNo, name) {
        super(accountNo, name);
        console.log('savings account!')
    }
    withdraw() {
        return 400 * super.withdraw();
    }
}
let sb = new SavingsAccount(1, 'Savings Account');
console.log(sb.accountNo, sb.name, sb.customer.id, sb.customer.name)
console.log(sb.withdraw())