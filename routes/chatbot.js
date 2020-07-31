var express = require('express');
var router = express.Router();

// Require controller modules
var chatbotController = require('../controllers/chatbotController');

// Connect routes to controller methods
router.get('/intentions', chatbotController.getAllIntents);

module.exports = router;