"use strict";
const verifyUser = require('../auth');


const mongoose = require("mongoose");
mongoose.connect(process.env.DB_URL);
const gameSchema = require("../models/game");


async function getGame(req, res) {
  verifyUser(req, async (err, user) => {
    if (err) {
      console.error(err);
      res.send('invalid token');
   } else {
      try {
        const gameQuery = {};
        if (user.email){
          gameQuery.email = user.email;
        }
        let results = await gameSchema.find();
        res.status(200).send(results);
      } catch (error) {
        console.log(error.message);
        res.status(500).send(error.message);
      }
    }
  });
}

module.exports = getGame;
