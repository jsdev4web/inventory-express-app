const { Router } = require("express");
const usersController = require("../controllers/reviewController");
const reviewRouter = Router();


reviewRouter.get("/reviewList", usersController.reviewGet);
reviewRouter.get("/review", usersController.reviewCreateGet);
reviewRouter.post("/review", usersController.reviewCreateItem);
reviewRouter.get("/:id/review-update", usersController.reviewUpdateGet);
reviewRouter.post("/:id/review-update", usersController.reviewUpdatePost);
reviewRouter.post("/:id/review-delete", usersController.reviewDeletePost);


module.exports = reviewRouter;
