const { Patient, Donor, BloodBank, User, Post } = require('./models');
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
  Post,
  User,
};
