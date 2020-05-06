
//blocking /sync programming

function sayHello() {
    console.log('hello');
}
function add(a = 1, b = 2) {
    let c = a + b;
    console.log(c);
}
//invoke functions
//sayhello---stack---frame is created---running|once done--frame is removed 
sayHello() 
//add--stack--frame is created---running|once done--frame is removed
add(10, 10);