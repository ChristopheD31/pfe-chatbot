const { Wit } = require("node-wit");


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
    }
};

module.exports = WitAi;