const router=require("express").Router();
const {Register}=require("../controller/Register");
const {Login}=require("../controller/login");
const RegisterValidation=require("../middleware/RegisterValidation");
const LoginValidation=require("../middleware/LoginValidation");
router.post('/register',RegisterValidation,Register);
router.post('/login',LoginValidation,Login);
module.exports=router;