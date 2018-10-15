const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    
   
})

let User = mongoose.model('User', userSchema, 'users')

module.exports = User