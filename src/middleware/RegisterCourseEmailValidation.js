const joi=require("joi");
const {Formatresponse}=require("../service/Formatresponse");
function RegisterCourseEmailValidation(req){
 const schema={
    email:
    joi
    .string()
    .required()
    .email()
 }
 return joi.validate(req,schema);
}
module.exports=(req,res,next)=>{
    const {error}= RegisterCourseEmailValidation(req.params);
    if(error){
        return Formatresponse(res,error.details[0].message,400);
    }
    return next();
}