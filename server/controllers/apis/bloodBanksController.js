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
