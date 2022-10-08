const express = require("express");
const dotenv = require("dotenv");

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, (req, res) => {
  console.log(`The server is running at http://localhost:${port} `);
});
