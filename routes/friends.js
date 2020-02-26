var data = require("../data/friends.json");
//var hiddenFriends = require("../data/hiddenFriends.json");

exports.list = function(req, res) {
  data["viewB"] = false;
  res.render("friends", data);
};

exports.listB = function(req, res) {
  data["viewB"] = true;
  res.render("friends", data);
};
