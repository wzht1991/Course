const Course=require("../model/course");
class CourseService{
    constructor(model){
        this.model=model;
    }
    // 创建course
   async createCourse(fields){
    const document=new this.model(fields);
    await document.save();
    return document;
   }
   async deleteCourse(code){
     return this.model.findOneAndDelete({code:code});
   }
}
module.exports=new CourseService(Course);