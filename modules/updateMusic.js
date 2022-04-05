'use strict';

const express = require('express');
const app = express();
app.use(express.json());

const mongoose = require('mongoose');
mongoose.connect(process.env.DB_URL);
const SearchedSong = require('../models/music');

async function updateMusic(req, res, next) {
  let id = req.params.id;
  try{
    let updateMusic = await SearchedSong.findByIdAndUpdate(id, req.body, {new: true, overwrite: true});
    res.status(200).send(updateMusic);
  }catch (error){
    next(error);
  }
}
module.exports = updateMusic;