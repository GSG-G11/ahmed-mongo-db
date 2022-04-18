const Patient = require('../models/patient');

const findAllPatientQuery = () => Patient.find();
const createPatientQuery = ({ name, bloodGroup }) => Patient.create({ name, bloodGroup });

module.exports = {
  findAllPatientQuery,
  createPatientQuery
};
