"use strict";

const mongoose = require('mongoose');

const{ Schema } = mongoose;

const musicSchema = new Schema({

    artistName : {type: String},
    trackName : {type: String},
    artWork : {type: String},
    genre : {type: String},
    note : {type: String},
    email : {type: String},
    previewUrl: {type: String}

  })

const SearchedSong = mongoose.model('music', musicSchema);

module.exports = SearchedSong;