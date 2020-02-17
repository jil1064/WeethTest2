var data = require("../data/notification.json");

exports.list = function(req, res) {
    console.log(data);
  res.render("notification", data);
};
