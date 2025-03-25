
const db = require("../db/queries");


async function gameListGet(req, res) {
  const game = await db.getAllGames();
  console.log("game: ", game);
  res.render("gameList", {
    title: "Game Page",
    game: game,
  });
};

async function gameCreateGet(req, res){
  res.render("game", {
    title: "Create Entry",
  });
};

async function gameCreateItem (req, res) {
    const { name, publisher_id, year, game_id  } = req.body
    await db.insertGame(name, publisher_id, year, game_id);
    console.log("log Post data: ", req.body.name, req.body.publisher_id, req.body.year, req.body.game_id )
  res.redirect("/");
};

async function gameUpdateGet (req, res) {
  let gameid = req.params.id
  console.log(gameid)
  res.render("gameUpdate", {
    gameid: gameid,
    title: "Update Game",
  })
};

async function gameUpdatePost (req, res) {
  
    const { name, publisher_id, year, game_id } = req.body;
    let gameid = req.params.id;    
    await db.updateGame(gameid, name, publisher_id, year, game_id );
    res.redirect("/");
  }

async function gameDeletePost(req, res) {
  gameid = req.params.id
  console.log(gameid)
  await db.deleteGame(gameid)
  res.redirect("/");
};



module.exports = {
    gameListGet,
    gameCreateGet,
    gameCreateItem,
    gameUpdateGet,
    gameUpdatePost,
    gameDeletePost
  };

