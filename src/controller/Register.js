const Student =require('../model/student');
const StudentService=require('../service/StudentService');
const {Fromatresponse}=require('../service/Formatresponse');
async function  Register (req,res){
    const{fistname,lastname,email,password,phone,course}=req.body;
    // 是否有人注册过了
    const existEmail=await Student.findOne({email});
    if(existEmail){
      return Fromatresponse(res,"your email is already exist",400);
    }
        const student=await StudentService.CreateOne({fistname,lastname,email,password,phone,course});
        return Fromatresponse(res,{fistname,lastname,email,password,phone,course},201);
}
module.exports={
  Register
}