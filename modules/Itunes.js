"use strict";
const axios = require("axios");

// Get data from API URL
async function getItunes(request, response) {
  try {
    let term = request.query.term;
    let url = `https://itunes.apple.com/search?term=${term}&limit=30`;
    let songSearch = await axios.get(url);
    let songData = [];
    songSearch.data.results.forEach((element) => {
      let selectedSong = new Song(element);
      songData.push(selectedSong);
    });
    response.send(songData);
  } catch (error) {
    console.log(error);
  }
}

// Classes for map function
class Song {
  constructor(element) {
    // this.whatever = element.valueName
    this.artistName = element.artistName
    this.trackName = element.trackName
    this.artWork = element.artworkUrl100
    this.genre = element.primaryGenreName
    this.albumName = element.collectionName
    this.previewUrl = element.previewUrl
    
    //this.trackUrl = element.trackViewUrl

    
  }
}

module.exports = getItunes;
