const mongoose = require('mongoose')

const authorSchema = new mongoose.Schema({
    author_id :{type: Number,requied :true},
    author_name :String,
    age : Number,
    address : String
}, { timestamps: true });
<<<<<<< Updated upstream
module.exports = mongoose.model('author',authorSchema)
=======
module.exports = mongoose.model('author1',authorSchema)
>>>>>>> Stashed changes
