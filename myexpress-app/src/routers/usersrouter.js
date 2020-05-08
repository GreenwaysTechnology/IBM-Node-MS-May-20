const express = require('express'); //return function 
const { findAllUsers } = require('../services/UserService');

//create Router Object
const userrouter = express.Router();
//users end point
userrouter.get('/list', async function (req, res) {
    const USERS = await findAllUsers()
    res.json(USERS);
});
module.exports = userrouter;