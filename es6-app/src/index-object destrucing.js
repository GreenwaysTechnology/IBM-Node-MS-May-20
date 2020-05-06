
//De Structure : breaking the object keys and make it simple

// function getEmployee(employee) {
//     console.log(`Id ${employee.id}`)
//     console.log(`Name ${employee.name}`)
//     console.log(`City ${employee.city}`)
//     console.log(`State ${employee.state}`)
// }

// function getEmployee(employee) {
//     //destructure
//     const { id, name, city, state } = employee;
//     console.log(`Id ${id}`)
//     console.log(`Name ${name}`)
//     console.log(`City ${city}`)
//     console.log(`State ${state}`)
// }
// function getEmployee({ id, name, city, state, department: { depname, location } }) {
//     console.log(`Id ${id}`)
//     console.log(`Name ${name}`)
//     console.log(`department ${depname} ${location}`)
//     console.log(`City ${city}`)
//     console.log(`State ${state}`)
// }
const getEmployee = ({ id, name, city, state, department: { depname, location } }) => {
    console.log(`Id ${id}`)
    console.log(`Name ${name}`)
    console.log(`department ${depname} ${location}`)
    console.log(`City ${city}`)
    console.log(`State ${state}`)
}
getEmployee({
    id: 1,
    name: 'subramanian',
    city: 'coimbatore',
    state: 'tamil nadu',
    department: {
        depname: 'Training',
        location: 'Banaglore'
    }
});
////////////////////////////////////////////////////////////////////////////////

const getCustomer = () => ({
    id: 1000,
    name: 'James',
    city: 'coimbatore',
    state: 'tamil nadu'
})


console.log(getCustomer())

//how to configure object property values dynamically

// const getVisitor = (id, name, city, state) => ({
//     id: id,
//     name: name,
//     city: city,
//     state: state
// })

//how to configure object property values dynamically

//objectKey: localvariable(funciton arg )
//if key and local variable is same :
// id:id,name:name => make it one , id,name
const getVisitor = (id, name, city, state) => ({
    id,
    name,
    city,
    state,
})


console.log(getVisitor(1000, 'John', 'Chennai', 'TN'))