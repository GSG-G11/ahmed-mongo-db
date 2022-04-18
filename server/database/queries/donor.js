const Donor = require('../models/donor');

const findAllDonorQuery = () => Donor.find();
const createDonorQuery = ({ name, bloodGroup, contactNumber, bloodBank }) =>
  Donor.create({ name, bloodGroup, contactNumber, bloodBank });

module.exports = {
  findAllDonorQuery,
  createDonorQuery,
};
