var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
var app = express()
var jwt = require('jwt-simple')

var User = require('./models/User');
var Post = require('./models/Post');
var auth = require('./auth');

mongoose.Promise = Promise;

app.use(cors())
app.use(bodyParser.json())

app.get('/posts/:id', async function (req, res) {
    var author = req.params.id
    var posts = await  Post.find({author})
    res.send(posts)

    // Post.find().populate('author').exec(function(err, posts){
    //     res.send(posts)
    // })

    // post.find({author: req.query.author}).populate('author').exec(function(err, posts){
    //     res.send(posts)
    // }
})

app.post('/post', auth.checkAuthenticated, (req, res) => {
    var postData = req.body
    postData.author = req.userId

    var post = new Post(postData)

    post.save().then(()=>{
        res.status(200).json({"message": "Post published"});
    }).catch((err)=>{
        console.error("Erreur lors de la publication du post", err);
        return res.status(500).send({message: 'Erreur lors de la publication du post'});
    })
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

app.use('/auth', auth.router);
app.listen(3000)