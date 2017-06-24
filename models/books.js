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




   