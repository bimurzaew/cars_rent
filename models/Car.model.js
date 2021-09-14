const mongoose = require("mongoose");

const carSchema = mongoose.Schema({
  name: String,
  year: Number,
  equipment: String,
  detailedDescription: String,
  desc: String,
  price: Number,
  imgCar1:String,
  imgCar2:String,
  imgCar3:String,
  isReserved:Boolean,
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
  brand:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"Brand"
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
