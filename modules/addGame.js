'use strict';

const mongoose = require('mongoose');
mongoose.connect(process.env.DB_GAME_URL);
const gameSchema = require('../models/game');
const verifyUser = require('../auth');

async function addGame(req, res) {
  verifyUser(req, async (err, user) => {
    if (err) {
      console.error(err);
      res.send('invalid token');
   } else {
      try {
        const gameQuery = {};
        if(user.email){
          gameQuery.email = user.email;
        }
        let addedGame = await gameSchema.create(req.body);
        res.status(201).send(addedGame);
      } catch (error) {
        console.log(error.message);
        res.status(500).send(error.message);
      }
    }
  });
}

module.exports = addGame;