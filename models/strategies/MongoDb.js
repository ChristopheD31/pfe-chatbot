const responseSchema = require('../goose');

//Wit AI Strategy
function MongoDb() {
    
    this.connect = function(){
        // TODO
    },
    
    this.getResponse = function(intent){
        return responseSchema.findResponse(intent)
    },

    this.setResponse =  function(intent,response){
        return this.chatbotAi.setResponse(intent,response);
    }
};

module.exports = MongoDb;