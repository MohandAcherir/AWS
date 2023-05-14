var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var Schema = mongoose.Schema;

var userSchema = new Schema({
    email: {
        type: String,
        unique: true,
        lowercase: true
    },
    pwd: String,
    name: String,
    prenom: String,
    description: String,
    taille: String,
    poids: String,
    dateDeNaissance: Date,
    sexe: String
});

userSchema.pre('save', function(next) {
    var user = this

    if (!user.isModified('pwd')) {
        return next()
    }
 
    // Crypter le mot de passe avant de l'enregistrer dans la base de données
    bcrypt.hash(user.pwd, null, null, (err, hash) => {
        if(err) return next(err)

        user.pwd = hash
        next()
    })
})

module.exports = mongoose.model('User', userSchema);
