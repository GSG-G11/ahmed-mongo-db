const { getAllPatients, createPatient } = require('./patientsController');
const { getAllDonors, createDonor } = require('./donorsController');
const { getAllBloodBanks, createBloodBank } = require('./bloodBanksController');

module.exports = {
  getAllPatients,
  createPatient,
  getAllDonors,
  createDonor,
  getAllBloodBanks,
  createBloodBank,
};
