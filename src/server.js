
var express = require('express');
var app = express();
var morgan = require('morgan');
var routes = require('./Routes/routes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use('/api', routes);

var port = process.env.PORT || 5001;

process.env.PATH_DIR_APP = __dirname + '/Logs/'; 

app.listen(port, (err) => {
    if (err) throw err;
    console.log('Connected port ', port)
});