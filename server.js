// dependencies
var express = require("express");
var exphbs = require("express-handlebars");
// var methodOverride = require('method-override');
// require all models
var PORT = process.env.PORT || 3001;
// initalize express
var app = express();
//static
app.use(express.static("public"));
// parse the body as Json
app.use(express.urlencoded({ extended: "main" }));
app.use(express.json());
// view engine
app.engine("handlebars" , exphbs({ defaultLayout: "main" }));
app.set("view engine" , "handlebars" );

// Override with POST having ?_method=DELETE
// app.use(methodOverride('_method'));

// routes
var routes = require("./controllers/controller");
app.use(routes);
// starts the server
app.listen(PORT, function(){
    console.log("Server Live @: http://localhost:" + PORT);
});


