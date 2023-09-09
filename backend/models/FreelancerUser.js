const mongoose = require("mongoose");
const { Schema } = mongoose;

const freelancerUserSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  email: { 
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  date:{
    type:Date,
    default:Date.now
  }
});



const Freelaceruser=mongoose.model("freelanceruser",freelancerUserSchema);
module.exports=Freelaceruser


