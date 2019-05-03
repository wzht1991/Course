require("dotenv").config();
const express=require('express');
const app=express();
const PORT=process.env.PORT||3002;
app.get("/",(req,res)=>{
    res.send("welcome");
})
app.listen(PORT,()=>{
    console.log(`welcome to port ${PORT}!`);
})
