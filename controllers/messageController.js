const Chatbot = require('../models/Chatbot');
const WitAi = require('../models/strategies/WitAi');

// Chatbot instance using strategy pattern
const wit = new WitAi();
const chatbot = new Chatbot(wit);

exports.extractFromMessage = function (req, res) {

    let message = req.body.message;
    let intent = chatbot.getIntent(message).then(response => {
        res.json(response)
    });
};

exports.getResponseFromIntent = function (req, res) {

    let message = req.body.message;
    let intent = chatbot.getResponse(intent).then(response => {
        res.json(response)
    });
};