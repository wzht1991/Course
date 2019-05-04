const Student =require('../model/student');
const StudentService=require('../service/StudentService');
const {Fromaresponse}=require('../service/Formatresponse');
async function  Register (req,res){
    const{fistname,lastname,email,password,phone,course}=req.body;
    // 是否有人注册过了
    const email=Student.findOne({email});
    if(email){
      return Fromaresponse(res,"your email is already exist",400);
    }
        const student=await StudentService.CreateOne({fistname,lastname,email,password,phone,course});
        return Fromaresponse(res,{fistname,lastname,email,password,phone,course},201);
}