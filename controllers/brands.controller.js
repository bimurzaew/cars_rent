const Brand = require('../models/Brand.model')

module.exports.brandsController = {
    addBrands: async (req, res) => {
        const { name } = req.body
        try {
            await Brand.create({ name })
            res.json(`Категория "${name}" была добавлена`)
        } catch (e) {
            console.log(e)
        }
    },

    getBrands: async (req, res) => {
        try {
            const categories = await Brand.find()
            res.json(categories)
        } catch (e) {
            console.log(e)
        }
    }
}