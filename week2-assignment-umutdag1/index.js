const express = require('express'); // Importing Express Object to Handle HTTP Requests
const cors = require('cors'); // Importing CORS Object to Handle CORS Policy When Making a  HTTP Request

const postController = require('./src/controllers/posts.js'); // Importing PostController Object to Use its Functions 
const userController = require('./src/controllers/users.js'); // Importing UserController Object to Use its Functions 
const todoController = require('./src/controllers/todos.js'); // Importing TodoController Object to Use its Functions 

const app = express(); // Creating Express App to be Used For Creating a HTTP Server

app.use(cors()); // While Processing a HTTP Request, This Helps to Configure How a Request Must Be Handled Before It Reaches to Its Endpoint (Middleware)

app.get('/posts', postController.getAllPosts); // to Get All Posts When a GET '/posts' Endpoint is Called
app.get('/posts/:postId', postController.getPostById); // to Get a Post Whose 'postId' is Matched With When a GET '/posts' Endpoint With a 'postId' Route Parameter is Called
app.get('/todos', todoController.getAllTodos); // to Get All Todos When a GET '/todos' Endpoint is Called
app.get('/todos/:todoId', todoController.getTodoById); // to Get a Todo Whose 'todoId' is Matched With When a GET '/todos' Endpoint With a 'todoId' Route Parameter is Called
app.get('/users', userController.getAllUsers); // to Get All Users When a GET '/users' Endpoint is Called
app.get('/users/:userId', userController.getUserById); // to Get a User Whose 'userId' is Matched With When a GET '/users' Endpoint With a 'userId' Route Parameter is Called



const PORT = 5000; // Assigning a PORT to Run a HTTP Server on

app.listen(PORT, () => console.log(`Server is started on port ${PORT}`)); // Starting a HTTP Server Running on PORT