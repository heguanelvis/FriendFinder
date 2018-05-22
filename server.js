
var express = require("express");
var bodyParser = require("body-parser")
var path = require("path")


var friends = require('./app/data/friends.js');
var app = express();
var PORT = process.env.PORT || 4000;

app.use(express.static('app/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

app.listen(PORT, () => {
    console.log('App listening on PORT ' + PORT);
});
