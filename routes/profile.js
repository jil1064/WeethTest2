var data = require("../data/profile.json")

exports.view = function(req, res) {
  res.render("profile", data);
};
