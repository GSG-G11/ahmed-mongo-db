const { Schema, model } = require('mongoose');

const BloodBankSchema = new Schema({
  name:  'string',
  city: 'string',
  contactNumber: 'string',
  
});

BloodBankSchema.virtual('donor',{
  ref:'Donor',
  localField:'_id',
  foreignField:'bank'
})

const BloodBank = model('BloodBank', BloodBankSchema);

module.exports = BloodBank;
