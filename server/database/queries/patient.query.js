const { Patient } = require('../models');
/**
 * @param  {}
 */
const findAllPatientQuery = () => Patient.find();

/**
 * @param  {} {name
 * @param  {} bloodGroup}
 */
const createPatientQuery = ({ name, bloodGroup }) =>
  Patient.create({ name, bloodGroup });

module.exports = {
  findAllPatientQuery,
  createPatientQuery,
};
