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
    }
};

module.exports = Chatbot;