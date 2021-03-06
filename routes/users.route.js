
const { Router } = require("express");
const { usersController } = require("../controllers/usersController");
const { authMiddleware } = require("../models/middlewares/auth.middleware");

const router = Router();

router.post("/user", usersController.registerUser);
router.post("/login", usersController.logIn);
router.get("/user/profile", authMiddleware, usersController.getUserById);
router.patch("/cars/:carsId", authMiddleware, usersController.rentCar);
router.patch("/car/:id", authMiddleware, usersController.putCar);
router.delete("/user/delete", authMiddleware, usersController.deleteAccount);

module.exports = router;
