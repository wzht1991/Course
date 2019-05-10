const Student =require('../model/student');
const {Formatresponse}=require('../service/Formatresponse');
const Course=require("../model/course");
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
module.exports={
    RegisterCourse
}