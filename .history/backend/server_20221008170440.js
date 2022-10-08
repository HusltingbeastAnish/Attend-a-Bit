const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");

const port = process.env.PORT || 3000;
const app = express();

// Congifuring the dotenv
dotenv.config({ path: "./config.env" });

// Mongoose Connection
const ConnectDB = require("./server/database/connection");
ConnectDB();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, (req, res) => {
  console.log(`The server is running at http://localhost:${port}`);
});
