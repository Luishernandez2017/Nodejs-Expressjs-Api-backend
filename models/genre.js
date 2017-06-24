var mongoose = require('mongoose');

//Genre Schema
var genreSchema = mongoose.Schema(
{

    //genre Object
    name:{
        type: String,
        required: true
    },
    create_date:{
        type: Date,
        default: Date.now

    }
}
);

var Genre = module.exports = mongoose.model('Genre', genreSchema);

//Read Database Collection content
module.exports.getGenres= (callback, limit)=>{
    Genre.find(callback).limit(limit);//mongo query, with limit
}


//Create genre
module.exports.addGenre = (genre, callback)=>{
    Genre.create(genre, callback);//mongo query 
}