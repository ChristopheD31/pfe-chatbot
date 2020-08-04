// This controller will manage all the possible configurable database elements/

const Database = require('../models/Database');
const MongoDb = require('../models/strategies/MongoDb');

// Database instance using strategy pattern
const gooseDB = new MongoDb() 
const singleDB = new Database(gooseDB);

exports.listAll = function (req, res) {
    singleDB.getAll().then(response => {
        res.json(response);
    }).catch(error => {
        res.json({"error Type": error.name, "error": error.message, "stack": error.stack});
    });
};

exports.addAnswerToIntent = function (req, res) {    
    singleDB.update(req.body).then(response => {
        res.json({"message": "update successful"});
    }).catch(error => {
        res.json({"error Type": error.name, "error": error.message, "stack": error.stack});
    });    
};

exports.dropAnswerToIntent = function (req, res) {
    let message = req.body.message;

    singleDB.delete(req.body).then(response => {
        res.json({"message": "delete successful"});
    }).catch(error => {
        res.json({"error Type": error.name, "error": error.message, "stack": error.stack});
    });
};