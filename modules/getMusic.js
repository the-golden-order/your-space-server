"use strict";
const verifyUser = require('../auth');


const mongoose = require("mongoose");
mongoose.connect(process.env.DB_URL);
const musicSchema = require("../models/music");


async function getMusic(req, res) {
  verifyUser(req, async (err, user) => {
    if (err) {
      console.error(err);
      res.send('invalid token');
   } else {
      try {
        const musicQuery = {};
        if (user.email){
          musicQuery.email = user.email;
        }
        let results = await musicSchema.find();
        res.status(200).send(results);
      } catch (error) {
        console.log(error.message);
        res.status(500).send(error.message);
      }
    }
  });
}

module.exports = getMusic;
