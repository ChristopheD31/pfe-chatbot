// This controller will manage all the possible configurable database elements/

const Database = require('../models/Database');
const MongoDb = require('../models/strategies/MongoDb');

// Database instance using strategy pattern
const gooseDB = new MongoDb() 
const singleDB = new Database(gooseDB);

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