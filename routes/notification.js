var data = require("../data/notification.json");

exports.list = function(req, res) {
  data["viewB"] = false;
  res.render("notification", data);
};

exports.listB = function(req, res) {
  data["viewB"] = true;
  res.render("notification", data);
};
