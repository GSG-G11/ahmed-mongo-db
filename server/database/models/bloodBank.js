const { Schema, model } = require('mongoose');

const BloodBankSchema = new Schema({
  name:  'string',
  city: 'string',
  contactNumber: 'string',
  // donors: {
	// 	type: Schema.Types.ObjectId,
	// 	ref: 'Donor',
	// },
});

const BloodBank = model('BloodBank', BloodBankSchema);

module.exports = BloodBank;
