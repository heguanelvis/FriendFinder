
var path = require('path');

module.exports = (app) => {

    //home page

    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, '/../public/home.html'));
    });

    //survey page

    app.get('/survey', function (req, res) {
        res.sendFile(path.join(__dirname, '/../public/survey.html'));
    });

    //default

    app.use(function (req, res) {
        res.sendFile(path.join(__dirname + '/../public/home.html'));
    });

};