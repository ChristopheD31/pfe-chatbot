const mongoose = require('mongoose');
const connectionUri = process.env.MONGO_CONNECTION_URI;

//Wit AI Strategy
function MongoDb() {
    this.db = mongoose.connection;

    //Mongoose model
    this.answerSchema = new mongoose.Schema({
        Intention: { type: String, required: true, unique: true }
        , Answer: { type: String, required: true }
    })

    this.answers = mongoose.model('Answer', this.answerSchema)

    this.connect = function () {
        mongoose.connect(connectionUri, { useNewUrlParser: true, useUnifiedTopology: true });

        this.db.on('error', console.error.bind(console, 'connection error:'));
        
        this.db.once('open', function () {
            console.log("Successfully connected to DB " + mongoose.connection.name);
        });
    }

    this.findOne = function (intention) {
        let query = this.answers.findOne({ Intention: intention });

        let reply = query.exec().then(document => {
            console.log(document);
            return document;
        });

        return reply;
    }

    this.update = function (document) {
        let conditions = { Intention: document.intention };
        let query = this.answers.findOneAndUpdate(conditions, { Answer: document.answer }, { upsert: true, useFindAndModify: false });

        return query.exec().then(document => {
            console.log(document);
            return document;
        });
    }

    this.delete = function (document) {
        let conditions = { Intention: document.intention };
        let query = this.answers.findOneAndDelete(conditions);

        return query.exec().then(document => {
            console.log(document);
            return document;
        });
    }
};

module.exports = MongoDb;