const Database = require('../models/Database');
const MongoDb = require('../models/strategies/MongoDb');

// Database instance using strategy pattern
// TODO : make this a singleton
const mongoDb = new MongoDb();
mongoDb.connect();
const database = new Database(mongoDb);

exports.addConfiguration = function (req, res) {
    res.send('NOT IMPLEMENTED: addConfiguration');
};

exports.listConfiguration = function (req, res) {
    res.send('NOT IMPLEMENTED: listConfiguration');
};

exports.addAnswerToIntent = function (req, res) {
    
    database.update(req.body).then(response => {
        res.json({"message": "update successful"});
    }).catch(error => {
        res.json({"error": error.message, "stack": error.stack});
    });    
};

exports.dropAnswerToIntent = function (req, res) {
    let message = req.body.message;

    database.delete(req.body).then(response => {
        res.json({"message": "delete successful"});
    }).catch(error => {
        res.json({"error": error.message, "stack": error.stack});
    });
};