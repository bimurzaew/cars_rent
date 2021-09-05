const {Router} = require('mongoose')

const router = Router()

router.use(require('./categories.route'))

module.exports = router;