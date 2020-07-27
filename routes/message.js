var express = require('express');
var router = express.Router();

// Require controller modules
var messageController = require('../controllers/messageController');

// Connect routes to controller methods

router.post('/intent', messageController.extractIntentFromMessage);

router.post('/reply', messageController.getReplyToMessage);

router.get('/', function(req, res, next) {
    res.render('error', { message: 'GET request not permitted on this endpoint', error: {status: 405} });
  });

module.exports = router;