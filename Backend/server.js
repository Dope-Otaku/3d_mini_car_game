const express = require('express')

const app = express()

app.use((req, res, next)=>{
    console.log("we are using a middleware")
    next()
})

app.get("/",(req, res)=>{
    res.send("hey how are yaa!")
})

app.get("/status",(req, res)=>{
    res.send("we are on status page!")
})

app.listen(3000, ()=>{
    console.log("server starting on port no: 3000")
})