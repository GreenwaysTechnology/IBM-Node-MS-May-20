//function as parameter: function can be passed into another function as parameter
//because function is just literal.

// function connectServer(server, connect) {
//     const statuscode = connect(server);
//     console.log(`status ${statuscode}`)
// }

// //via variables
// let webServerConnect = function (server) {
//     console.log(server)
//     return `SUCCESS 200`
// };
// connectServer('HTTP Server is Running', webServerConnect);
// //anonmous function : function with out name
// connectServer('Database Server is Running', function (server) {
//     console.log(server)
//     return `SUCCESS 200`
// });

const connectServer = (server, connect) => {
    const statuscode = connect(server)
    console.log(`status ${statuscode}`)
}

let webServerConnect = server => {
    console.log(server)
    return '200 SUCCESS'
};
connectServer('HttpServer', webServerConnect);

connectServer('SQL server', server => {
    console.log(server)
    return '200 SUCCESS'

});