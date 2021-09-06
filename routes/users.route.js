const { Router } = require("express");
const { usersController } = require("../controllers/usersController");

const router = Router();

router.post("/", usersController.registerUser);
router.post('/login', usersController.logIn)

module.exports = router;
