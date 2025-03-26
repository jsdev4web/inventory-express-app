const { Pool } = require("pg");
const fs = require("fs")

// All of the following properties should be read from environment variables
// We're hardcoding them here for simplicity

module.exports = new Pool({
  host: "postgresql://jsdev4web:j1QLj68sMZUHMiuRnU6FhMSY8n7nbCJe@dpg-cvhf09trie7s73enf4r0-a.oregon-postgres.render.com/jsdev4web", // or wherever the db is hosted
  user: "jsdev4web",
  database: "jsdev4web",
  password: "j1QLj68sMZUHMiuRnU6FhMSY8n7nbCJe",
  port: 5432, // The default port
  sslmode: false
});
