const { Schema, model } = require('mongoose');

const donorSchema = new Schema({
  name: 'string',
  bloodGroup: 'string',
  contactNumber: 'string',
  bank: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'BloodBank',
  },
});

const Donor = model('Donor', donorSchema);

module.exports = Donor;
