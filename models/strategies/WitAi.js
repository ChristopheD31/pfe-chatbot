const { Wit } = require('node-wit');
const axios = require('axios');


//Wit AI Strategy
function WitAi() {
    this.client = new Wit({
        accessToken: process.env.WIT_TOKEN,
        //  logger: new log.Logger(log.INFO)
    });
    
    this.getIntent = function (message) {
        return this.client.message(message).then(({ entities, intents, traits }) => {
            return intents;
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

module.exports = WitAi;