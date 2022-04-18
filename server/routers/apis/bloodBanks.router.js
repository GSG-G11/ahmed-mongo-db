const express = require('express');
const { getAllBloodBanks, createBloodBank } = require('../../controllers');

const bloodBanks = express.Router();

bloodBanks.get('/', getAllBloodBanks);
bloodBanks.post('/', createBloodBank);

module.exports = bloodBanks;
