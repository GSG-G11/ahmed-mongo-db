const express = require('express');
const { getAllDonors } = require('../../controllers');

const donors = express.Router();

donors.get('/', getAllDonors);

module.exports = donors;
