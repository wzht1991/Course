const router=require("express").Router();
const {addcourse}=require("../controller/Course");
const AddCourseValidation=require("../middleware/AddCourseValidation");
router.post("/addcourse",AddCourseValidation,addcourse);
module.exports=router;