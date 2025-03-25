const { Router } = require("express");
const usersController = require("../controllers/homeController");
const homeRouter = Router();

homeRouter.get("/", usersController.homeGet);



module.exports = homeRouter;
