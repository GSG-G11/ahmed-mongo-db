const Donor = require('../models/donor');

const findAllDonorQuery = () => Donor.find();
const createDonorQuery = ({ name, bloodGroup,contactNumber }) =>
  Donor.create({ name, bloodGroup,contactNumber });

module.exports = {
  findAllDonorQuery,
  createDonorQuery,
};
