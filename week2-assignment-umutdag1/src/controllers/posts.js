const httpStatus = require('http-status'); // Importing httpStatus Object to Access Its HTTP Status Features
const posts = require('../data/posts.json'); // Accessing 'posts' JSON Array Data in 'data'

// To Get All Posts
getAllPosts = (req, res) => { // Handling HTTP Request When It's Called By 'index.js' 
    const result = posts; // Assigning 'posts' JSON Array Data to 'result' Variable
    res.statusCode = result.length == 0 ? 404 : 200; // Setting StatusCode 404 If 'result' is Empty, Else Setting 200 
    res.statusMessage = httpStatus[`${res.statusCode}_NAME`]; // Setting StatusMessage Depending on Its StatusCode via 'httpStatus' Object
    res.send(result); // Sending 'result' as HTTP Response 
}

// To Get a Post Matched With 'postId'
getPostById = (req, res) => { // Handling HTTP Request When It's Called By 'index.js' 
    const postId = new RegExp('^[0-9]+$').test(req.params.postId); // Checking If Route Param in Requested URL Consists of Numbers and then Assigning Its Result to 'postId' Variable
    const result = postId ? posts.filter(post => post.id == req.params.postId) : null; // If 'postId' is True then Assigning 'posts' to 'result' Whose 'postId' is Matched With, Else Assigning null to 'result' 
    res.statusCode = result == null ? 400 : (result.length == 0 ? 404 : 200); // Setting StatusCode 400 If 'result' is null, Else 404 If 'result' is Empty, Else Setting 200 
    res.statusMessage = httpStatus[`${res.statusCode}_NAME`]; // Setting StatusMessage Depending on Its StatusCode via 'httpStatus' Object
    res.send(result); // Sending 'result' as HTTP Response 
}

// Opening to Outside Modules to be Imported and Used
module.exports = {
    getAllPosts,
    getPostById,
};
