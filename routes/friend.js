var data = require("../data/friends.json");
var total_events = require("../data/total.json");

exports.list = function(req, res) {
  var friend = req.params.friend;
  var friends_arr = data.friends;
  var found = {};

  // look for a specific friend
  for (var i = 0; i < friends_arr.length; i++) {
    if (friends_arr[i].name === friend) {
      found = { ...friends_arr[i] };
    }
  }

  if (found) {
    var activites = total_events.events.filter(
      event => event.weeth === found.name
    );
    console.log(activites);

    found.activities = [];
    found.activities.push(...activites);
  }
  console.log(found);
  res.render("friend", found);
};
