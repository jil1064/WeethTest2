var total_events = require("../data/total.json");

exports.view = function(req, res) {
  var event = findEvent(req.params.event_id);

  res.render("letter", event);
};

exports.submitForm = function(req, res) {
  var eventId = req.params.event_id;
  var thankyou = req.body.thankyou;
  var learn = req.body.learn;
  var wish = req.body.wish;
  var anything = req.body.anything;

  var newMessage = thankyou + " " + learn + " " + wish + " " + anything;
  addMessage(eventId, newMessage);
  var event = findEvent(eventId);

  res.render("letter", event);
};

function findEvent(eventId) {
  var event = null;
  for (var i = 0; i < total_events.events.length; i++) {
    if (total_events.events[i].id === Number(eventId)) {
      event = total_events.events[i];
    }
  }
  return event;
}

function addMessage(eventId, newMessage) {
  if (!newMessage) {
    return;
  }

  for (var i = 0; i < total_events.events.length; i++) {
    if (total_events.events[i].id === Number(eventId)) {
      total_events.events[i].messages.push(newMessage);
    }
  }
}
