const mongoose = require("mongoose");
// 后面还会有teacher和student的信息包含在内
const courseSchema = new mongoose.Schema(
  {
    code: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    description: {
      type: String
    }
  },
  {
    // 输出是object 或者json
    toObject: {
      virtuals: true
    },
    toJSON: {
      virtuals: true
    }
  }
);
const Courses=mongoose.model("Courses",courseSchema);
module.exports=Courses;