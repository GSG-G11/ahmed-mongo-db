const { handleErrorNotFound } = require('./notFoundError');
const { handleErrorServer } = require('./serverError');

module.exports = {
  handleErrorNotFound,
  handleErrorServer,
};
