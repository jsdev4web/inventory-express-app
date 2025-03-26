const { Pool } = require("pg");
const fs = require("fs")

// All of the following properties should be read from environment variables
// We're hardcoding them here for simplicity

module.exports = new Pool({
  host: "ep-bold-river-a20i7id6.eu-central-1.pg.koyeb.app", // or wherever the db is hosted
  user: "koyeb-adm",
  database: "koyebdb",
  password: "npg_KoTs5cDMqxe9",
  port: 5432, // The default port
  ssl: {
    rejectUnauthorized: false // Or true, depending on your certificate setup
  }
});
