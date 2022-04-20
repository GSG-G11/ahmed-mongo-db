/* eslint-disable no-unused-vars */

const { Post } = require('../../database');

module.exports = {
  /**
   * @param  {} _
   * @param  {} res
   * @param  {} next
   */
  getAllPosts: async (_, res, next) => {
    try {
      const posts = await Post.find().populate('author').exec();
  
      res.json({ status: 200, posts });
    } catch (err) {
      next('SERVER ERROR');
    }
  },
  /**
   * @param  {} {body}
   * @param  {} res
   * @param  {} next
   */
  createPosts: async ({ body: { content, author } }, res, next) => {
    try {
      const post = await Post.create({ content, author });
      res.json({ status: 200, post });
    } catch (err) {
      next('SERVER ERROR');
    }
  },
};
