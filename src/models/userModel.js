const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    bookname : {
        type : String,
        unique : true,
        required : true
    },
    authorname : {
        type : String,
        unique : true,
        required : true
    },
    category : {
        type : String,
        unique : true,
        required : true
    },
    year :{
        type : Number,
        required : true
    }
}, { timestamps: true });
module.exports = mongoose.model('Book', bookSchema)




// String, Number
// Boolean, Object/json, array