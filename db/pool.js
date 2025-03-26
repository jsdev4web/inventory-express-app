const { Pool } = require("pg");

// All of the following properties should be read from environment variables
// We're hardcoding them here for simplicity

module.exports = new Pool({
  host: "dpg-cvhf09trie7s73enf4r0-a", // or wherever the db is hosted
  user: "jsdev4web",
  database: "jsdev4web",
  password: "j1QLj68sMZUHMiuRnU6FhMSY8n7nbCJe",
  port: 5432 // The default port
});
