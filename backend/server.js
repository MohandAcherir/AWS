var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
var app = express()

var User = require('./models/User');
var auth = require('./auth');

mongoose.Promise = Promise;

var posts = [
    {message: 'hello'},
    {message: 'hi'}
]

app.use(cors())
app.use(bodyParser.json())

app.get('/posts', function (req, res) {
    res.send(posts)
})

app.get('/users', async function (req, res) {

    try{ 
        var users = await User.find({}, '-pwd -__v')
        res.send(users)
    } catch(error){
        console.error(error)
        res.status(500).send("Error fetching users")
    }
})

app.get('/profile/:id', async function (req, res) {
    try{ 
        var user = await User.findById(req.params.id, '-pwd -__v')
        res.send(user)
    } catch(error){
        console.error(error)
        res.status(500).send("Error find user with id " + req.params.id)
    }
})

mongoose.connect('mongodb+srv://Tom:Tom@atlascluster.heblubf.mongodb.net/?retryWrites=true&w=majority');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('connected');
}); 

app.use('/auth', auth);
app.listen(3000)