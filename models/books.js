var mongoose = require('mongoose');

//Book Schema Object
var bookSchema = mongoose.Schema({
         
         title: {
             type: String,
             required: true
         },
         
             genre:{
                 type: String,
                 required:true
             },
           overview:{
               type:String

           },
           author: {
               type: String,
               required: true
           },
           publisher: {
               type:String
           },
           pages: {
               type:String
           },
           image_url:{
               type:String
           },
           buy_url:{
               type:String
           },

         
         create_date: {
             type: Date,
             default: Date.now
         }
    
});


var Book = module.exports = mongoose.model('Book', bookSchema);


//Read Database Collection content
  module.exports.getBooks = (callback, limit)=>{

        Book.find(callback).limit(limit);//mongo query
    }


//Get content by Id
    module.exports.getBookById = (id, callback)=>{

        Book.findById(id, callback);//mongo query
    }


    //Create
     module.exports.addBook = (book, callback)=>{
        Book.create(book, callback);//mongo query
    }


    
//Update Book
module.exports.updateBook = (id, book, options, callback)=>{

//define id
    var query = {_id: id};

//define properties
    var update= {
        title: book.title,
        genre: book.genre,
        overview: book.overview,
        author: book.author,
        publisher: book.publisher,
        pages: book.pages,
        image_url: book.image_url,
        buy_url: book.buy_url

    }
   //findOneAndUpdate(id, contentToUpdate, options)
    Book.findOneAndUpdate(query, update, options, callback);//mongo query
}

  
//Delete Book
module.exports.deleteBook = (id, callback)=>{

   //Define id
    var query = {_id: id};
  
    Book.remove(query, callback);//mongo query
}

   