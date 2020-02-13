var data = require("../data/friends.json");
//var hiddenFriends = require("../data/hiddenFriends.json");

exports.list = function(req, res) {
  res.render("friends", data);
  console.log(data);
};
