'use strict';

const mongoose = require('mongoose');
mongoose.connect(process.env.DB_URL);
const gameSchema = require('../models/game');
const express = require("express");
const app = express();
app.use(express.json());

async function addGame(req, res) {
  try {
    let addedGame = await gameSchema.create(req.body);
    res.status(201).send(addedGame);
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
};


module.exports = addGame;