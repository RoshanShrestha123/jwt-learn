const express = require('express');
const jwt = require('jsonwebtoken');



login = (req,res,next) =>{
    console.log(">>> trying to log in");
    const user ={
        id:1,
        username:'roshan123',
        email:'roshan@gmail.com'
    }
    jwt.sign({user:user},'roshan',(err,token)=>{
        res.json({
            token:token
        })
    })
}

module.exports = {
    login
};
