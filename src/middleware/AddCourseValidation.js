const joi=require("joi");
const {Formatresponse}=require("../service/Formatresponse");
function AddCourseValidation(req){
    const schema={
        code:
        joi
        .string()
        .required(),
        name:
        joi
        .string()
        .required(),
        description:
        joi
        .string()
    };
    return joi.validate(req,schema);
}
module.exports=(req,res,next)=>{
    const {error}=AddCourseValidation(req.body);
    if(error){
        return Formatresponse(res,error.details[0].message,400);
    }
    return next();
}