const router=require("express").Router();
const {Register}=require("../controller/Register");
const RegisterValidation=require("../middleware/RegisterValidation");
router.post('/register',RegisterValidation,Register);
module.exports=router;