/* eslint-disable no-unused-vars */

const { findAllDonorQuery, createDonorQuery } = require('../../database');

module.exports = {
  /**
   * @param  {} _
   * @param  {} res
   * @param  {} next
   */
  getAllDonors: async (_, res, next) => {
    try {
      const donors = await findAllDonorQuery().populate('bank').exec();
      res.json({ status: 200, donors });
    } catch (err) {

      next('SERVER ERROR');
    }
  },

  /**
   * @param  {} {body}
   * @param  {} res
   * @param  {} next
   */
  createDonor: async ({ body }, res, next) => {
    try {
      const donor = await createDonorQuery(body);
      res.json({ status: 200, donor });
    } catch (err) {
      next('SERVER ERROR');
    }
  },
};
