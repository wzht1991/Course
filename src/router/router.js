const studentRouter=require('./student');
const courseRouter=require('./course');
const router=require('express').Router();
router.use('/student',studentRouter);
router.use('/course', courseRouter);
module.exports=router;