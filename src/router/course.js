const router=require("express").Router();
const {addCourse,deleteCourse}=require("../controller/Course");
const AddCourseValidation=require("../middleware/AddCourseValidation");
router.post("/addcourse",AddCourseValidation,addCourse);
router.post("/deleteCourse/:code",deleteCourse);
module.exports=router;