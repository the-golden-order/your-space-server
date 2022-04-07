'use strict';

const mongoose = require('mongoose');
mongoose.connect(process.env.DB_GAME_URL);
const SearchedSong = require('../models/music');
const verifyUser = require('../auth');

async function deleteMusic(req, res, next) {
  let id = req.params.id;
  verifyUser(req, async (err, user) => {
    if (err) {
      console.error(err);
      res.send('invalid token');
    } else {
      try {
        const musicQuery = {};
        if (user.email) {
          musicQuery.email = user.email;
        }
        await SearchedSong.findByIdAndDelete(id);
        res.status(204).send("Entry Deleted");
      } catch (error) {
        next(error);
      }
    }
  });
  }

module.exports = deleteMusic;