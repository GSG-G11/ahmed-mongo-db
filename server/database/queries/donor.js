const Donor = require('../models/donor');

const findAllDonor = () => Donor.find();

module.exports = {
  findAllDonor,
};
