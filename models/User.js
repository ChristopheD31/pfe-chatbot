const express = require('express');
const { Wit } = require("node-wit");

// Chatbot prototype
var Chatbot = function() {
    this.chatbotAi = "";
};

Chatbot.prototype = {
    setChatbotAi: function(chatbotAi){
        this.chatbotAi = chatbotAi;
    },
    getIntent: function(message){
        return this.chatbotAi.getIntent(message);
    }
};

//Wit AI Strategy
var WitAi = function() {
    this.client = new Wit({
        accessToken: process.env.WIT_TOKEN,
      //  logger: new log.Logger(log.INFO)
      }),
     this.getIntent = function(message){

        return this.client.message(message,{}).then(({entities, intents, traits}) => {
            console.log(intents);
            console.log(entities);
            console.log(traits);
            return intents;
            ;})

    }
};

var chatbot = new Chatbot();
var witAI = new WitAi();

chatbot.setChatbotAi(witAI);
chatbot.getIntent("à quel heure peut-on manger?");