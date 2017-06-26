var express = require('express');
var bodyParser = require('body-parser');    
const path = require("path"); //path module
var  mongoose = require('mongoose');
var cors = require('cors');

var app = express();
//the route for api


//port
var port = process.env.PORT || 3000;

//public directory
app.use(express.static(__dirname+'/public'));

//Models
Genre = require('./models/genre');
Book = require('./models/books');


//Body Parser Middleware
app.use(bodyParser.json());

//CORS Middleware
app.use(cors());

var api = express.Router();


//Connect to Mongoose
mongoose.connect('mongodb://localhost/bookstore');

//database
var db = mongoose.connection;
app.get('/', (req, res) =>{
   
    res.send('Hello from Express');

});


//Genres api
api.get('/genres', (req, res)=>{


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
api.post('/genres', (req, res)=>{
let genre = req.body;//request content

    Genre.addGenre(genre, (err, genre)=>{
        if(err){
            throw err;
        }else{
            res.json(genre);
        }
    })
        
});

//Update Genre
api.put('/genres/:_id', (req, res)=>{
 let id= req.params._id;//id from request
let genre = req.body;//conten from request

    Genre.updateGenre(id, genre, {}, (err, genre)=>{
        if(err){
            throw err;
        }else{
            res.json(genre);
        }
    })
});

//Delete Genre
api.delete('/genres/:_id', (req, res)=>{
let id= req.params._id;//id from request

    Genre.deleteGenre(id, (err, genre)=>{
        if(err){
            throw err;
        }else{
            res.json(genre);
        }
    })
});





//Books api
api.get('/books', (req, res)=>{


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
api.get('/books/:_id', (req, res)=>{

    Book.getBookById(req.params._id, (err, book)=>{
    if(err){
        throw err;
    }else{
        res.json(book);
    }
    
    });

});


//create book
api.post('/books', (req, res)=>{
let book = req.body;//request content

    Book.addBook(book, (err, book)=>{
        if(err){
            throw err;
        }else{
            res.json(book);
        }
    })
        
});

//Update Book
api.put('/books/:_id', (req, res)=>{
let id= req.params._id;//id from request
let book = req.body; //content from request

    //Genre update
    Book.updateBook(id, book, {}, (err, book)=>{
        if(err){
            throw err;
        }else{
            res.json(book);
        }
    })

});


//Delete Book
api.delete('/books/:_id', (req, res)=>{
let id= req.params._id;//id from request

    Book.deleteBook(id, (err, book)=>{
        if(err){
            throw err;
        }else{
            res.json(book);
        }
    })
});


//routhe is /api/ 
app.use('/api', api);

app.listen(port);


console.log(`Listening on port : ${port}`);


