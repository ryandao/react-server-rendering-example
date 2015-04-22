var express = require('express');
var React = require('react');
var FormComponent = require('./form_component');
var port = 8080;
var app = express();

app.set('view engine', 'jade');
app.set('views', __dirname);
app.use(express.static('public'));

app.get('/', function(req, res) {
  var markup = React.renderToString(
    React.createElement(FormComponent, null)
  );

  res.render('index', { markup: markup });
});

app.post('/submit', function(req, res) {
  res.send("This form does nothing");
});

app.listen(port, function() {
  console.log("Server running on port " + port);
});
