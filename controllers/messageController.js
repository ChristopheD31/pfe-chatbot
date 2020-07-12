const { Wit, log } = require('node-wit');
// TODO : require Chatbot class instance

exports.extractFromMessage = function (req, res) {

    // TODO : encapsulate all the following logic by a call on getMessageIntention() on a chatbot class/instance

    let message = req.body.message;

    const client = new Wit({
        accessToken: "GKH7ZZ26SXF2SPO6OEV2W6PHHBZRXFHW",
        //logger: new log.Logger(log.DEBUG) // optional
    });

    client.message(message).then(response =>{
        res.json(response);
    })
};