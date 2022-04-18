/* eslint-disable no-unused-vars */

module.exports = {
  getAllDonors: (_, res, next) => {
    try {
      res.json({ status: 200, message: 'OK' });
    } catch (err) {
      next('SERVER ERROR');
    }
  },
};
