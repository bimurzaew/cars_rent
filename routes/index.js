const {Router} = require('express')

const router = Router();

router.use(require("./cars.route"))
router.use(require("./categories.route"))
router.use(require("./users.route"));

module.exports = router;


