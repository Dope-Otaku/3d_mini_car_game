require('dotenv').config();
const mongoose = require('mongoose')


const uri = process.env.MONGODB_URI;
if(!uri){
    return console.log("no url respond")
}

  
const mongoDBConnection = async() =>{
    try {
        await mongoose.connect(uri,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("Connected to MongoDB!")
    } catch (error) {
        console.log('Connection error in mongoDB',error)
        process.exit(1)
    }
}




module.exports =  mongoDBConnection ;