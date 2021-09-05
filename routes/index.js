const { Router } = require("mongoose");

const router = Router();

router.use("/user", require("./users.route"));

module.exports = router;
