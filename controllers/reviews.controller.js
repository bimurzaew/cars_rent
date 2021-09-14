const Review = require("../models/Review.model");
const User = require("../models/User.model");

module.exports.reviewsController = {
  addReview: async (req, res) => {
    try {
      const user = await User.findById(req.user.id);
      const { text } = req.body;

      if  (!text) {
       return res.json({error:'нужно ввести текст'})
      }
         await Review.create({
          text,
          userId: user,
        });
        res.json('success')
    } catch (e) {
      res.json(e.toString());
    }
  },
  getReviews: async (req,res) => {
    try {
     const reviews =  await Review.find()
      res.json(reviews)
    }catch(e) {
      res.json(e.toString())
    }
  }
};
