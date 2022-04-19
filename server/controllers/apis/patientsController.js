/* eslint-disable no-unused-vars */

const {
  findAllPatientQuery,
  createPatientQuery,
} = require('../../database');

module.exports = {
  getAllPatients: async (_, res, next) => {
    try {
      const patients = await findAllPatientQuery();
      res.json({ status: 200, patients });
    } catch (err) {
      next('SERVER ERROR');
    }
  },
  createPatient: async ({ body }, res, next) => {
    try {
      const patient = await createPatientQuery(body);
      res.json({ status: 200, patient });
    } catch (err) {
      next('SERVER ERROR');
    }
  },
};
