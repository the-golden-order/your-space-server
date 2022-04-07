'use strict';

const mongoose = require('mongoose');
mongoose.connect(process.env.DB_GAME_URL);
const SearchedGame = require('../models/game');
const verifyUser = require('../auth');

async function deleteGame(req, res, next) {
  let id = req.params.id;
  verifyUser(req, async (err, user) => {
    if (err) {
      console.error(err);
      res.send('invalid token');
    } else {
      try {
        const gameQuery = {};
        if (user.email) {
          gameQuery.email = user.email;
        }
        await SearchedGame.findByIdAndDelete(id);
        res.status(204).send("Entry Deleted");
      } catch (error) {
        next(error);
      }
    }
  });
  }

module.exports = deleteGame;