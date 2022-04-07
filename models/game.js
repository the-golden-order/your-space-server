"use strict";

const mongoose = require('mongoose');

const{ Schema } = mongoose;

const gameSchema = new Schema({


  })

const SearchedGame = mongoose.model('game', gameSchema);

module.exports = SearchedGame;