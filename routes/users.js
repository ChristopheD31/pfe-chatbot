var express = require('express');
var router = express.Router();

// Require controller modules
var user_controller = require('../controllers/userController');

//sample routes
router.get('/', user_controller.user_list);

router.get('/:id', user_controller.user);

module.exports = router;