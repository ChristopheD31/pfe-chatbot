const { Wit } = require("node-wit");
const constants = require("../../parameters/chatbotConstants");
const axios = require('axios');

//Wit AI Strategy
function WitAi() {
    this.client = new Wit({
        accessToken: process.env.WIT_TOKEN,
    });

    this.getIntent = function (message) {
        return this.client.message(message).then(({ entities, intents, traits }) => {
            console.log(intents);
            return VerifyConfidence(intents);
        })
    };

    this.getAllIntents = function () {
        return axios({
            method: 'get',
            url: 'https://api.wit.ai/intents',
            headers: {
                "Authorization": "Bearer " + process.env.WIT_TOKEN
            }
        });
    };
};

function VerifyConfidence(intents) {
    let treshold = constants.INTENT_CONFIDENCE_TRESHOLD;

    if (!intents.find(intent => intent.confidence >= treshold)) {
        return [{"name":"default"}];
    }
    
    return intents;
}

module.exports = WitAi;