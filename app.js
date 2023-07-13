const express = require('express');

const app = express();

app.use((req,res,next)=>{
    console.log("This is a Midderwere 1");
    next();
})


app.use((req,res,next)=>{
    console.log("This is a Midderwere 2");
    res.send( { key1: value })
})

app.listen(5000);
