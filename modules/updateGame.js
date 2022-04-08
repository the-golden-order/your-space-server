'use strict';

const express = require('express');
const app = express();
app.use(express.json());

const mongoose = require('mongoose');
mongoose.connect(process.env.DB_URL);
const SearchedGame = require('../models/game');

async function updateGame(req, res, next) {
  let id = req.params.id;
  try{
    let updateGame = await SearchedGame.findByIdAndUpdate(id, req.body, {new: true, overwrite: true});
    res.status(200).send(updateGame);
  }catch (error){
    next(error);
  }
}
module.exports = updateGame;