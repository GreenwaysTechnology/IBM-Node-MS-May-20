//function as parameter: function can be passed into another function as parameter
//because function is just literal.

//a =10
//a = x;
function add(a, b) {
    return a + b;
}
//values directly
console.log(add(10, 90))
//via variables
let x = 10;
let y = 90;
console.log(add(x, y))



//function parameters
//connect is just variable, can hold any value(literal)
//connect = webServerConnect =function () {
//     console.log('webServer')
// };
function connectServer(server, connect) {
    const statuscode = connect(server);
    console.log(`status ${statuscode}`)
}

//via variables
let webServerConnect = function (server) {
    console.log(server)
    return `SUCCESS 200`
};
connectServer('HTTP Server is Running', webServerConnect);
//anonmous function : function with out name
connectServer('Database Server is Running', function (server) {
    console.log(server)
    return `SUCCESS 200`
});