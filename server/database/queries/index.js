const { findAllPatientQuery, createPatientQuery } = require('./patient.query');
const { findAllDonorQuery, createDonorQuery } = require('./donor.query');
const {
  findAllBloodBankQuery,
  createBloodBankQuery,
} = require('./bloodBank.query');

module.exports = {
  findAllBloodBankQuery,
  createBloodBankQuery,
  findAllPatientQuery,
  createPatientQuery,
  findAllDonorQuery,
  createDonorQuery,
};
