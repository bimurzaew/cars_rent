const mongoose = require("mongoose");

const carSchema = mongoose.Schema({
  name: String,
  year: Number,
  equipment: String,
  detailedDescription: String,
  desc: String,
  price: Number,
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
  image: String,
  amount:Number,
  user: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  }],
});

const Car = mongoose.model("Car", carSchema);

module.exports = Car;
