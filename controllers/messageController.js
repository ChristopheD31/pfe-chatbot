const Chatbot = require('../models/Chatbot');
const WitAi = require('../models/strategies/WitAi');

const Database = require('../models/Database');
const MongoDb = require('../models/strategies/MongoDb');


// Chatbot instance using strategy pattern
const wit = new WitAi();
const chatbot = new Chatbot(wit);

// Database instance using strategy pattern
// TODO : make this a singleton
// const mongoDb = new MongoDb();
// mongoDb.connect();
// const database = new Database(mongoDb);

exports.extractIntentFromMessage = function (req, res) {
    let message = req.body.message;

    chatbot.getIntent(message).then(response => {
        res.json(response)
    });
};

exports.getReplyToMessage = function (req, res) {
    let message = req.body.message;

    chatbot.getIntent(message).then(intent => {
        let intentValue = intent[0].name;

        database.findOne(intentValue).then(response => {
            res.json(response);
        });
    })
};