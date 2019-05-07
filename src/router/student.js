const router=require("express").Router();
const {Register}=require("../controller/Register");
const {Login}=require("../controller/login");
const RegisterValidation=require("../middleware/RegisterValidation");
router.post('/register',RegisterValidation,Register);
router.post('/login',Login);
module.exports=router;