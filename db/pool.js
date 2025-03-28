const { Pool } = require("pg");

// All of the following properties should be read from environment variables
// We're hardcoding them here for simplicity

export default new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  port: Number(process.env.DB_PORT),
  ssl: {
    rejectUnauthorized: true,
    ca: process.env.DB_CA,
  },
});


/* module.exports = new Pool({
  host: "jsdev4web-jsdev4web.l.aivencloud.com", // or wherever the db is hosted
  user: "avnadmin",
  database: "defaultdb",
  password: "AVNS_tt7fmfIzilPqBdPVUmo",
  port: 23300 // The default port

}); */
