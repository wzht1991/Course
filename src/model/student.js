const mongoose=require('mongoose');
const joi=require('joi');
const brcypt=require('bcrypt');
const studentSchema=new mongoose.Schema(
    {
        firstname:{
            type:String,
            required: true,
            trim:true
        },
        lastname:{
            type:String,
            required:true,
            trim:true
        },
        email:{
             type:String,
             required:true,
             unique:true
            //  validate:{
            //      validator: email=> !joi.validate(email,joi.string().email()).error,
            //      msg:"invalid email"
            //  }
        },
        password:{
            type:String,
            required:true
        },
        phone:{
            type:Number,
            required:true,
            minlength:10
        },
        status:{
            type:String,
            required:true
        },
        course:[{
            type:String,
            ref:'Courses'
        }
       ]
    },
        {
            // 输出是object 或者json
            toObject:{
                virtuals:true
            },
            toJSON:{
                virtuals:true
            }
        }
    
);
// 密码加密 hash 10 次
studentSchema.methods.hashPassword=async function(){
    this.password=await brcypt.hash(this.password,10);
}
// 验证
studentSchema.methods.validatePassword=async function(password){
    const validpassword= await brcypt.compare(password,this.password);
    return validpassword;
  }
const Student= mongoose.model('Student',studentSchema);
module.exports=Student;
