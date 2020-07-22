//MONGOOSE
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/chatbot', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  // we're connected!
  console.log("pass")
});

const responseSchema = new mongoose.Schema({
  Intention: { type: String, required: true, unique: false }
  , Response: { type: String, required: true }
});


responseSchema.statics.findResponse = async function (intent) {
  var reply;
  return this.findOne({ Intention: intent }, function (err, rep) {
  });
  reply = await query.exec().then(rep => {
    console.log(rep.response)
    return rep.Response
  });
  return reply
};

responseSchema.methods.conLog = function () {
  const greeting = this.Intention
    ? "L'intention: " + this.Intention + " et la réponse est" + this.Response
    : "Aucune Intention";
  console.log(greeting);
};


responseSchema.methods.modelFindResponse = async function (intent) {
  var reply;
  var query = response.findOne({ Intention: intent }, function (err, rep) {
  });
  reply = await query.exec().then(rep => {

    return rep.Response
  });
  return reply
};

const response = mongoose.model('Response', responseSchema);
const activite = new response({ Intention: 'Activities', Response: 'Tu peux aller marcher' });


// activite.conLog();
response.findResponse("Activities");




module.exports.responseSchema = responseSchema;
module.exports.response = response;
module.exports.mongoose = mongoose;