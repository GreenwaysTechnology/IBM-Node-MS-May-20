//Object augmentation
//add,remove,update,iterate object 

//empty object
let product = {};

//add new property
product.id = 10;
product.price = 900;
product.name = 'think pad'
product.qty = 90;


//update : js engine looks whether property exits or not, if exit update,else add
product.price = 870;

//remove property
delete product.qty

//iterate
//operator to access object properties 
// . operator : used only for known object property
// [] operator : used for accessing object property dynamically, which is unknown
for (const key in product) {
    console.log(key, product[key]);
}


console.log(product)