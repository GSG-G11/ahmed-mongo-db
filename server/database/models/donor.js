const { Schema, model } = require('mongoose');

const donorSchema = new Schema({
  name:  'string',
  bloodGroup: 'string',
  contactNumber: 'string',
  bloodBank: {
		type: Schema.Types.ObjectId,
		ref: 'BloodBank',
	},
});

const Donor = model('Donor', donorSchema);

module.exports = Donor;
