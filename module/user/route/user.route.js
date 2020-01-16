const express = require('express');
const route = express.Router();
const userController = require('../controller/user.controller');

route.use((req,res,next)=>{
    console.log("hey in am inside the auth route");
    next();
})
route.post('/post',userController.verifyToken,userController.showUser);

module.exports = route;