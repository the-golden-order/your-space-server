'use strict';

const mongoose = require('mongoose');
mongoose.connect(process.env.DB_URL);
const musicSchema = require('../models/music');
const express = require("express");
const app = express();
app.use(express.json());


async function addMusic(req, res) {
  try {
    let addedSong = await musicSchema.create(req.body);
    res.status(201).send(addedSong);
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
};


module.exports = addMusic;