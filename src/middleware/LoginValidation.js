const joi=require("joi");
const {Formatresponse}=require("../service/Formatresponse");
function LoginValidation(req){
const schema={
    email:
    joi
    .string()
    .required()
    .email(),
    password:
    joi
    .string()
    .required()
    .min(8)
};
return joi.validate(req,schema);
}
module.exports=(req,res,next)=>{
    const {error}=LoginValidation(req.body);
    if(error){
        return Formatresponse(res,error.details[0].message,400);
    }
    return next();
}