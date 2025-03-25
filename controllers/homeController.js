

async function homeGet(req, res) {
  res.render("index", {
    title: "Home Page",
  });
};



module.exports = {
    homeGet
  };

