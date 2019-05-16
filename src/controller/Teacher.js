const TeacherService=require("../service/TeacherService");
const Teacher=require("../model/teacher");
const {Formatresponse}=require('../service/Formatresponse');
async function TeacherRegister(req,res){
    const{fistname,lastname,email,password,phone,status}=req.body;
    const teacher=await Teacher.findOne({email});
    if(teacher){
      return Formatresponse(res,"your email is already exist",400);
    }
    await TeacherService.CreateOne({fistname,lastname,email,password,phone,status});
    return Formatresponse(res,{fistname,lastname,email,password,phone,status},201);

}
async function Login(req,res){
  const {email,password}=req.body;
  const teacher=await TeacherService.validatePasswordByEmail(email,password);
  if(!teacher){
    return Formatresponse(res,"your email and password is incorrect",201);
  }
  return Formatresponse(res,`welcome ${teacher.fistname} ${teacher.lastname}`,201);
}
module.exports={
    TeacherRegister,
    Login
}