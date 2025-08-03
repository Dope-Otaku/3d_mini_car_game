const express = require('express')
const cors = require('cors')
const mongoDBConnection  = require('./dbConnection');
const userModel = require('./dbSchema')

const app = express()

require('dotenv').config();


//initialized mongoDB
mongoDBConnection()



app.use(cors())
app.use(express.json())

app.use((req, res, next)=>{
    console.log("we are using a middleware")
    next()
})

app.get("/",(req, res)=>{
    res.send("hey how are yaa!")
    // res.render('Home', {name:name})
})

app.get("/status",(req, res)=>{
    res.send("we are on status page!")
})

app.get("/create",async(req, res)=>{
    const resCreate = await userModel.create({
        username: "sonali",
        name: "guuu",
        age: 2
    })
    res.send(resCreate)
})

app.get("/allusers",async(req, res)=>{
    const allusers = await userModel.find()
    res.send(allusers)
})


app.get("/findone",async(req, res)=>{
    const findone = await userModel.findOne({username: "souvik"})
    res.send(findone)
})



app.get("/api/data",(req, res)=>{
    // res.send("we are on status page!")
    res.json({name: "souvik test name 1"})
})

app.get("/status/:username",(req, res)=>{
    let name = req.params.username
    // res.send(`we are on status page! and your name is ${name}`)
    // res.render('Home', {name:name})
})


app.listen(3000, ()=>{
    console.log("server starting on port no: 3000")
})