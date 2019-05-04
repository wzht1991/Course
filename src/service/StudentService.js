const Student=require('../model/student');
class StudentService {
    // 输入一个model
    constructor(model){
        this.model=model;
    }
    // 注册用
    async CreateOne(fields){
   // 创建一个新的model
    const document=new this.model(fields);
     await document.hashPassword();
     await document.save();
     return document;
  }
}
module.exports=new StudentService(Student);