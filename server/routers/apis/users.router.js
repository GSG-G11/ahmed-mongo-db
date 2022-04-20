const express = require('express');
const { getAllUsers, createUsers} = require('../../controllers');

const users = express.Router();

users.get('/', getAllUsers);
users.post('/', createUsers);

module.exports = users;
