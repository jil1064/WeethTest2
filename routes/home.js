var total_events = require("../data/total.json");
var friends = require("../data/friends");

exports.view = function(req, res) {
  if (req.query.weeth) {
    var strMonth = convertMonth(req.query.date.toString());
    var name = capitalize(req.query.weeth);
    var count = total_events.events.length;
    var new_activity = {
      id: count,
      title: req.query.title,
      location: req.query.location,
      date: req.query.date,
      weeth: name,
      month: strMonth,
      messages: [],
      receive: ""
    };

    addEvent(new_activity);

    var friends_arr = friends.friends;
    var friend = req.query.weeth;
    for (var i = 0; i < friends_arr.length; i++) {
      if (friends_arr[i] === friend) {
        friends_arr[i].activities.push(new_activity);
      }
    }
  }

  sortEvent(total_events.events);

  // add a variable to determine which design to render
  total_events["viewB"] = false;

  res.render("home", total_events);
};

exports.viewB = function(req, res) {
  if (req.query.weeth) {
    var strMonth = convertMonth(req.query.date.toString());
    var name = capitalize(req.query.weeth);
    var count = total_events.events.length;
    var new_activity = {
      id: count,
      title: req.query.title,
      location: req.query.location,
      date: req.query.date,
      weeth: name,
      month: strMonth,
      messages: [],
      receive: ""
    };

    addEvent(new_activity);

    var friends_arr = friends.friends;
    var friend = req.query.weeth;
    for (var i = 0; i < friends_arr.length; i++) {
      if (friends_arr[i] === friend) {
        friends_arr[i].activities.push(new_activity);
      }
    }
  }
  sortEvent(total_events.events);

  // add a variable to determine which design to render
  total_events["viewB"] = true;

  res.render("home", total_events);
};

function convertMonth(month) {
  var str = month;
  var strMonth = str.substr(5, 2);

  if (strMonth == "01") {
    strMonth = "Jan";
  } else if (strMonth == "02") {
    strMonth = "Feb";
  } else if (strMonth == "03") {
    strMonth = "Mar";
  } else if (strMonth == "04") {
    strMonth = "Apr";
  } else if (strMonth == "05") {
    strMonth = "May";
  } else if (strMonth == "06") {
    strMonth = "Jun";
  } else if (strMonth == "07") {
    strMonth = "Jul";
  } else if (strMonth == "08") {
    strMonth = "Aug";
  } else if (strMonth == "09") {
    strMonth = "Sep";
  } else if (strMonth == "10") {
    strMonth = "Oct";
  } else if (strMonth == "11") {
    strMonth = "Nov";
  } else if (strMonth == "12") {
    strMonth = "Dec";
  } else {
    strMonth = "???";
  }
  return strMonth;
}

function addEvent(activity) {
  total_events.events.push(activity);
}

function sortEvent(events) {
  events.sort(function(a, b) {
    return Date.parse(b.date) - Date.parse(a.date);
  });
}

function capitalize(name) {
  if (typeof name != "string") {
    return "";
  }
  return name.charAt(0).toUpperCase() + name.slice(1);
}
