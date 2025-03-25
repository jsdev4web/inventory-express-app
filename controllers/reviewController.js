
const db = require("../db/queries");


async function reviewGet(req, res) {
  const reviews = await db.getAllReviews();
  console.log("review: ", reviews);
  res.render("reviewList", {
    title: "Review Page",
    reviews: reviews,
  });
};

async function reviewCreateGet(req, res){
  res.render("review", {
    title: "Create Entry",
  });
};

async function reviewCreateItem (req, res) {
    const { game_id, rating  } = req.body
    await db.insertReview(game_id, rating);
    console.log("log Post data: ", req.body.game_id, req.body.rating )
  res.redirect("/");
};

async function reviewUpdateGet (req, res) {
  let gameid = req.params.id
  console.log(gameid)
  res.render("reviewUpdate", {
    gameid: gameid,
    title: "Update Review",
  })
};

async function reviewUpdatePost (req, res) {
    const { rating, game_id } = req.body;
    let gameid = req.params.id;    
    await db.updateReview(gameid, rating, game_id);
    res.redirect("/");
  }

async function reviewDeletePost(req, res) {
  let gameid = req.params.id
  console.log(gameid)
  await db.deleteReview(gameid)
  res.redirect("/");
};




module.exports = {
    reviewGet,
    reviewCreateGet,
    reviewCreateItem,
    reviewUpdateGet,
    reviewUpdatePost,
    reviewDeletePost
  };

