const express = require('express');

const routers = require('./routers');

module.exports = (app) => {
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());
  app.use(routers);
};
