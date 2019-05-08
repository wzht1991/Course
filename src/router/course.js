const router=require("express").Router();
const {addcourse}=require("../controller/Course");
router.post("/addcourse",addcourse);
module.exports=router;