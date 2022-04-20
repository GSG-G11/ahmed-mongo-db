const express = require('express');
const { getAllPosts, createPosts } = require('../../controllers');

const users = express.Router();

users.get('/', getAllPosts);
users.post('/', createPosts);

module.exports = users;
