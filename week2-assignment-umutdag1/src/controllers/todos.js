const httpStatus = require('http-status'); // Importing httpStatus Object to Access Its HTTP Status Features
const todos = require('../data/todos.json'); // Accessing 'todos' JSON Array Data in 'data'

// To Get All Todos
getAllTodos = (req, res) => { // Handling HTTP Request When It's Called By 'index.js' 
    const result = todos;  // Assigning 'todos' JSON Array Data to 'result' Variable
    res.statusCode = result.length == 0 ? 404 : 200; // Setting StatusCode 404 If 'result' is Empty, Else Setting 200
    res.statusMessage = httpStatus[`${res.statusCode}_NAME`]; // Setting StatusMessage Depending on Its StatusCode via 'httpStatus' Object
    res.send(result); // Sending 'result' as HTTP Response
}

// To Get a Todo Matched With 'todoId'
getTodoById = (req, res) => { // Handling HTTP Request When It's Called By 'index.js'
    const todoId = new RegExp('^[0-9]+$').test(req.params.todoId); // Checking If Route Param in Requested URL Consists of Numbers and then Assigning Its Result to 'todoId' Variable
    const result = todoId ? todos.filter(todo => todo.id == req.params.todoId) : null; // If 'todoId' is True then Assigning 'todos' to 'result' Whose 'todoId' is Matched With, Else Assigning null to 'result' 
    res.statusCode = result == null ? 400 : (result.length == 0 ? 404 : 200); // Setting StatusCode 400 If 'result' is null, Else 404 If 'result' is Empty, Else Setting 200 
    res.statusMessage = httpStatus[`${res.statusCode}_NAME`]; // Setting StatusMessage Depending on Its StatusCode via 'httpStatus' Object
    res.send(result); // Sending 'result' as HTTP Response 
}

// Opening to Outside Modules to be Imported and Used
module.exports = {
    getAllTodos,
    getTodoById,
};