const bcrypt = require("bcrypt");
const path = require("path");
const jwt = require("jsonwebtoken");
const User = require("../models/User.model");
const Car = require('../models/Car.model')

module.exports.usersController = {
  registerUser: async (req, res) => {
    try {
      const { name, login, password, carRent } = req.body;

      const hash = await bcrypt.hash(password, Number(process.env.HASH));

      if (!login) {
        return res.status(401).json({ error: "необходимо указать логин" });
      }
      if (!password) {
        return res.status(401).json({ error: "необходимо указать пароль" });
      }
      const find = await User.findOne({ login });
      if (find) {
        return res.status(401).json({
          error: "такой логин уже существует, пожалуйста введите другой",
        });
      }

      const { image } = req.files;
      const newFileName = `/images${Math.floor(
        Math.random() * 1000
      )}${path.extname(image.name)}`;

      await image.mv(`./public${newFileName}`, async (err) => {
        if (err) {
          res.json({ error: err });
        } else {
          await User.create({
            name,
            login,
            password: hash,
            image: newFileName,
            carRent,
          });
        }
        res.status(200).json({ message: "вы успешно зарегистрировались" });
      });
    } catch (e) {
      res.status(400).json(e);
    }
  },
  logIn: async (req, res) => {
    try {
      const { login, password } = req.body;
      const candidate = await User.findOne({ login });
      if (!candidate) {
        return res.status(401).json({ error: "неверный логин" });
      }

      const valid = await bcrypt.compare(password, candidate.password);
      if (!valid) {
        return res.status(401).json({ error: "неверный пароль" });
      }

      const payload = {
        id: candidate._id,
      };
      const token = await jwt.sign(payload, process.env.JWT_KEY, {
        expiresIn: "24h"
      });
     res.json({token})
    } catch (e) {
      res.status(400).json({ error: e });
    }
  },
  // rentCar: async (req,res) => {
  //   try {
  //     const user = await User.findById(req.params.id)
  //     const car = await Car.findById(req.params.id)
  //     await User.findByIdAndUpdate(user, {
  //       carRent:
  //     })
  //
  //   }catch (e) {
  //     res.status(400).json({error:e})
  //   }
  // }
};
