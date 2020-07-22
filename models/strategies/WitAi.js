const { Wit } = require("node-wit");
<<<<<<< Updated upstream:models/strategies/WitAi.js
const responseSchema = require('../goose');
=======


>>>>>>> Stashed changes:models/WitAi.js

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
    },
    this.getResponse = function(intent){
        return responseSchema.findResponse(intent)
    },

    this.setResponse =  function(intent,response){
        return this.chatbotAi.setResponse(intent,response);
    }
};

module.exports = WitAi;