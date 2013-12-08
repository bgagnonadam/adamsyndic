var express = require('express');

var app = express.createServer();
app.register('.html', require('jade'));

app.use(express.static(__dirname));

app.get('/', function(req, res) {

    res.render('index');
});

// spin up server
app.listen(process.env.PORT || 5000);
