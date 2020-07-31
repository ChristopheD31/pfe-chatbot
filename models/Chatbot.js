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
    getAllIntents: function () {
        return this.chatbotAi.getAllIntents();
    }
};

module.exports = Chatbot;