const express = require('express');
const { getAllDonors, createDonor } = require('../../controllers');

const donors = express.Router();

donors.get('/', getAllDonors);
donors.post('/', createDonor);

module.exports = donors;
