const CourseService=require("../service/CourseService");
const Course=require("../model/course");
const {Formatresponse}=require('../service/Formatresponse');
async function addcourse(req,res){
    const {code,name,description}=req.body;
    // 看看课程是否被注册了
    const course=await Course.findOne({code});
    if(course){
        return Formatresponse(res,"Course is exist",400);
    }
    await CourseService.createCourse({code,name,description});
    return Formatresponse(res,{code,name,description},201);
}
module.exports={
    addcourse
}