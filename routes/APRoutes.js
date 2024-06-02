const express = require('express');
const APController = require('../controllers/APController');

const router = express.Router();

router.post('/create-access-point', APController.launchWifi);
router.get('/', APController.generateAPWebPage);