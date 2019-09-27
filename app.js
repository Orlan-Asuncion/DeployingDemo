var express = require("express");
var app = express();

var port = process.env.PORT || 3000;
app.use(express.static(__dirname + '/public'));
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("home");
});
app.get("/about", function(req, res){
    res.render("about");
});
app.get("/portfolio", function(req, res){
    res.render("portfolio");
});


app.listen(port, function(){
    console.log("App listening " + port);
});
