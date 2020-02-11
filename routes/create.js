var data = require("../data/friends.json");

exports.createEvent = function(req, res) {
  console.log(data);
  res.render("create", data);
};
