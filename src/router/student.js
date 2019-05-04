const router=require("express").Router();
const {Register}=require("../controller/Register");
router.post('/register',Register);
module.exports=router;