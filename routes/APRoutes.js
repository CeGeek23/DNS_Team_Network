const express = require('express');
const router = express.Router();
const APController = require('../controllers/APController');

router.get('/', APController.generateAPWebPage);
router.post('/create-access-point', APController.launchWifi);

module.exports = router;