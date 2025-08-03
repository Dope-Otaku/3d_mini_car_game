const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username: String,
    name: String,
    age: Number
})

module.exports = mongoose.model("Users", userSchema);