var data = require("../data/friends.json");

exports.list = function(req, res) {
  var friend = req.params.friend;
  var friends_arr = data.friends;
  var found;

  // look for a specific friend
  for (var i = 0; i < friends_arr.length; i++) {
    if (friends_arr[i].name === friend) {
      found = friends_arr[i];
    }
  }
  console.log(found);
  res.render("friend", found);
};
