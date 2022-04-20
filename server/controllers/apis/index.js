const { getAllPatients, createPatient } = require('./patientsController');
const { getAllDonors, createDonor } = require('./donorsController');
const { getAllBloodBanks, createBloodBank } = require('./bloodBanksController');
const { getAllUsers, createUsers } = require('./usersController');
const { getAllPosts, createPosts } = require('./postsController');

module.exports = {
  getAllPatients,
  createPatient,
  getAllDonors,
  createDonor,
  getAllBloodBanks,
  createBloodBank,
  getAllUsers,
  createUsers,
  getAllPosts,
  createPosts,
};
