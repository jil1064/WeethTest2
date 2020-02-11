var data = require("../data/friends.json");

exports.list = function(req, res) {
  res.render("friends", data);
};
