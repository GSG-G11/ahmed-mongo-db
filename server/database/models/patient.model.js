const { Schema, model } = require('mongoose');

const PatientSchema = new Schema({
  name: 'string',
  bloodGroup: 'string',
});

module.exports = model('Patient', PatientSchema);

