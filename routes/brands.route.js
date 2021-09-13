const { Router } = require('express')
const { brandsController } = require('../controllers/brands.controller')

const router = Router()

router.post('/brands', brandsController.addBrands)
router.get('/brands', brandsController.getBrands)

module.exports = router