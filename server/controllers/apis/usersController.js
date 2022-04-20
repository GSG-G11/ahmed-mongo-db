/* eslint-disable no-unused-vars */

const { User } = require('../../database');

module.exports = {
  /**
   * @param  {} _
   * @param  {} res
   * @param  {} next
   */
  getAllUsers: async (_, res, next) => {
    try {
      const users = await User.find().populate('posts').exec();
      res.json({ status: 200, users });
    } catch (err) {
      next('SERVER ERROR');
    }
  },
  /**
   * @param  {} {body}
   * @param  {} res
   * @param  {} next
   */
  createUsers: async (
    { body: { firstName, lastName, age, city } },
    res,
    next,
  ) => {
    try {
      const user = await User.create({ firstName, lastName, age, city });
      res.json({ status: 200, user });
    } catch (err) {
      next('SERVER ERROR');
    }
  },
};
