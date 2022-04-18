const express = require('express');
const donors = require('./donors.router');
const patients = require('./patients.router');
const bloodBanks = require('./bloodBanks.router');

const apiRoute = express();

apiRoute.use('/donors', donors);
apiRoute.use('/patients', patients);
apiRoute.use('/blood-banks', bloodBanks);

module.exports = apiRoute;
