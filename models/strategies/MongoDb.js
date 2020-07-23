const mongoose = require('mongoose');


//Wit AI Strategy
function MongoDb() {
    this.db = mongoose.connection,
    this.responseSchema = new mongoose.Schema({
        Intention: { type: String, required: true, unique: true }
        , Response: { type: String, required: true }
      }),
    this.response = mongoose.model('Response', this.responseSchema),
    this.connect = function(){

        //à changer pour pouvoir connecter ailleur que localhost
        mongoose.connect('mongodb://localhost/chatbot', { useNewUrlParser: true, useUnifiedTopology: true });
        this.db.on('error', console.error.bind(console, 'connection error:'));
        this.db.once('open', function () {
        // we're connected!
        console.log("pass")
        });
    },
    
    this.getResponse = function(intent){
        var query =  this.response.findOne({ Intention: intent }, function (err, rep) {
        });
        var reply =  query.exec().then(rep => {
          console.log(rep.response);
          return rep.Response
        });

        return reply
    },

    this.setResponse =  function(intent,newResponse){
        var query = { Intention: intent }
        this.response.findOneAndUpdate(query,{Response: newResponse},{upsert: true, useFindAndModify :false}, function(err, res) {
            // Deal with the response data/error
            console.log(res);
        });
        console.log("l'intention " + intent+" à été ajouteé ou changer à : "+ newResponse)
        // return this.chatbotAi.setResponse(intent,response);
    }
};



module.exports = MongoDb;