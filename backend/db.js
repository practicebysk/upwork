const mongoose=require("mongoose");

const mongoURL="mongodb+srv://upworkdemo22:Lglglg12@kinar.ube1cfh.mongodb.net/upworkdata?retryWrites=true&w=majority"

const connectToMongo = async () => {
    try {
      await mongoose.connect(mongoURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true, 
      });
      console.log("Connected to MongoDB.");
    } catch (error) {
      console.error("Error connecting to MongoDB:", error.message);
    }
  };
  

module.exports=connectToMongo


