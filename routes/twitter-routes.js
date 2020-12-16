const express = require("express");
const mongoose = require("mongoose");
const twitterRoutes = express.Router();

twitterRoutes.get("/tweets", (req, res, next) => {
  (response) => res.json({ message: "réponse récue de twitter" });
});

module.exports = twitterRoutes;
