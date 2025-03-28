const { Pool } = require("pg");

// All of the following properties should be read from environment variables
// We're hardcoding them here for simplicity

module.exports = new Pool({
  host: "jsdev4web-jsdev4web.l.aivencloud.com", // or wherever the db is hosted
  user: "avnadmin",
  database: "defaultdb",
  password: "AVNS_tt7fmfIzilPqBdPVUmo",
  port: 23300 // The default port

});
