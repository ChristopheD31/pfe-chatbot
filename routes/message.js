var express = require('express');
var router = express.Router();

// Require controller modules
var messageController = require('../controllers/messageController');

// Message related routes
router.post('/', messageController.extractFromMessage);

router.get('/reply', messageController.getResponseFromIntent);

router.get('/', function(req, res, next) {
    res.render('error', { message: 'GET request not permitted on this endpoint', error: {status: 405} });
  });

module.exports = router;