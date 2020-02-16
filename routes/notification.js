var data = require("../data/notification.json");

exports.list = function(req, res) {
  res.render("notification", data);
};
