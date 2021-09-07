const { Router } = require("express");
const { carsController } = require("../controllers/Cars.controller");

const router = Router();

router.post("/cars", carsController.createCars);
router.get("/cars", carsController.getCars);
router.get("/cars/category/:id", carsController.getCarsByCategories);
router.get("/cars/:id", carsController.getCarsById)

module.exports = router;
