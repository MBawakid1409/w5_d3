const mongoose = require('mongoose');

// Schema

const userSchema = new mongoose.Schema({
    fName: {type:String, required:true},
    favFood: String,
})

// model

const User = mongoose.model('User', userSchema)

module.exports = User

