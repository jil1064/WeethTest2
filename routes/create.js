var data = require("../data/friends.json");

exports.createEvent = function(req, res) {
  data["viewB"] = false;
  res.render("create", data);
};

exports.createEventB = function(req, res) {
  data["viewB"] = true;
  res.render("create", data);
};
