const { Patient } = require('../models');

const findAllPatientQuery = () => Patient.find();
const createPatientQuery = ({ name, bloodGroup }) =>
  Patient.create({ name, bloodGroup });

module.exports = {
  findAllPatientQuery,
  createPatientQuery,
};
