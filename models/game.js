"use strict";

const mongoose = require('mongoose');

const { Schema } = mongoose;

const gameSchema = new Schema({

  title: {type: String},
  description: {type: String},
  genre: {type: String},
  platform: {type: String},
  game_url: {type: String},
  publisher: {type: String},
  email: {type: String},
  note: {type: String} 

})

const SearchedGame = mongoose.model('game', gameSchema);

module.exports = SearchedGame;