//express then server followed by middleware then routes requiring the router files
const express = require("express");
const server = express();
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const { logger } = require("../data/helpers/loggerMid");

// Global middleware
server.use(morgan("dev"));
server.use(helmet());
server.use(cors());
server.use(logger);
server.use(express.json());

//route handlers

server.get("/", (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

//custom middleware practicing having middleware to be in seperate files

module.exports = server;
