const httpStatus = require('http-status'); // Importing httpStatus Object to Access Its HTTP Status Features
const users = require('../data/users.json'); // Accessing 'users' JSON Array Data in 'data'

// To Get All Users
getAllUsers = (req, res) => { // Handling HTTP Request When It's Called By 'index.js' 
    const result = users;  // Assigning 'users' JSON Array Data to 'result' Variable
    res.statusCode = result.length == 0 ? 404 : 200; // Setting StatusCode 404 If 'result' is Empty, Else Setting 200 
    res.statusMessage = httpStatus[`${res.statusCode}_NAME`]; // Setting StatusMessage Depending on Its StatusCode via 'httpStatus' Object
    res.send(result); // Sending 'result' as HTTP Response
}

// To Get a User Matched With 'userId'
getUserById = (req, res) => { // Handling HTTP Request When It's Called By 'index.js' 
    const userId = new RegExp('^[0-9]+$').test(req.params.userId); // Checking If Route Param in Requested URL Consists of Numbers and then Assigning Its Result to 'userId' Variable
    const result = userId ? users.filter(user => user.id == req.params.userId) : null; // If 'userId' is True then Assigning 'users' to 'result' Whose 'userId' is Matched With, Else Assigning null to 'result' 
    res.statusCode = result == null ? 400 : (result.length == 0 ? 404 : 200); // Setting StatusCode 400 If 'result' is null, Else 404 If 'result' is Empty, Else Setting 200 
    res.statusMessage = httpStatus[`${res.statusCode}_NAME`]; // Setting StatusMessage Depending on Its StatusCode via 'httpStatus' Object
    res.send(result); // Sending 'result' as HTTP Response 
}

// Opening to Outside Modules to be Imported and Used
module.exports = {
    getAllUsers,
    getUserById,
};
