const BloodBank = require('../models/bloodBank');

const findAllBloodBank = () => BloodBank.find();

module.exports = {
  findAllBloodBank,
};
