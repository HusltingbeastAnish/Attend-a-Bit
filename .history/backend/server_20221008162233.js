const express = require("express");
const dotenv = require("dotenv");

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World");
});
