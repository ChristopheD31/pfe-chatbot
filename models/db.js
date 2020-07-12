var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("chatbot");
  dbo.createCollection("reponse", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
  var myobj = { Intention: "Company Inc", Reponse: "Highway 37" };
  dbo.collection("reponse").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
}); 