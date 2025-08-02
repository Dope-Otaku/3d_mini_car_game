const express = require('express')

const app = express()

app.get("/",(req, res)=>{
    res.send("hey how are yaa!")
})

app.listen(3000, ()=>{
    console.log("server starting on port no: 3000")
})