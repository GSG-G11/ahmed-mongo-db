const { Schema, model } = require('mongoose');

const BloodBankSchema = new Schema({
  name:  'string',
  city: 'string',
  contactNumber: 'string',
  
});

const BloodBank = model('BloodBank', BloodBankSchema);

module.exports = BloodBank;
