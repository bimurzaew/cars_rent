const Car = require("../models/Car.model");

module.exports.carsController = {
  createCars: async (req, res) => {

    // const {image}  = req.files;
    // const newFileName = `/images${Math.floor(Math.random() *1000)}${image.name}`
    // console.log(image.name)
    //
    //
    // await image.mv(`./public${newFileName}`, async (err) => {
    //   if (err) {
    //     console.log(err)
    //   } else {
        const {name, year, desc, price, category,image , imgCar1, imgCar2, imgCar3, brand, isReserved, equipment, detailedDescription} = req.body;
        const car = await Car.create({name, year, desc, price, category, image , imgCar1, imgCar2, imgCar3 , brand, isReserved, equipment, detailedDescription});
        res.json(car);
      // }
      // res.json("машина добавлена")
    // })

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
  getCarsByBrands: async (req, res) => {
    try {
      const car = await Car.find({brand: req.params.id});
      res.json(car)
    }catch (e) {
      console.log(e)
    }
  },
  getCarsById:async (req, res) => {
    try {
      const car = await Car.findById(req.params.id);
      res.json(car)
    } catch (e) {
      res.json(e)
    }
  }
};
