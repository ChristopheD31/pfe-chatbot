const Database = require('../models/Database');
const MongoDb = require('../models/strategies/MongoDb');


// Database instance using strategy pattern
// Connection is made at index.js
const gooseDB = new MongoDb() 
const singleDB = new Database(gooseDB);


exports.addConfiguration = function (req, res) {
    res.send('NOT IMPLEMENTED: addConfiguration');
};

exports.listConfiguration = function (req, res) {
    res.send('NOT IMPLEMENTED: listConfiguration');
};

exports.addAnswerToIntent = function (req, res) {
    
    singleDB.update(req.body).then(response => {
        res.json({"message": "update successful"});
    }).catch(error => {
        res.json({"error": error.message, "stack": error.stack});
    });    
};

exports.dropAnswerToIntent = function (req, res) {
    let message = req.body.message;

    singleDB.delete(req.body).then(response => {
        res.json({"message": "delete successful"});
    }).catch(error => {
        res.json({"error": error.message, "stack": error.stack});
    });
};