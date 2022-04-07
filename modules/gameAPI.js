"use strict";
const axios = require("axios");

// Get data from API URL
async function getGame(request, response) {
  try {
    let term = request.query.term;
    let url = `${term}`;

    let gameSearch = await axios.get(url);
    let gameData = [];
    gameSearch.data.results.forEach((element) => {
      let selectedGame = new Game(element);
      gameData.push(selectedGame);
    });
    response.send(gameData);
  } catch (error) {
    console.log(error);
  }
}

// Classes for map function
class Game {
  constructor(element) {
    // this.whatever = element.valueName
    this.artistName = element.artistName
    this.trackName = element.trackName
    this.artWork = element.artworkUrl100
    this.genre = element.primaryGenreName
    this.albumName = element.collectionName

    // this.songUrl = element.trackViewUrl
    // this.previewUrl = element.previewUrl
    
  }
}

module.exports = getSteam;
