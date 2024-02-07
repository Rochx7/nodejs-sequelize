const express = require("express");
const persons = require("./personsRoute.js");

module.exports = (app) => {
  app.use(express.json(), persons);
};
