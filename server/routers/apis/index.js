const express = require('express');
const donors = require('./donors.router');
const patients = require('./patients.router');
const bloodBanks = require('./bloodBanks.router');
const users = require('./users.router');
const posts = require('./posts.router');

const apiRoute = express();

apiRoute.use('/donors', donors);
apiRoute.use('/patients', patients);
apiRoute.use('/blood-banks', bloodBanks);
apiRoute.use('/users', users);
apiRoute.use('/posts', posts);

module.exports = apiRoute;
