/// <reference path="typings/node/node.d.ts"/>
var express = require("express");
var app = express();

app.use(express.static("app"));

app.get("/", function (req, res) {
    res.sendFile('index.html' , { root: 'app' });
});

var port = process.env.PORT || 5000;
app.listen(port, function () {
    console.log("Listening on " + port);
});