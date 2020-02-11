var total_events = require("../data/total.json");
exports.view = function(req, res) {
  if (req.query.weeth) {
    var new_activity = {
      title: req.query.title,
      location: req.query.location,
      date: req.query.date,
      weeth: req.query.weeth
    };

    console.log(new_activity);

    addEvent(new_activity);
  }

  total_events.events.sort((a, b) => {
    return Date.parse(b.date) - Date.parse(a.date);
  });
  res.render("home", total_events);
};

function addEvent(activity) {
  total_events.events.push(activity);
}
