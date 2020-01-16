const express = require('express');
const jwt = require('jsonwebtoken');

 verifyToken = (req,res,next)=> {
    const bearerHeader = req.headers['authorization'];
    if(typeof bearerHeader !== 'undefined'){
        const bearerHeaderArr = bearerHeader.split(' ');
        const token = bearerHeaderArr[1];
        jwt.verify(token,'roshan',(err,authData)=>{
            if(err) return next(err);

            next();
        })
    }else{
        next({name:"Empty token"});
    }
}

showUser = (req,res,next) =>{
    res.json({
        mes: "this the list of the user..."
    })
}


module.exports = {
    verifyToken,
    showUser
};