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
  Intention: { type: String, required: true, unique: true }
  , Response: { type: String, required: true }
});

responseSchema.methods.conLog = function () {
  const greeting = this.Intention
    ? "L'intention: " + this.Intention + " et la réponse est" + this.Response
    : "Aucune Intention";
  console.log(greeting);
};

responseSchema.methods.conLog = function () {
  const greeting = this.Intention
    ? "L'intention: " + this.Intention + " et la réponse est" + this.Response
    : "Aucune Intention";
  console.log(greeting);
};


responseSchema.methods.findResponse = async function (intent) {
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
activite.findResponse("Activities").then(fuckyou =>
  console.log(fuckyou)
  );




module.exports.responseSchema = responseSchema;
module.exports.response = response;
module.exports.mongoose = mongoose;