const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController');

router.get('/get', dataController.getData);
router.post('/post', dataController.createData);
router.put('/put:id', dataController.updateData);
router.delete('/delete:id', dataController.deleteData);

module.exports = router;