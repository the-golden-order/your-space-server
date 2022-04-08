"use strict";
const axios = require("axios");

// Get data from API URL
async function getGameAPI(request, response) {
  try {
    let url = `https://www.freetogame.com/api/games?platform=browser`;
    let gameSearch = await axios.get(url);
    let gameData = [];
    gameSearch.data.forEach((element) => {
      let selectedGame = new Game(element);
      gameData.push(selectedGame);
    });
    response.send(gameData);
  } catch (error) {
    console.log(error);
  }
}


class Game {
  constructor(element) {
    this.title = element.title, 
    this.description = element.short_description, 
    this.genre = element.genre,
    this.platform = element.platform,  
    this.game_url = element.game_url,
    this.publisher = element.publisher 
  }
}

module.exports = getGameAPI;
