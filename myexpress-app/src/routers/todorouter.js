const express = require('express'); //return function 
const { findAllTodo } = require('../services/TodoService');


//create Router Object
const todorouter = express.Router();
//REST End points 
// /api/resource
//GET --- /api/todos/list
todorouter.get('/list', async function (req, res) {
    // res.end('Todo Response');
    const TODOS = await findAllTodo()
    res.json(TODOS);
});
//other end

module.exports = todorouter;