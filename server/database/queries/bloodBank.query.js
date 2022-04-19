const { BloodBank } = require('../models');

const findAllBloodBankQuery = () => BloodBank.find().populate('donors');
const createBloodBankQuery = ({ name, city, contactNumber }) =>
  BloodBank.create({ name, city, contactNumber });

module.exports = {
  findAllBloodBankQuery,
  createBloodBankQuery,
};
