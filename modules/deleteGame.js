'use strict';

const mongoose = require('mongoose');
mongoose.connect(process.env.DB_URL);
const SearchedGame = require('../models/game');


async function deleteGame(req, res, next) {
  let id = req.params.id;
      try {
        await SearchedGame.findByIdAndDelete(id);
        res.status(204).send("Game Entry Deleted");
      } catch (error) {
        next(error);
      }
    }

module.exports = deleteGame;