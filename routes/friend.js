var data = require("../data/friends.json");
var total_events = require("../data/total.json");

exports.list = function(req, res) {
  var friend = req.params.friend;
  var friends_arr = data.friends;
  var found = findFriend(friends_arr, friend);

  // if found the friend, push all activities of friend
  // into a new array to be rendered
  if (found) {
    var activites = total_events.events.filter(function(event) {
      return event.weeth === found.name;
    });

    found.activities = activites;
  }
  found["viewB"] = false;
  res.render("friend", found);
};

exports.listB = function(req, res) {
  var friend = req.params.friend;
  var friends_arr = data.friends;
  var found = findFriend(friends_arr, friend);

  // if found the friend, push all activities of friend
  // into a new array to be rendered
  if (found) {
    var activites = total_events.events.filter(function(event) {
      return event.weeth === found.name;
    });

    found.activities = activites;
  }
  found["viewB"] = true;
  res.render("friend", found);
};

function findFriend(friends_arr, friend) {
  var found = null;
  for (var i = 0; i < friends_arr.length; i++) {
    if (friends_arr[i].name === friend) {
      found = friends_arr[i];
    }
  }
  return found;
}
