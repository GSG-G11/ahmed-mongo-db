/* eslint-disable no-unused-vars */

module.exports = {
  /**
   * @param  {} _
   * @param  {} res
   * @param  {} next
   */
  handleErrorNotFound: (_, res, next) => {
    try {
      res.status(400).json({ status: 400, message: 'Not Found' });
    } catch (err) {
      next('SERVER ERROR');
    }
  },
};
