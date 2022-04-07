'use strict';

const mongoose = require('mongoose');
mongoose.connect(process.env.DB_URL);
const musicSchema = require('../models/music');
const verifyUser = require('../auth');

async function addMusic(req, res) {
  verifyUser(req, async (err, user) => {
    if (err) {
      console.error(err);
      res.send('invalid token');
   } else {
      try {
        const musicQuery = {};
        if(user.email){
          musicQuery.email = user.email;
        }
        let addedSong = await musicSchema.create(req.body);
        res.status(201).send(addedSong);
      } catch (error) {
        console.log(error.message);
        res.status(500).send(error.message);
      }
    }
  });
}

module.exports = addMusic;