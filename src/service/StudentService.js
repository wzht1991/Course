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
   //   login
  async validatePasswordByEmail(email,password){
    const student=await this.model.findOne({email});
      const verify=await student.validatePassword(password);
    // 数据库中有这个email
    if(verify){
        return student;
    }else{
        return null;
    }
 }
}
module.exports=new StudentService(Student);