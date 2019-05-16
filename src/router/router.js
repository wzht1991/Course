const studentRouter=require('./student');
const courseRouter=require('./course');
const teacherRouter=require('./teacher');
const router=require('express').Router();
router.use('/student',studentRouter);
router.use('/course', courseRouter);
router.use('/teacher',teacherRouter);
module.exports=router;