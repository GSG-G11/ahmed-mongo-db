const { getAllPatients,createPatient } = require('./patientsController');
const { getAllDonors } = require('./donorsController');
const { getAllBloodBanks } = require('./bloodBanksController');

module.exports = {
  getAllPatients,
  getAllDonors,
  getAllBloodBanks,
  createPatient
};
