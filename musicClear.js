'use strict';

require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.DB_URL);

const Music = require('./models/music');

async function musicClear() {
  try {
    await Music.deleteMany({});
    console.log('music cleared from DB');
  } catch (err) {
    console.log(err);
  } finally {
    mongoose.disconnect();
  }
}

musicClear();