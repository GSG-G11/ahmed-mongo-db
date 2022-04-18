/* eslint-disable no-unused-vars */

module.exports = {
  handleErrorNotFound: (_, res, next) => {
    try {
      res.status(400).json({ status: 400, message: 'Not Found' });
    } catch (err) {
      next('SERVER ERROR');
    }
  },
};
