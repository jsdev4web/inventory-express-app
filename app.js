const express = require("express");
const app = express();
const homeRouter = require("./routes/homeRouter")
const gameRouter = require("./routes/gameRouter");
const reviewRouter = require("./routes/reviewRouter");
const publisherRouter = require("./routes/publisherRouter")
const genreRouter = require("./routes/genreRouter")
const db = require("./db/scriptdb");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use("/", homeRouter);
app.use("/", gameRouter);
app.use("/", reviewRouter);
app.use("/", publisherRouter);
app.use("/", genreRouter);





const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`)
    db.main
})