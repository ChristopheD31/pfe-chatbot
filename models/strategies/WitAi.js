const { Wit } = require("node-wit");
const constants = require("../../parameters/chatbotConstants");

//Wit AI Strategy
function WitAi() {
    this.client = new Wit({
        accessToken: process.env.WIT_TOKEN,
        //  logger: new log.Logger(log.INFO)
    });

    this.getIntent = function (message) {
        return this.client.message(message).then(({ entities, intents, traits }) => {
            console.log(intents);
            return VerifyConfidence(intents);
        })
    }
};

function VerifyConfidence(intents) {
    let treshold = constants.INTENT_CONFIDENCE_TRESHOLD;

    if (!intents.find(intent => intent.confidence >= treshold)) {
        return [{"name":"default"}];
    }
    
    return intents;
}

module.exports = WitAi;