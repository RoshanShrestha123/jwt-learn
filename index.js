const express = require('express');
const API_ROUTE = require('./routes/api.route');
const app = express();
const PORT = 3000;

app.use('/api',API_ROUTE);
//application level error handling middleware
app.use((err,req,res,next)=>{
    console.log(" i am error handling middle ware");
    res.status(400).json({
        mes:"mesg from error handling middleware",
        error: err
    })
});

app.listen(process.env.PORT || 3000,(err,result)=>{
    console.log(`server started at port ${PORT}`);
})

