const express = require('express')
const cors = require('cors')
const mongoDBConnection  = require('./dbConnection');
const userModel = require('./dbSchema')
const session = require('express-session')
const cookieParser = require('cookie-parser')

const app = express()

require('dotenv').config();


//initialized mongoDB
mongoDBConnection()



app.use(cors())
app.use(cookieParser())
app.use(express.json())
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: "hello"
}))

app.use((req, res, next)=>{
    console.log("we are using a middleware and you just sent a request to backend")
    next()
})

app.get("/",(req, res)=>{
    req.session.active = true
    res.cookie("userActive", "true")
    res.send("hey how are yaa!")
    // res.render('Home', {name:name})
})

app.get("/api/read",(req, res)=>{
    // req.session.active = true
    // res.cookie("userActive", "true")
    // res.send("hey how are yaa!")
    // res.render('Home', {name:name})
    if(req.cookies){
        res.json({cookie: req.cookies})
        console.log(req.cookies)
        // res.send(req.cookies)
    }
    else{
        res.send("no cookie found!")
    }
})

app.get("/status",(req, res)=>{
    // console.log(req.session)
    if(req.session.active === true){
        res.send("you are fu*ked!")
    }
    
})

app.get("/removestatus",(req, res)=>{
    // console.log(req.session)
    req.session.destroy((err)=>{
        if(err) throw Error;
        res.send("you are saved in the name of jesus!")
    })
    
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

app.get("/delete",async(req, res)=>{
    const del = await userModel.findOneAndDelete({username: "sonali"})
    res.send(del)
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