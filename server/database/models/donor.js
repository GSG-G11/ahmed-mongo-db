const { Schema, model } = require('mongoose');

const donorSchema = new Schema({
  name:  'string',
  bloodGroup: 'string',
  contactNumber: 'string',
  // bloodBank: 'string',
});

const Donor = model('Donor', donorSchema);

module.exports = Donor;
