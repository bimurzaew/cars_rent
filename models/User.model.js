const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  lastName:String,
  name: String,
  login: {
    type: String,
    unique: true,
  },
  password: String,
  carRent:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Car"
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;