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
        if (!intention) throw { name: "ParamError", message: "Missing parameters" };
        let query = answers.findOne({ Intention: intention });

        let reply = query.exec().then(document => {
            if(!document) return this.getDefault();
            return document;
        }).catch(error => {
            throw error
        });
        
        return reply;
    }

    this.getAll = function(){
        let query = answers.find();

        let reply = query.exec().then(documents => {
            if (!document) throw { name: "NoDocuments", message: "There are no documents to return in the Database" }
            return documents;
        }).catch(error => {
            throw error
        });
        
        return reply;

    }

    this.update = function (document) {

        if (!document.intention || !document.answer) throw { name: "ParamError", message: "Missing parameters" };
        let conditions = { Intention: document.intention };
        let query = answers.findOneAndUpdate(conditions, { Answer: document.answer }, { upsert: true, useFindAndModify: false });

        return query.exec().then(document => {

            return document;
        });
    }

    this.delete = function (document) {
        if (!document.intention) throw { name: "ParamError", message: "Missing parameters" };
        let conditions = { Intention: document.intention };
        let query = answers.findOneAndDelete(conditions);

        return query.exec().then(document => {
            if (!document) throw { name: "NoDocument", message: "No documents to delete" }
            return document;
        });
    }

    this.getDefault = function () {
        let query = answers.findOne({ Intention: "default" });
        let reply = query.exec().then(document => {
             if (!document) throw { name: "NoAnswer", message: "No answer are Configured for desired intention and default" };
            return document;
        });
        return reply
    }
};

module.exports = MongoDb;