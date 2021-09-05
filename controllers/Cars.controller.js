const Car = require("../models/Car.model");

module.exports.carsController = {
  createCars: async (req, res) => {

    const {image}  = req.files;
    const newFileName = `/images${Math.floor(Math.random() *1000)}${image.name}`
    console.log(image.name)


    await image.mv(`./public${newFileName}`, async (err) => {
      if (err) {
        console.log(err)
      } else {
        const {name, year, desc, price, category,image} = req.body;
        const car = await Car.create({name, year, desc, price, category, image});
        res.json(car);
      }
      res.json("машина добавлена")
    })

  },
  getCars:async (req, res) => {
    try {
      const cars = await Car.find();
      res.json(cars)
    }catch (e) {
      res.json(e)
    }
  },
  getCarsByCategories: async (req, res) => {
    try {
      const car = await Car.find({category: req.params.id});
      res.json(car)
    }catch (e) {
      res.json(e)
    }
  },
  getCarsById:async (req, res) => {
    const car = await Car.findById(req.params.id);
    res.json(car)
  }
};
