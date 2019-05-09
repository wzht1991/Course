const Student =require('../model/student');
const {Formatresponse}=require('../service/Formatresponse');
const Course=require("../model/course");
async function RegisterCourse(req,res){
    const{code,name}=req.body;
    const{email}=req.params;
    // 看看是否在数据库中有这个课程
    const course=await Course.findOne({code});
    if(!course){
        return Formatresponse(res,"Course is not exist",400);
    }
    const student=await Student.findOneAndUpdate(
        {email:email},
        {$addToSet:{course:{code:code, name:name}}},
        {new:true}
        );
        if(!student){
            return  Formatresponse(res,"Student is not found",404);
        }
        return Formatresponse(res,{student},201);
};
module.exports={
    RegisterCourse
}