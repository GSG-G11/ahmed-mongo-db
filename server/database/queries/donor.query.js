const { Donor } = require('../models');

/**
 * @param  {}
 */
const findAllDonorQuery = () => Donor.find();

/**
 * @param  {} {name
 * @param  {} bloodGroup
 * @param  {} contactNumber
 * @param  {} bloodBank}
 */
const createDonorQuery = ({ name, bloodGroup, contactNumber, bank }) =>
  Donor.create({ name, bloodGroup, contactNumber, bank });

module.exports = {
  findAllDonorQuery,
  createDonorQuery,
};
