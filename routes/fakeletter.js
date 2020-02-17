var data = require("../data/notification.json");

exports.view = function(req, res) {

    data.string.splice(0, 1, "Past Notification(s)");
    console.log(data);
    
  res.render("fakeletter"); 

};
