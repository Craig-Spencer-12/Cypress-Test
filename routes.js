//Dependencies
var express = require("express");

//The router controls what the get calls will return
var router = express.Router();

router.get("/", function(req, res){
    //console.log("hello from the index page");
    res.render("index");
});

module.exports = router;