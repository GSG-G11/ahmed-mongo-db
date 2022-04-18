module.exports = {
  customError: (message, status, massages) => {
    const error = new Error(message);
    error.status = status;
    error.massages = massages;
    return error;
  },
};
