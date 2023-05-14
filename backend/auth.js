var User = require('./models/User');
var bcrypt = require('bcrypt-nodejs');
var jwt = require('jwt-simple')
var express = require('express')
var router = express.Router()

router.post("/register", (req, res) => {
    var userData = req.body;

    var user = new User(userData);

    console.log(req.body);
    
    user.save().then((newUser) => {
        createSendToken(res, newUser);
    }).catch((err)=>{
        return res.status(500).send("Erreur lors de l'enregistrement de l'utilisateur")
    })
})

router.post("/login", async (req, res) => {
    var loginData = req.body;

    var user = await User.findOne({email: loginData.email}).then((user)=>{
        if(!user){
            return res.status(401).send({message :'Invalid email'});
        }

        // Le mot de passe est-il correct ? 
        // Il faut comparer le mot de passe saisi avec le mot de passe crypté dans la base de données
        bcrypt.compare(loginData.pwd, user.pwd, (err, isMatch) => {
            if(!isMatch) {
                return res.status(401).send({message :'Invalid password'});
            } else {
                createSendToken(res, user);
            }
        })
    });
})

createSendToken = (res, user) => {
    var payload = { sub: user._id };

    var token = jwt.encode(payload, '123');

    res.status(200).send({token});
}

var auth = {
    router,
    checkAuthenticated: (req, res, next) => {
        if (!req.header('Authorization')) {
            return res.status(401).send({message: 'Unauthorized. Missing Auth Header'});
        }
        var token = req.header('Authorization').split(' ')[1]
    
        var payload = jwt.decode(token, '123')
        if (!payload) {
            return res.status(401).send({message: 'Unauthorized. Auth Header Invalid'});
        }
        req.userId = payload.sub
        next()
    }
}

module.exports = auth;