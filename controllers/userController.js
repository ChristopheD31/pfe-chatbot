// TODO : require user model

exports.user_list = function(req, res) {
  res.send('NOT IMPLEMENTED: users list');
};

exports.user = function(req, res) {
  var user_id = req.params.id;
  res.send('NOT IMPLEMENTED: specific user with id ' + user_id);
};