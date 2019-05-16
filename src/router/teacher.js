const {TeacherRegister,Login}=require("../controller/Teacher");
const router=require("express").Router();
router.post("/register",TeacherRegister);
router.post("/login",Login);

module.exports=router;