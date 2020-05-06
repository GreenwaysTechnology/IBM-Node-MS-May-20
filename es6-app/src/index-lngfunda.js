//how to declare variables
/**
 * ways 
 * using var keyword -> es 5
 * using let and const keywords - es 6
 *   let and const is replacer for var
 *  if you are building application based on es 6 always
 * recommended to let / const
 *  * using this keywords
 * 
 * java code is running on jvm(runtime)
 *   -sun,oracle,openjdk,zuel,HP,ibm
 * javascript code is running on javascript runtime
 *  -classified into two category
 *   -embeded : inside another software:(browser)
 *   -standalone : node js
 * 
 * vendors:
 *   -chrome : v8
 *   -firefox : spidermonkey
 *   -opera : operaEngine
 *  - ie - chakara
 * 
 * nodejs
 *  -v8
 * 
 * Version combability:
 *  jvm -5 --if you run java 8 will work -? wont
 * 
 *  js engine certified by es 5----will support only es 5 features
 *  suppose not means---y cant
 *    convert es 6 code into es 6 : transipling /compilation : converting es 6 code into
 *   es 5 code and run.
 * 
 * should i do this every time, yes!!! -best practice
 * 
 * good thing, modern browsers  and node supports es 6 directly.
 * 
 */
//variable declarion
//var is keyword 
//firstName is variable
//"Subramanian" : literal
/**
 * types of literal
 *  string
 *  number
 *  boolean
 *  undefined
 *  NaN
 *  infinity
 *  null
 * function
 * object 
 */

//string : " " ,'' ,``
//var firstName = "Subramanian";
let firstName = "Subramanain";

//var lastName = 'Murugan';
let lastName = "Murugan";

console.log("firstName " + firstName);
console.log("firstName ", firstName);

//es 6 template literal : ``
console.log(`firstName ${firstName}  lastName ${lastName}`);

//backtick for multi line string literal :
// var title = 'IBM digital'
let title = 'IBM digital'

//es 5 style
let htmlDoc = "<html>" +
    "<head>" +
    "<title>" + title + "</title>"
"<body>" +
    "</body></html>";
console.log(htmlDoc)
//es 6 style
let htmlDocNew = `
    <html>
    <head>
       <title>${title}</title>
    </head>
    <body>

    </body>
    </html>
`;
console.log(htmlDocNew)
///////////////////////////////////////////////////////////////////////////////
//undefined; variable is declarated but no valid values, js initalizes undefined
//undefined itself is value only.

//undefined
let covid19todaysCount;
console.log(`covid19todaysCount ${covid19todaysCount}`)

//////////////////////////////////////////////////////////////////////////////////
//numbers : number,NaN,infinity

//number : 64 bit : double
let totalDischarged = 12300;
console.log(`totalDischarged ${totalDischarged}`)

//computation
let totalPatientsInHosiptal = 55000 - totalDischarged;
console.log(`totalPatientsInHosiptal ${totalPatientsInHosiptal}`)

//comuputational error : NaN : not a number: error code ,thrown by js when something 
//went wrong duration numerical operations.

//NaN and undefined
let qty; //undefined
let unitprice = 100;
let totalValue = qty * unitprice; // undefined * number==>error-NaN
console.log(`Total Value ${totalValue}`)

//NaN and type conversion
//string to number conversion
//implicit and explicit
//conversion
// let stockValue = "1000" // string but value is number
// let totalStockValue = stockValue * 100; //conversion happens first then computation: implicit
// console.log(`totalStockValue ${totalStockValue}`)

let stockValue = "$1000" // string but value is number
let totalStockValue = stockValue * 100; //conversion failed,throwing NaN
console.log(`totalStockValue ${totalStockValue}`)


let x = "10";
let rs = parseInt(x);

//inifity
let avgDeathRate = 55000 / 0;
console.log(`avgDeathRate ${avgDeathRate}`)
///////////////////////////////////////////////////////////////////////////////////
//booleans
let isActive = true;
console.log(`Active ${isActive}`)
///////////////////////////////////////////////////////////////////////////////////
//Advanced booleans: which is true and which is false

/**
 * in js every thing is true except the following values
 * 
 *  1.boolean false
 *  2."",''(empty string)
 *  3.0 
 *  4.undefined
 *  5.NaN
 *  6.null
 * 
 */

let message = "hi";
//if(boolean);
if (message) {
    console.log("ok!")
} else {
    console.log("not ok!")
}
let count = 0;
if (count) {
    console.log("Count ok!")
} else {
    console.log("Count not ok!")
}
//////////////////////////////////////////////////////////////////////////////
//operators
//comparsional operator : == , === != , !==

let a = "10"; //string
let b = 10; //number

let result1 = a == b; // string == number : wrong comparasion
let result2 = a === b; //right comparsion
console.log(`${result1} ${result2} `);

//best pratice : when ever you compare use always : ===
/////////////////////////////////////////////////////////////////////////
// ? : tenary : to replace if conditions

message ? console.log('message ok') : console.log('message not oke');
(a === b) ? console.log('a and b ar equal') : console.log('a and b not equal');
///////////////////////////////////////////////////////////////////////////////////
// || && operators

let isEnabled = true;
let status = isEnabled || isActive;
console.log(status ? 'success' : 'failure');

let init = 12;
//if first operand(init) is truthy, the result would be first
// else result would be second one
//&& is opposit formula to or so you can test yourself
let start = init || 10;
console.log(`Start ${start}`)

///////////////////////////////////////////////////////////////////////////////
//typeof operator ; returns the type of variable
console.log(typeof "hello")
console.log(typeof message)
//number,infinity,NaN
console.log(typeof totalValue)
console.log(typeof avgDeathRate)
/////////////////////////////////////////////////////////////////////////////////

//other operators : new,instance of , for...in,[],.















