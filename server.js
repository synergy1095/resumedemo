// Jonathan Song
// Resume demo
// cs3035

var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('resumedemo', ['resumedemo']);
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.get('/resumedemo', function (req, res) {
  console.log('I received a GET request');

  db.resumedemo.find(function (err, docs) {
    console.log(docs);
    res.json(docs);
  });
});

app.get('/resumedemo/edu', function(req, res) {
  // console.log('I received a GET request edu');
  db.resumedemo.find({"type":"edu"}, function(err, doc) {
    res.json(doc);
  });
});

app.get('/resumedemo/skill', function(req, res) {
  // console.log('I received a GET request skill');
  db.resumedemo.find({"type":"skill"}, function(err, doc) {
    res.json(doc);
  });
});

app.get('/resumedemo/project', function(req, res) {
  // console.log('I received a GET request project');
  db.resumedemo.find({"type":"project"}, function(err, doc) {
    res.json(doc);
  });
});


app.listen(8080);
console.log("Server running on port 8080");