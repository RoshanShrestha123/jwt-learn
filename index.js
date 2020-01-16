const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const PORT = 3000;

app.get('/api',(req,res)=>{
    res.json({
        mes:"welcome to the API"
    });
});

app.post('/api/login',(req,res)=>{
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
app.post('/api/post',verifyToken,(req,res)=>{
    console.log(">> req token-->",req.token);
    res.json({
        mes:"post created...",
        reqToken:req.token
    })
})

app.post('/api/insertUser',verifyToken,(req,res)=>{
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

app.listen(process.env.PORT || 3000,(err,result)=>{
    console.log(`server started at port ${PORT}`);
})

