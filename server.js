'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

mongoose.connect(process.env.DB_URL);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function (){
  console.log('Mongoose is connected');
})

const app = express();
app.use(cors());
app.use(express.json());


// REQUIRE MODULES
const getItunes = require("./modules/Itunes");

const PORT = process.env.PORT || 3002;
// GET ROUTES FROM MODULES
app.get("/Itunes", getItunes);

app.get('/', (req, res) => {
  res.send('welcome to your space');
})

app.get('/test', (req, res) => {
  res.send('test request received');
})

app.get('*', (req, res)=>{
  res.status(404).send('No such directory');
})

app.use((error, req, res)=> {
  res.status(500).send(error.message);
})

app.listen(PORT, () => console.log(`Server is serving on port ${PORT}`));