const express = require('express');
const { getAllBloodBanks } = require('../../controllers');

const bloodBanks = express.Router();

bloodBanks.get('/', getAllBloodBanks);

module.exports = bloodBanks;
