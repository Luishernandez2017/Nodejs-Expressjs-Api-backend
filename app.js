var express = require('express');
var bodyParser = require('body-parser');    
var  mongoose = require('mongoose');

var app = express();


//Models
Genre = require('./models/genre');
Book = require('./models/books');


//Body Parser Middleware
app.use(bodyParser.json());


//port
var port = process.env.PORT || 3000;

//Connect to Mongoose
mongoose.connect('mongodb://localhost/bookstore');

//database
var db = mongoose.connection;
app.get('/', (req, res) =>{
   
    res.send('Hello from Express');

});


//Genres api
app.get('/api/genres', (req, res)=>{


 //Genre object.getGenres()
    Genre.getGenres((err, genres)=>{

        if(err){
            throw err;
        }else{
            res.json(genres);
        }
    })
        
});


//Genres create/add
app.post('/api/genres', (req, res)=>{
let genre = req.body;//request content

    Genre.addGenre(genre, (err, genre)=>{
        if(err){
            throw err;
        }else{
            res.json(genre);
        }
    })
        
});


//Books api
app.get('/api/books', (req, res)=>{


//Read 
    Book.getBooks((err, books)=>{
    if(err){
        throw err;
    }else{
        res.json(books);
    }
    
    });

});


//Books get by Id
app.get('/api/books/:_id', (req, res)=>{

    Book.getBookById(req.params._id, (err, book)=>{
    if(err){
        throw err;
    }else{
        res.json(book);
    }
    
    });

});


//create book
app.post('/api/books', (req, res)=>{
let book = req.body;//request content

    Book.addBook(book, (err, book)=>{
        if(err){
            throw err;
        }else{
            res.json(book);
        }
    })
        
});





app.listen(port);


console.log(`Listening on port : ${port}`);


