const express = require('express')
const cors = require('cors')

const app = express()

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