const { findAllTodo } = require('./services/TodoService');

const { log } = console;

function fetchAllTodos() {

    //sync call
    //findAllTodo().forEach(log)
    //async call :using callbacks
    // findAllTodo(todos => {
    //     todos.forEach(log);
    // });
    //async call : using Promises
    findAllTodo().then(todos => {
        todos.forEach(log);
    });
}

//call
fetchAllTodos();