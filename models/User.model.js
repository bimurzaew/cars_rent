const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: String,
  login: {
    type: String,
    unique: true,
  },
  password: String,
  image: String,
  carRent:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Car"
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;