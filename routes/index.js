var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const connectionUri = process.env.MONGO_CONNECTION_URI || "mongodb://localhost/chatbot";

//Establishing connextion to database at app startup
mongoose.connect(connectionUri, { useNewUrlParser: true, useUnifiedTopology: true });

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
