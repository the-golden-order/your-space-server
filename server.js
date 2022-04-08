"use strict";

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
//const verifyUser = require('./auth');

mongoose.connect(process.env.DB_URL);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Mongoose is connected");
});

const app = express();
app.use(cors());
app.use(express.json());

// REQUIRE MODULES
const getItunes = require("./modules/Itunes");
const deleteMusic = require("./modules/deleteMusic");
const updateMusic = require("./modules/updateMusic");
const getMusic = require('./modules/getMusic');
const addMusic = require('./modules/addMusic');

// REQUIRE MODULES GAMES
const getGameAPI = require("./modules/gameAPI");
const deleteGame = require("./modules/deleteGame");
const updateGame = require("./modules/updateGame");
const getGame = require('./modules/getGame');
const addGame = require('./modules/addGame');

// GET ROUTES FROM MODULES
app.get("/Itunes", getItunes);

// ROUTE TO GET MONGODATA
app.delete("/music/:id", deleteMusic);
app.put("/music/:id", updateMusic);
app.get("/music", getMusic);
app.post("/music", addMusic);

//GET ROUTE FOR Game API
app.get("/GameAPI", getGameAPI);

//ROUTE TO GET GAME MONGODATA
app.delete("/game/:id", deleteGame);
app.put("/game/:id", updateGame);
app.get("/game", getGame);
app.post("/game", addGame);


app.get("/", (req, res) => {
  res.send("welcome to your space");
});

app.get("/test", (req, res) => {
  res.send("test request received");
});

app.get("*", (req, res) => {
  res.status(404).send("No such directory");
});

app.use((error, req, res) => {
  res.status(500).send(error.message);
});

const PORT = process.env.PORT || 3002;

app.listen(PORT, () => console.log(`Server is serving on port ${PORT}`));
