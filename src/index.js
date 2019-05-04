require("dotenv").config();
const express=require('express');
const mongoose=require('mongoose');
const router=require("./router/router");
const logger=require("./logger");
const app=express();
const PORT=process.env.PORT||3002;
app.get("/",(req,res)=>{
    res.send("welcome");
})
// 他能支持json requset
// https://blog.csdn.net/dlmmu/article/details/55671076
router.use(express.json());
router.use("/courseSystem",router);
const connectionUrl="mongodb://localhost:27017/coursedb"
mongoose.connect(connectionUrl).then(()=>{
    app.listen(PORT,()=>{
    logger.info(`welcome to port ${PORT}!`);
    })
}).catch(err=>{
    logger.error("DB connect fail");
    throw new Error(e)
})

module.exports=app;