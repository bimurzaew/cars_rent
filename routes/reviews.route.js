const { Router } = require("express");
const { authMiddleware } = require("../models/middlewares/auth.middleware");
const { reviewsController } = require("../controllers/reviews.controller");

const router = Router();

router.post("/review", authMiddleware, reviewsController.addReview);
router.get("/reviews", reviewsController.getReviews);

module.exports = router;
