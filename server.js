
var express = require('express');
var app = express();
var logger = require('morgan');
var port = 8000;
var bodyParser = require('body-parser');
var api = require('./api/route/apiRoute');

app.use(logger('common'));
app.use(express.static(__dirname + "/app"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use('/api', api);

app.listen(port, () => {
    console.log("listening on http://localhost:%s", port);
});
