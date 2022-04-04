'use strict';

require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.DB_URL);
const SearchedSong = require('./models/music');

async function seed(){

  await SearchedSong.create({ 

  artistName: "As I Lay Dying",
  trackName: "Undefined",
  artWork: "https://is2-ssl.mzstatic.com/image/thumb/Music/v4/24/b0/ef/24b0efad-2aa0-bc5f-ddcc-73003c68f216/source/100x100bb.jpg",
  genre: "Metal",
  albumName: "Frail Words Collapse",
  note: "",
  email: "anyemail@gmail.com",


  })
  mongoose.disconnect();
}

seed();
