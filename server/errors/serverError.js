/* eslint-disable no-unused-vars */

module.exports = {
  handleErrorServer: (error, req, res, next) => {
    if (error.status) {
      res.status(error.status).json({
        status: error.status,
        message: error.message,
        massages: error.massages,
      });
    } else {
      res.status(500).json({ status: 500, message: 'SERVER ERROR' });
    }
  },
};
