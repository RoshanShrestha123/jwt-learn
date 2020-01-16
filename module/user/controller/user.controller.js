const express = require('express');
const jwt = require('jsonwebtoken');

/**
 *function to verify the token number
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */

 verifyToken = (req,res,next)=> {
    const bearerHeader = req.headers['authorization'];
    if(typeof bearerHeader !== 'undefined'){
        const bearerHeaderArr = bearerHeader.split(' ');
        const token = bearerHeaderArr[1];
        jwt.verify(token,'roshan',(err,authData)=>{
            if(err) return console.log("error");
            next();
        })
    }else{
        console.log("this is the forbidden")
        res.sendStatus(403);
    }
}

showUser = (req,res,next) =>{
    res.json({
        mes: " hello world;"
    })
}


module.exports = {
    verifyToken,
    showUser
};