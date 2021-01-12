//Dependencies
var express = require("express");
var path = require("path");

//You can add your own dependencies like this
var routes = require("./routes");

//Variable app will be the main workhorse of the application
var app = express();

//Set can be used create or change values within the 
//application. Here we will change the port to 3000
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//Connect the router defined in routes.js
app.use(routes);

//This function
app.listen(app.get("port"), function() {
    console.log("Server started on port " + app.get("port"));
});