var total = require("../data/total.json");
var friends = require("../data/friends");

exports.view = function(req, res) {
  console.log(req.query);
  var new_event = {
    title: req.query.title,
    date: req.query.date,
    weeth: req.query.weeth,
    location: req.query.location,
    month: "MONTH"
  };

  var new_activity = {
    title: req.query.title,
    location: req.query.location,
    date: req.param.date
  };

  var friends_arr = friends.friends;
  var friend = req.query.weeth;
  for (var i = 0; i < friends_arr.length; i++) {
    if (friends_arr[i] === friend) {
      friends_arr[i].activities.push(new_activity);
    }
  }

  total.events.push(new_event);
  res.render("home", total);
};
