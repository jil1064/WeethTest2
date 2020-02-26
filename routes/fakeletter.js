var data = require("../data/notification.json");

exports.view = function(req, res) {
  data.string.splice(0, 1, "Past Notification(s)");
  data["viewB"] = false;
  res.render("fakeletter", data);
};

exports.viewB = function(req, res) {
  data.string.splice(0, 1, "Past Notification(s)");
  data["viewB"] = true;
  res.render("fakeletter", data);
};
