const mongoose = require('mongoose');

const answerSchema = new mongoose.Schema({
    Intention: { type: String, required: true, unique: true }
    , Answer: { type: String, required: true }
})

const answers = mongoose.model('Answer', answerSchema)

//Mongoose strategy
function MongoDb() {
    this.db = mongoose.connection;

    this.findOne = function (intention) {
        if(!intention) throw { name:  "ParamError" , message :"Missing parameters"};
        let query = answers.findOne({ Intention: intention });

        let reply = query.exec().then(document => {
            if (!document) throw { name:  "TODO" , message :"Handle no document"};
            return document;
        });

        return reply;
    }

    this.update = function (document) {

        if(!document.intention || !document.answer) throw { name:  "ParamError" , message :"Missing parameters"};
        let conditions = { Intention: document.intention };
        let query = answers.findOneAndUpdate(conditions, { Answer: document.answer }, { upsert: true, useFindAndModify: false });

        return query.exec().then(document => {
            return document;
        });
    }

    this.delete = function (document) {
        if(!document.intention) throw { name:  "ParamError" , message :"Missing parameters"};
        let conditions = { Intention: document.intention };
        let query = answers.findOneAndDelete(conditions);

        return query.exec().then(document => {
            return document;
        });
    }
};

module.exports = MongoDb;