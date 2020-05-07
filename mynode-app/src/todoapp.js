const { findAllTodo } = require('./services/TodoService');

const { log } = console;

async function fetchAllTodos() {

    //sync call
    //findAllTodo().forEach(log)
    //async call :using callbacks

    //async call : using Promises
    // findAllTodo().then(todos => {
    //     todos.forEach(log);
    // });
    //async call : using promise +
    try {
        const todos = await findAllTodo()
        todos.forEach(log);
    }
    catch (err) {
        log(err)
    }
}

//call
fetchAllTodos();