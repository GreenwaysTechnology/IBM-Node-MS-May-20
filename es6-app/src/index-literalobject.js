//literal pattern

// const emp = {
//     id: 1,
//     name: 'subramanian',
//     calculateSalary: function () {
//         return 1000;
//     }
// }

// const emp = {
//     id: 1,
//     name: 'subramanian',
//     calculateSalary: () => 1000
// }
const emp = {
    id: 1,
    name: 'subramanian',
    calculateSalary() {
        return 1000
    }
}

console.log(`id ${emp.id} Name ${emp.name} salary ${emp.calculateSalary()} `)