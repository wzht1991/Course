const CourseService=require("../service/CourseService");
const Course=require("../model/course");
const {Formatresponse}=require('../service/Formatresponse');
async function addCourse(req,res){
    const {code,name,description}=req.body;
    // 看看课程是否被注册了
    const course=await Course.findOne({code});
    if(course){
        return Formatresponse(res,"Course is exist",400);
    }
    await CourseService.createCourse({code,name,description});
    return Formatresponse(res,{code,name,description},201);
}
async function deleteCourse(req,res){
    const{code}=req.params;
    // await 很重要 记得写
    const course=await CourseService.deleteCourse(code);
    if(!course){
        return Formatresponse(res,"Course is not exist",400);
    }
    return Formatresponse(res,"success",201);
}
module.exports={
    addCourse,
    deleteCourse
}