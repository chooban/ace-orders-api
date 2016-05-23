const express = require('express');
const router = express.Router();
const exportHandler = require('./orders/exportOrder');

router.post('/export', exportHandler);

module.exports = router;
