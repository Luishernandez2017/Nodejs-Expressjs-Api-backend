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
           description:{
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

    module.exports.getBooks = (callback, limit)=>{
        Book.find(callback).limit(limit);//mongo query
    }

    module.exports.getBookById = (id, callback)=>{
        Book.findById(id, callback);//mongo query
    }

       module.exports.addBook = (book, callback)=>{
        Book.create(book, callback);//mongo query
    }


    
//update Genremongo query
module.exports.updateBook = (id, book, options, callback)=>{

    var query = {_id: id};

    var update= {
        name: book.title,
        genre: book.genre,
        description: book.description,
        author: book.author,
        publisher: book.publisher,
        pages: book.pages,
        image_url: book.image_url,
        buy_url: book.buy_url

    }

    Book.findOneAndUpdate(query, update, options, callback);
}


    
//update Genremongo query
module.exports.deleteBook = (id, callback)=>{

    var query = {_id: id};
  
    Book.remove(query, callback);
}
