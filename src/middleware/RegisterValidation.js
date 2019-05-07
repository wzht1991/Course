const joi=require("joi");
const {Formatresponse}=require("../service/Formatresponse");
function Registervalidation(req){
   const shema={
    fistname:
    joi
    .string()
    .required(),
    lastname:
    joi
    .string()
    .required(),
    email:
    joi
    .string()
    .required()
    .email(),
    password:
    joi
    .string()
    .required()
    .min(8),
    phone:
    joi
    .number()
    .required()
    .min(9)
   };
   return joi.validate(req,shema);
}
module.exports=(req,res,next)=>{
    const {error}=Registervalidation(req.body);
    if(error){
        return Formatresponse(res,error.details[0].message,400);
    }
    return next();
}