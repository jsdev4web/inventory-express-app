
const db = require("../db/queries");


async function publisherGet(req, res) {
  const publishers = await db.getAllPublishers();
  console.log("publishers: ", publishers);
  res.render("publisherList", {
    title: "Publisher Page",
    publishers: publishers,
  });
};

async function publisherCreateGet(req, res){
  res.render("publisher", {
    title: "Create Entry",
  });
};

async function publisherCreateItem (req, res) {
    const { publisher_id, publisher_name  } = req.body
    await db.insertPublisher(publisher_id, publisher_name);
    console.log("log Post data: ", req.body.publisher_id, req.body.publisher_name )
  res.redirect("/");
};

async function publisherUpdateGet (req, res) {
  let gameid = req.params.id
  console.log(gameid)
  res.render("publisherUpdate", {
    gameid: gameid,
    title: "Update Publisher",
  })
};

async function publisherUpdatePost (req, res) {
  
    const { publisher_id, publisher_name } = req.body;
    let gameid = req.params.id;    
    await db.updatePublisher(gameid, publisher_id, publisher_name);
    res.redirect("/");
  }

async function publisherDeletePost(req, res) {
  let gameid = req.params.id
  console.log(gameid)
  await db.deletePublisher(gameid)
  res.redirect("/");
};



module.exports = {
    publisherGet,
    publisherCreateGet,
    publisherCreateItem,
    publisherUpdateGet,
    publisherUpdatePost,
    publisherDeletePost
  };

