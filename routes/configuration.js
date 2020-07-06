var express = require('express');
var router = express.Router();

// Require controller modules
var configurationController = require('../controllers/configurationController');

// Configuration related routes
router.post('/', configurationController.addConfiguration);

router.get('/', configurationController.listConfiguration);

module.exports = router;