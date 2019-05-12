const Student =require('../model/student');
const StudentService=require('../service/StudentService');
const {Formatresponse}=require('../service/Formatresponse');
const Course=require("../model/course");
async function  Register (req,res){
    const{fistname,lastname,email,password,phone,status}=req.body;
    // 是否有人注册过了
    const existEmail=await Student.findOne({email});
    if(existEmail){
      return Formatresponse(res,"your email is already exist",400);
    }
        const student=await StudentService.CreateOne({fistname,lastname,email,password,phone,status});
        return Formatresponse(res,{fistname,lastname,email,password,phone,status},201);
 };
 async function Login(req,res){
    const{email,password}=req.body;
    // 下面这个方法return 的是user
    const student= await StudentService.validatePasswordByEmail(email,password);
    if(!student){
        return Formatresponse(res,"wrong email or password",400);
    }
        return Formatresponse(res,`welcome ${student.fistname} ${student.lastname}`,201);
};
async function RegisterCourse(req,res){
    const{code}=req.body;
    const{email}=req.params;
    // 看看是否在数据库中有这个课程
    const course=await Course.findOne({code});
    if(!course){
        return Formatresponse(res,"Course is not exist",400);
    }
    const student=await Student.findOneAndUpdate(
        {email:email},
        {$addToSet:{course:code}},
        {new:true}
        )
        if(!student){
            return  Formatresponse(res,"Student is not found",404);
        }
        await Course.findOneAndUpdate({code:code},
            {$addToSet:{student:email}},
            {new:true}
            );
         return Formatresponse(res,{student},201);
        // 如果在formatresponse 是得不到這個數據的 因為它返回的是一個response.data 在前端可以得到她 但是下面的可以得到 
        //console.log(student.course[0]);
        
};
async function DropCourse(req,res){
    const{code}=req.body;
    const{email}=req.params;
    const student=await Student.findOne({email});
    for(let i=0;i<student.course.length;i++){
        if(student.course[i]===code){
            // 从学生课程中删除
             await Student.update({email:email},{$pull:{course:student.course[i]}});
            //从课程里面的学生名单中删除
             await Course.update({code:student.course[i]},{$pull:{student:email}});
             return Formatresponse(res,"success!",201);
        }
    };
    return  Formatresponse(res,"course is not found",404);
}
module.exports={
  Register,
  Login,
  RegisterCourse,
  DropCourse
}