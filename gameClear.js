'use strict';

require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.DB_URL);

const Game = require('./models/game');

async function gameClear() {
  try {
    await Game.deleteMany({});
    console.log('games cleared from DB');
  } catch (err) {
    console.log(err);
  } finally {
    mongoose.disconnect();
  }
}

gameClear();