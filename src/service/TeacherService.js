const Teacher=require('../model/teacher');
class TeacherService {
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
    const teacher=await this.model.findOne({email});
    const verify=await teacher.validatePassword(password);
    // 数据库中有这个email
    if(verify){
        return teacher;
    }else{
        return null;
    }
 }

}

module.exports=new TeacherService(Teacher);