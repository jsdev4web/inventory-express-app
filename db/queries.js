require('dotenv').config()
const { raw } = require('express');
const pool = require("../.env")

const pool = require("./pool")



async function getAllGames() {
  const { rows } = await pool.query("SELECT * FROM game");
  return rows;
}


// ($1) represents a column
async function updateGame(gameid, name, publisher_id, year, game_id) {
  await pool.query("UPDATE game SET (name, publisher_id, year, game_id) = ($1, $2, $3, $4) WHERE id = " + gameid, [name, publisher_id, year, game_id]);
}


async function insertGame(name, publisher_id, year, game_id) {
  await pool.query("INSERT INTO game (name, publisher_id, year, game_id) VALUES ($1, $2, $3, $4)", [name, publisher_id, year, game_id]);
}

async function deleteGame(gameid) {
  await pool.query("DELETE FROM game WHERE id = " + gameid);
}


async function getAllReviews() {
    const { rows } = await pool.query("SELECT * FROM reviews");
    return rows;
  }
  
  async function insertReview(game_id, rating) {
    await pool.query("INSERT INTO reviews (game_id, rating) VALUES ($1, $2)", [game_id, rating]);
  }

  async function updateReview(gameid, rating, game_id) {
    await pool.query("UPDATE reviews SET (rating, game_id) = ($1, $2) WHERE id = " + gameid, [rating, game_id]);
  }

  async function deleteReview(gameid) {
    await pool.query("DELETE FROM reviews WHERE id = " + gameid);
  }

  async function getAllPublishers() {
    const { rows } = await pool.query("SELECT * FROM publishers");
    return rows;
  }
  
  async function insertPublisher(publisher_id, publisher_name) {
    await pool.query("INSERT INTO publishers (publisher_id, publisher_name) VALUES ($1, $2)", [publisher_id, publisher_name]);
  }

  async function updatePublisher(gameid, publisher_id, publisher_name) {
    await pool.query("UPDATE publishers SET (publisher_id, publisher_name) = ($1, $2) WHERE id = " + gameid, [publisher_id, publisher_name]);
  } 


  async function deletePublisher(gameid) {
    await pool.query("DELETE FROM publishers WHERE id = " + gameid);
  }

  async function getAllGenres() {
    const { rows } = await pool.query("SELECT * FROM genres");
    return rows;
  }
  
  async function insertGenre(genres_id, genres_name) {
    await pool.query("INSERT INTO genres (genres_id, genres_name) VALUES ($1, $2)", [genres_id, genres_name]);
  }

  async function updateGenre(gameid, genres_id, genres_name) {
    await pool.query("UPDATE genres SET (genres_id, genres_name) = ($1, $2) WHERE id = " + gameid, [genres_id, genres_name]);
  }

  async function deleteGenre(gameid) {
    await pool.query("DELETE FROM genres WHERE id = " + gameid);
  }

module.exports = {
    getAllGames,
    insertGame,
    updateGame,
    deleteGame,
    getAllReviews,
    insertReview,
    updateReview,
    deleteReview,
    getAllPublishers,
    insertPublisher,
    deletePublisher,
    updatePublisher,
    getAllGenres,
    insertGenre,
    updateGenre,
    deleteGenre
};