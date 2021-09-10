const mongoose = require("mongoose");

const carSchema = mongoose.Schema({
  name: String,
  year: Number,
  desc: String,
  price: Number,
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
  image: String,
  user:
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
});

const Car = mongoose.model("Car", carSchema);

module.exports = Car;
