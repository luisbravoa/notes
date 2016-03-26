var express = require('express');
var app = express();




app.get('/', function (req, res) {
    res.render('index');
});

app.use(express.static('./public')) ;
app.set('views', './app/views');
app.set('view engine', 'ejs');

var port = 3000;
app.listen(port, function () {
    console.log('Listening on ' + port);
});