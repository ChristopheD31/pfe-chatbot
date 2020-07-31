const Chatbot = require('../models/Chatbot');
const WitAi = require('../models/strategies/WitAi');

const wit = new WitAi();
const chatbot = new Chatbot(wit);

exports.getAllIntents = function (req, res) {
    chatbot.getAllIntents().then(response => {
        res.json(response.data);
    }).catch(error =>{
        res.json(error);
    });
};