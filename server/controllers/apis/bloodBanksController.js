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
  getAllBloodBanks: async (_, res, next) => {
    try {
      const bloodBanks = await findAllBloodBankQuery();
      res.json({ status: 200, bloodBanks });
    } catch (err) {
      next('SERVER ERROR');
    }
  },
  createBloodBank: async ({ body }, res, next) => {
    try {
      const bloodBank = await createBloodBankQuery(body);
      res.json({ status: 200, bloodBank });
    } catch (err) {
      next('SERVER ERROR');
    }
  },
};
