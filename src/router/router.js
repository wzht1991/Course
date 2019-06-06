const studentRouter=require('./student');
const courseRouter=require('./course');
const teacherRouter=require('./teacher');
const router=require('express').Router();
const access=require('../middleware/access');
router.use('/student',access,studentRouter);
router.use('/course',access, courseRouter);
router.use('/teacher',access,teacherRouter);
module.exports=router;