/* eslint-disable no-unused-vars */

const {
  findAllDonorQuery,
  createDonorQuery,
} = require('../../database/queries/donor');

module.exports = {
  getAllDonors: async (_, res, next) => {
    try {
      const donors = await findAllDonorQuery();
      res.json({ status: 200, donors });
    } catch (err) {
      next('SERVER ERROR');
    }
  },
  createDonor: async ({ body }, res, next) => {
    try {
      const donor = await createDonorQuery(body);
      res.json({ status: 200, donor });
    } catch (err) {
      next('SERVER ERROR');
    }
  },
};
