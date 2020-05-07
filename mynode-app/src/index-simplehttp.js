//node - we create web server, web app, and we deploy 
const http = require('http');
//http is duplex streaming module : read(request) and write(reponse)
//in http every thing is object, which are created alredy , just we are using
//http since stream, which has lot events.

const { log } = console;
const port = process.env.port || 3000

//create server
const server = http.createServer(function (req, res) {
    //send response to client
    res.write('hello Node web server!');
    res.end();
});


//start server
server.listen(port, function () {
    log(`Server is listening at ${port}`)
});

//request event
server.on('request', function (req, res) {
    log(`${req.method} - ${req.url} `)
});