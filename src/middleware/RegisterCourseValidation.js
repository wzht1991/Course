const joi=require("joi");
const {Formatresponse}=require("../service/Formatresponse");
function RegisterCourseValidation(req){
 const schema={
    code:
    joi
    .string()
    .required(),
    name:
    joi
    .string()
    .required()
 };
 return joi.validate(req,schema);
}
module.exports=(req,res,next)=>{
    const {error}=RegisterCourseValidation(req.body);
    if(error){
        return Formatresponse(res,error.details[0].message,400);
    }
    return next();
}