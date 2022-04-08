'use strict';

const mongoose = require('mongoose');
mongoose.connect(process.env.DB_URL);
const SearchedSong = require('../models/music');


async function deleteMusic(req, res, next) {
  let id = req.params.id;
  try {
    await SearchedSong.findByIdAndDelete(id);
    res.status(204).send("Music Entry Deleted");
  } catch (error) {
    next(error);
  }
}

module.exports = deleteMusic;