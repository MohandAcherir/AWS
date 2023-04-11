var User = require('./models/User');
var bcrypt = require('bcrypt-nodejs');
var jwt = require('jwt-simple')
var express = require('express')
var router = express.Router()

router.post("/register", (req, res) => {
    var userData = req.body;

    var user = new User(userData);
    
    user.save().then(()=>{
        res.status(200).json({"message": "User registered"});
    }).catch((err)=>{
        console.log(err);
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
            }
            var payload = { sub: user._id };

            var token = jwt.encode(payload, '123');
        
            res.status(200).send({token});
        })
    });
})

module.exports = router;