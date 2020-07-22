

// Chatbot prototype
function Chatbot(strategy) {
    this.chatbotAi = strategy || "";
};

Chatbot.prototype = {
    setChatbotAi: function (chatbotAi) {
        this.chatbotAi = chatbotAi;
    },
    getIntent: function (message) {
        return this.chatbotAi.getIntent(message);
    },
    
    getResponse: function(intent){
        return this.chatbotAi.getResponse(intent)
    },
    setResponse: function(intent,response){
        return this.chatbotAi.setResponse(intent,response);
    }
    
};

module.exports = Chatbot;