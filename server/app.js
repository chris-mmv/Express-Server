// import files and packages up here
const express = require('express');
const morgan = require('morgan');
const topSpots = require('./data.json');


// const port = 3000; in index.js



// create your express server below
const app = express();

// add your routes and middleware below
app.use(morgan('dev'));

app.get("/", (req, res) => {
  res.status(200).send("Server is running");
});

app.get("/data", (req, res) => {
  res.status(200).json(topSpots);
});

// finally export the express application
module.exports = app;
