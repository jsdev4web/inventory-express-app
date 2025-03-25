const { Router } = require("express");
const usersController = require("../controllers/gameController");
const dataRouter = Router();

dataRouter.get("/gameList", usersController.gameListGet);
dataRouter.get("/game", usersController.gameCreateGet);
dataRouter.post("/game", usersController.gameCreateItem);
dataRouter.get("/:id/game-update", usersController.gameUpdateGet);
dataRouter.post("/:id/game-update", usersController.gameUpdatePost);
dataRouter.post("/:id/game-delete", usersController.gameDeletePost)

module.exports = dataRouter;
