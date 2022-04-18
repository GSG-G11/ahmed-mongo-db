const express = require('express');
const { getAllPatients, createPatient } = require('../../controllers');

const patients = express.Router();

patients.get('/', getAllPatients);
patients.post('/', createPatient);

module.exports = patients;
