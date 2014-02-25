var express = require('express');

var app = express.createServer();
app.register('.html', require('jade'));

app.use(express.static(__dirname));

app.get('/', function(req, res) {

    res.render('index');
});

// spin up server
var port = process.env.PORT || 5000;
app.listen(port);
console.log("Process started at port : " + port);
