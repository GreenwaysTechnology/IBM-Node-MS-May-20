//express
//get express function , when you call that function,
//application created
const express = require('express'); //return function 
const todorouter = require('./routers/todorouter');
const userrouter = require('./routers/usersrouter');

const { log } = console;
const port = process.env.port || 3000

//Create Application Object
const app = express(); //function call 
//Binding /Request forwarding to application controllers
app.use('/api/todos', todorouter)
app.use('/api/users', userrouter)


app.listen(port, function () {
    log(`Express Server is listening at ${port}`)
});