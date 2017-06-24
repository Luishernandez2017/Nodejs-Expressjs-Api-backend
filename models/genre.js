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

//Get Genres mongo query(the callback, limit)
module.exports.getGenres= (callback, limit)=>{
    Genre.find(callback).limit(limit);
}

//Add Genremongo query
module.exports.addGenre = (genre, callback)=>{
    Genre.create(genre, callback);
}

//update Genremongo query
module.exports.updateGenre = (id, genre, options, callback)=>{

    var query = {_id: id};
    var update= {
        name: genre.name
    }
    Genre.findOneAndUpdate(query, update, options, callback);
}


//update Genremongo query
module.exports.deleteGenre = (id, callback)=>{

    var query = {_id: id};
  
    Genre.remove(query, callback);
}


