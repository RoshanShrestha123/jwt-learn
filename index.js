const express = require('express');
const API_ROUTE = require('./routes/api.route');
const app = express();
const PORT = 3000;

app.use('/api',API_ROUTE);

app.listen(process.env.PORT || 3000,(err,result)=>{
    console.log(`server started at port ${PORT}`);
})

