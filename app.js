var express = require('express');
var bodyParser = require('body-parser');    
var  mongoose = require('mongoose');

var app = express();


//Models
Genre = require('./models/genre');
Book = require('./models/books');

//port
var port = process.env.PORT || 3000;

//Connect to Mongoose
mongoose.connect('mongodb://localhost/bookstore');


var db = mongoose.connection;
app.get('/', (req, res) =>{
   
    res.send('Hello from Express');

});


app.listen(port);


console.log(`Listening on port : ${port}`);


