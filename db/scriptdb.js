#! /usr/bin/env node

const { Client } = require("pg");

const SQL = `

CREATE TABLE IF NOT EXISTS game (
   id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
   name VARCHAR (255),
   publisher_id int,
   year int,
   game_id int
);


INSERT INTO game (name, publisher_id, year, game_id) 
VALUES
  ('Excite-Bike', 9991, 1990, 0991),
  ('Punch Out', 1101, 1988, 8891),
  ('Ninja', 8322, 1987, 7891);


CREATE TABLE IF NOT EXISTS genres (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    genres_id INT,
    genres_name VARCHAR (255)
 );

 INSERT INTO genres (genres_id, genres_name) 
VALUES
  (1990, 'action'),
  (1988, 'action'),
  (1987, 'adventure');

 CREATE TABLE IF NOT EXISTS reviews (
   id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
   game_id int,
   rating INT
);

INSERT INTO reviews (game_id, rating) 
VALUES
  (1990, 78),
  (1988, 98),
  (1987, 86);

  CREATE TABLE IF NOT EXISTS publishers (
   id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
   publisher_id int,
   publisher_name VARCHAR (255)
);

INSERT INTO publishers (publisher_id, publisher_name) 
VALUES
  (1990, 'Sega'),
  (1988, 'Nintendo'),
  (1987, 'Nintendo');
  
`;

async function main() {
    console.log("seeding...");
    const client = new Client({
      connectionString: "postgresql://jsdev4web:j1QLj68sMZUHMiuRnU6FhMSY8n7nbCJe@dpg-cvhf09trie7s73enf4r0-a.oregon-postgres.render.com/jsdev4web",
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log("done");
  }
  
  main();