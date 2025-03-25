const { Router } = require("express");
const usersController = require("../controllers/publisherController");
const publisherRouter = Router();


publisherRouter.get("/publisherList", usersController.publisherGet);
publisherRouter.get("/publisher", usersController.publisherCreateGet);
publisherRouter.post("/publisher", usersController.publisherCreateItem);
publisherRouter.get("/:id/publisher-update", usersController.publisherUpdateGet);
publisherRouter.post("/:id/publisher-update", usersController.publisherUpdatePost);
publisherRouter.post("/:id/publisher-delete", usersController.publisherDeletePost);


module.exports = publisherRouter;
