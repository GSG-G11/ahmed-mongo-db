const express = require('express');
const { handleErrorNotFound, handleErrorServer } = require('../errors');

const apis = require('./apis');

// const { handleErrorServer, handleErrorNotFound } = require('../errors');

const router = express();

// --------------------    apis    -----------
router.use('/', apis);

// -------------------- Handle Error ---------------------
router.use(handleErrorNotFound);
router.use(handleErrorServer);

module.exports = router;
