var express = require('express');
var stormpath = require('express-stormpath');

var app = express();

app.use(stormpath.init(app, {
  application: process.env.STORMPATH_URL,
}));

app.get('/', function(req, res) {
  res.send("Hey there! Thanks for visting the site! Be sure to <a href='/login'>login</a>!");
});

app.get('/dashboard', stormpath.loginRequired, function(req, res) {
  res.json(req.user);
});

app.listen(process.env.PORT || 3000);
