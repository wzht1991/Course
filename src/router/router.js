const studentRouter=require('./student');
const router=require('express').Router();
router.use('/student',studentRouter);
module.exports=router;