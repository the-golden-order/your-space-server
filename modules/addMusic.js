"use strict";

const mongoose = require("mongoose");
mongoose.connect(process.env.DB_URL);
const musicSchema = require("../models/music");

async function addMusic(req, res, next) {
  try {
    let results = await musicSchema.find();
    res.status(200).send(results);
  } catch (error) {
    next(error);
  }
}

module.exports = addMusic;
