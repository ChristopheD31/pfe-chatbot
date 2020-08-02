const Chatbot = require('../models/Chatbot');
const WitAi = require('../models/strategies/WitAi');

const Database = require('../models/Database');
const MongoDb = require('../models/strategies/MongoDb');

// Chatbot instance using strategy pattern
const wit = new WitAi();
const chatbot = new Chatbot(wit);

// Database instance using strategy pattern
const gooseDB = new MongoDb() 
const singleDB = new Database(gooseDB);

exports.extractIntentFromMessage = function (req, res) {
    let message = req.body.message;

    chatbot.getIntent(message).then(response => {
        res.json(response)
    }).catch(error => {
        res.json({"error": error.message, "stack": error.stack});
    });;
};

exports.getReplyToMessage = function (req, res) {
    let message = req.body.message;

    chatbot.getIntent(message).then(intent => {
        let intentValue = intent[0].name;

        singleDB.findOne(intentValue).then(response => {
            res.json(response);
        }).catch(error => {
            res.json({"error": error.message, "stack": error.stack});
        });
    }).catch(error => {
        res.json({"error": error.message, "stack": error.stack});
    });
};