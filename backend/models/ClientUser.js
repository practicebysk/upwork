const mongoose = require("mongoose");
const { Schema } = mongoose;

const clientUserSchema = new Schema({
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

const clientuser=mongoose.model("clientuser",clientUserSchema);
module.exports=clientuser