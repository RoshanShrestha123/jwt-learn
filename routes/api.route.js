const express = require('express');
const route = express.Router();
const jwt = require('jsonwebtoken');

route.get('/',function(req,res,next){
    console.log("this is the middleware to handle the API route");
    next();
});

route.post('/login',(req,res)=>{
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
})

route.post('/post',verifyToken,(req,res)=>{
    console.log(">> req token-->",req.token);
    res.json({
        mes:"post created...",
        reqToken:req.token
    })
})

route.post('/insertUser',verifyToken,(req,res)=>{
    res.json({
        mes:"data inserted"
    })
})

//middleware to verify the token
function verifyToken(req,res,next){
    console.log(" >>>>i am verifying the token as a middleware");
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
module.exports = route;