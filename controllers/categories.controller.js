const Category = require('../models/Category.model')

module.exports.categoriesController = {
  addCategory: async (req, res) => {
    const { name } = req.body
    try {
      await Category.create({ name })
      res.json(`Категория "${name}" была добавлена`)
    } catch (e) {
      console.log(e)
    }
  },
  getCategories: async (req, res) => {
    try {
      const categories = await Category.find()
      res.json(categories)
    } catch (e) {
      console.log(e)
    }
  }
}