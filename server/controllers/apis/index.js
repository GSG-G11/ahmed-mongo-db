const { getAllPatients, createPatient } = require('./patientsController');
const { getAllDonors, createDonor } = require('./donorsController');
const { getAllBloodBanks } = require('./bloodBanksController');

module.exports = {
  getAllPatients,
  createPatient,
  getAllDonors,
  createDonor,
  getAllBloodBanks,
};
