const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


<<<<<<< Updated upstream
mongoose.connect("mongodb+srv://anik2310:anik123@cluster0.tby9aun.mongodb.net/anik2310?retryWrites=true&w=majority", {
=======
mongoose.connect("mongodb+srv://anik2310:anik123@cluster0.tby9aun.mongodb.net/anikhalder?retryWrites=true&w=majority", {
>>>>>>> Stashed changes
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
