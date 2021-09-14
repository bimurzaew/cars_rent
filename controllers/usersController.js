const bcrypt = require("bcrypt");
const path = require("path");
const jwt = require("jsonwebtoken");
const User = require("../models/User.model");
const Car = require("../models/Car.model");

module.exports.usersController = {
  registerUser: async (req, res) => {
    try {
      const { name, login, password, lastName, mail, number } = req.body;
      const hash = await bcrypt.hash(password, Number(process.env.HASH));

      if (!lastName) {
        return res.status(401).json({ regError: "введите фамилию" });
      }
      if (!name) {
        return res.status(401).json({ regError: "введите имя" });
      }
      if (!login) {
        return res.status(401).json({ regError: "необходимо указать логин" });
      }
      if (!password) {
        return res.status(401).json({ regError: "необходимо указать пароль" });
      }
      const find = await User.findOne({ login });
      if (find) {
        return res.status(401).json({
          regError: "такой логин уже существует, пожалуйста введите другой",
        });
      }

      await User.create({
        lastName,
        name,
        login,
        password: hash,
        carRent: null,
        mail,
        number,
      });
      res.status(200).json({ message: "вы успешно зарегистрировались" });
    } catch (e) {
      res.status(400).json({ regError: toString(e) });
    }
  },
  logIn: async (req, res) => {
    try {
      const { login, password } = req.body;
      const candidate = await User.findOne({ login });
      if (login.length === 0) {
        return res.status(401).json({ authError: "необходимо ввести логин" });
      }
      if (password.length === 0) {
        return res.status(401).json({ authError: "необходимо ввести пароль" });
      }
      if (!candidate) {
        return res.status(401).json({ authError: "неверный логин" });
      }
      const valid = await bcrypt.compare(password, candidate.password);
      if (!valid) {
        return res.status(401).json({ authError: "неверный пароль" });
      }

      const payload = {
        id: candidate.id,
        // carRent:candidate.carRent
      };
      const token = await jwt.sign(payload, process.env.JWT_KEY, {
        expiresIn: "24h",
      });
      res.json({ token });
    } catch (e) {
      res.status(400).json({ error: toString(e) });
    }
  },
  getUserById: async (req, res) => {
    try {
      const user = await User.findById(req.user.id).populate("carRent");
      res.json(user);
    } catch (e) {
      return res.status(404).json({ error: e });
    }
  },
  rentCar: async (req, res) => {
    try {
      const user = await User.findById(req.user.id);
      const car = await Car.findById(req.params.carsId);
      if (user.carRent) {
        res.json({ error: "зачем вам больше одной машины?" });
      } else if (car.amount === 0) {
        res.json({ error: "нет свободных машин" });
      } else {
      // const some = await User.findByIdAndUpdate(user, {
      //     carRent: car,
      //   });
        user.carRent = car;
      await user.save();
        await Car.findByIdAndUpdate(car, {
          $push: { user },
          amount: car.amount - 1,
        });
        res.json(user);
        console.log(user)
      }
    } catch (e) {
      res.status(400).json({ error: e.toString() + " catch" });
    }
  },
  putCar: async (req, res) => {
    try {
      const user = await User.findById(req.user.id);
      const car = await Car.findById(req.params.id);

     // const some = await User.findByIdAndUpdate(user, {
     //    carRent: null,
     //  });
      await Car.findByIdAndUpdate(car, {
        $pull: { user: user.id },
        amount: car.amount + 1,
      });
      user.carRent = null;
      user.save();
      res.json(user)
    } catch (e) {
      res.json({ error: e.toString() + " карар яьлла кетчи" });
    }
  },
};
