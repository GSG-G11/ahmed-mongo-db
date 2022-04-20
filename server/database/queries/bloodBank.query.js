const { BloodBank } = require('../models');
/**
 * @param  {}
 */

const findAllBloodBankQuery = () => BloodBank.find();

/**
 * @param  {} {name
 * @param  {} city
 * @param  {} contactNumber}
 */
const createBloodBankQuery = ({ name, city, contactNumber }) =>
  BloodBank.create({ name, city, contactNumber });

module.exports = {
  findAllBloodBankQuery,
  createBloodBankQuery,
};
