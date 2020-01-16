const express = require('express');
const route = express.Router();
const authController = require('../controller/auth.Controller');

route.use((req,res,next)=>{
    console.log("hey in am inside the auth route");
    next();
})

route.post('/login',authController.login);

module.exports = route;