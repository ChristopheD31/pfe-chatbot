var express = require('express');
var router = express.Router();

// Require controller modules
var configurationController = require('../controllers/configurationController');

// Connect routes to controller methods
// router.post('/', configurationController.addConfiguration);
router.get('/', configurationController.listConfiguration);

router.post('/reply', configurationController.addAnswerToIntent);

module.exports = router;