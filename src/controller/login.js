const StudentService=require('../service/StudentService');
const {Formatresponse}=require('../service/Formatresponse');
async function Login(req,res){
    const{email,password}=req.body;
    // 下面这个方法return 的是user
    const student= await StudentService.validatePasswordByEmail(email,password);
    if(!student){
        return Formatresponse(res,"wrong email or password",400);
    }
        return Formatresponse(res,`welcome ${student.fistname} ${student.lastname}`,201);
}
module.exports={
    Login
}