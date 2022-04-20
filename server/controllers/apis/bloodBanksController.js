/* eslint-disable no-unused-vars */

module.exports = {
  getAllBloodBanks: (_, res, next) => {
    try {
      res.json({ status: 200, message: 'OK' });
    } catch (err) {
      next('SERVER ERROR');
    }
  },
};

/* eslint-disable no-unused-vars */

const {
  findAllBloodBankQuery,
  createBloodBankQuery,
} = require('../../database');

module.exports = {
  /**
   * @param  {} _
   * @param  {} res
   * @param  {} next
   */
  getAllBloodBanks: async (_, res, next) => {
    try {
      const bloodBanks = await findAllBloodBankQuery().populate('donor').exec();

      res.json({ status: 200, bloodBanks });
    } catch (err) {
      next('SERVER ERROR');
    }
  },
  /**
   * @param  {} {body}
   * @param  {} res
   * @param  {} next
   */
  createBloodBank: async ({ body }, res, next) => {
    try {
      const bloodBank = await createBloodBankQuery(body);
      res.json({ status: 200, bloodBank });
    } catch (err) {
      next('SERVER ERROR');
    }
  },
};
