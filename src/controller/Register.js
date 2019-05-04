const Student =require('../model/student');
const StudentService=require('../service/StudentService');
const {Formatresponse}=require('../service/Formatresponse');
async function  Register (req,res){
    const{fistname,lastname,email,password,phone}=req.body;
    // 是否有人注册过了
    const existEmail=await Student.findOne({email});
    if(existEmail){
      return Formatresponse(res,"your email is already exist",400);
    }
        const student=await StudentService.CreateOne({fistname,lastname,email,password,phone});
        return Formatresponse(res,{fistname,lastname,email,password,phone},201);
 }

module.exports={
  Register
}