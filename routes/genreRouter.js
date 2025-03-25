const { Router } = require("express");
const usersController = require("../controllers/genreController");
const genreRouter = Router();


genreRouter.get("/genreList", usersController.genreGet);
genreRouter.get("/genre", usersController.genreCreateGet);
genreRouter.post("/genre", usersController.genreCreateItem);
genreRouter.get("/:id/genre-update", usersController.genreUpdateGet);
genreRouter.post("/:id/genre-update", usersController.genreUpdatePost);
genreRouter.post("/:id/genre-delete", usersController.genreDeletePost);



module.exports = genreRouter;
