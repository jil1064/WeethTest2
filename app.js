/**
 * Module dependencies.
 */

var express = require("express");
var http = require("http");
var path = require("path");
var handlebars = require("express3-handlebars");

var index = require("./routes/index");
var home = require("./routes/home");
var friends = require("./routes/friends");
var create = require("./routes/create");
var notification = require("./routes/notification");
var profile = require("./routes/profile");
var friend = require("./routes/friend");
var letter = require("./routes/letter");
var fakeletter = require("./routes/fakeletter");
var signup = require("./routes/signup");

var app = express();

// all environments
app.set("port", process.env.PORT || 5000);
app.set("views", path.join(__dirname, "views"));
app.engine("handlebars", handlebars());
app.set("view engine", "handlebars");
app.use(express.favicon());
app.use(express.logger("dev"));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser("Intro HCI secret key"));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, "public")));

// development only
if ("development" == app.get("env")) {
  app.use(express.errorHandler());
}

// Add routes here
app.get("/", index.view);
app.get("/home", home.view);
app.get("/friends", friends.list);
app.get("/friends/:friend", friend.list);
app.get("/create", create.createEvent);
app.get("/notification", notification.list);
app.get("/profile", profile.view);
app.get("/letter", letter.view);
app.get("/fakeletter", fakeletter.view);
app.get("/signup", signup.view);
app.get("/letter/:event_id", letter.view);
app.post("/letter/:event_id", letter.submitForm);

http.createServer(app).listen(app.get("port"), function() {
  console.log("Express server listening on port " + app.get("port"));
});
