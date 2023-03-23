const mongoose = require("mongoose");
const userScema = new mongoose.Schema({
  username: String,
  password: String,
  id:Number,
  email: String,
  role: String,
});
module.exports= mongoose.model("users",userScema)