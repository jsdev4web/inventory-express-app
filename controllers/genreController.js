
const db = require("../db/queries");
const { gameDeletePost } = require("./gameController");


async function genreGet(req, res) {
  const genres = await db.getAllGenres();
  console.log("genres: ", genres);
  res.render("genreList", {
    title: "Genre Page",
    genres: genres,
  });
};

async function genreCreateGet(req, res){
  res.render("genre", {
    title: "Create Entry",
  });
};

async function genreCreateItem (req, res) {
    const { genres_id, genres_name  } = req.body
    await db.insertGenre(genres_id, genres_name);
    console.log("log Post data: ", req.body.genres_id, req.body.genres_name )
  res.redirect("/");
};

async function genreUpdateGet (req, res) {
  let gameid = req.params.id
  console.log(gameid)
  res.render("genreUpdate", {
    gameid: gameid,
    title: "Update Genre",
  })
};

async function genreUpdatePost (req, res) {
  
    const { genres_id, genres_name } = req.body;
    let gameid = req.params.id;    
    await db.updateGenre(gameid, genres_id, genres_name );
    res.redirect("/");
  }

async function genreDeletePost(req, res) {
  gameid = req.params.id
  console.log(gameid)
  await db.deleteGenre(gameid)
  res.redirect("/");
};



module.exports = {
    genreGet,
    genreCreateGet,
    genreCreateItem,
    genreUpdateGet,
    genreUpdatePost,
    genreDeletePost
  };

