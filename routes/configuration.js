var express = require('express');
var router = express.Router();

// Require controller modules
var configurationController = require('../controllers/configurationController');

// Connect routes to controller methods
router.get('/replies', configurationController.listAll);

router.post('/reply', configurationController.addAnswerToIntent);

router.delete('/reply', configurationController.dropAnswerToIntent);

module.exports = router;