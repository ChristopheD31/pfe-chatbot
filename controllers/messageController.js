const Chatbot = require('../models/Chatbot');
const WitAi = require('../models/strategies/WitAi');

const Database = require('../models/Database');
const MongoDb = require('../models/strategies/MongoDb');


// Chatbot instance using strategy pattern
const wit = new WitAi();
const chatbot = new Chatbot(wit);

const mongoDb = new MongoDb();
mongoDb.connect();
const database = new Database(mongoDb);


exports.extractFromMessage = function (req, res) {

    let message = req.body.message;
    let intent = chatbot.getIntent(message).then(response => {
        res.json(response)
    });
};

exports.getResponseFromIntent = function (req, res) {
    let message = req.body.message;
    let intent = database.getResponse(message).then(response => {
        res.json(response)
    });
};