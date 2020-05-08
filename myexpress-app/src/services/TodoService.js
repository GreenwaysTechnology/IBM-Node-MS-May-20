const TODOS = require('../data/todos');


class TodoService {
    constructor() {
    }
    //sync api
    // findAllTodo() {
    //     return TODOS;
    // }
    //async code : with callbacks
    // findAllTodo(callback) {
    //     setTimeout(callback, 1000, TODOS)
    // }

    //async code : with promise
    findAllTodo() {
        return new Promise((resolve, reject) => {
            //async
           //any legacy async api with callback
           setTimeout(resolve, 1000, TODOS)
        })
    }
}
module.exports = new TodoService();
