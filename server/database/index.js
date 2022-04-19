const { Patient, Donor, BloodBank } = require('./models');
const {
  findAllBloodBankQuery,
  createBloodBankQuery,
  findAllPatientQuery,
  createPatientQuery,
  findAllDonorQuery,
  createDonorQuery,
} = require('./queries');

module.exports = {
  findAllBloodBankQuery,
  createBloodBankQuery,
  findAllPatientQuery,
  createPatientQuery,
  findAllDonorQuery,
  createDonorQuery,
  BloodBank,
  Patient,
  Donor,
};
