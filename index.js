const express = require('express');
const cors = require('cors');

const app = express()
app.use(cors())

app.get("/sum", (req, res)=>{
    const a = parseInt(req.query.a)
    const b = parseInt(req.query.b)
    const sum = a+b
    res.send(sum.toString())
})

app.get("/multiply", (req, res)=>{
    const a = parseInt(req.query.a)
    const b = parseInt(req.query.b)
    const sum = a*b
    res.send(sum.toString())
})

app.get("/interest", (req, res)=>{
    const a = parseInt(req.query.a)
    const b = parseInt(req.query.b)
    const c = parseInt(req.query.c)
    const interest = (a*b*c)/100
    res.send(interest.toString())
})

app.listen(8000, ()=>{
    console.log("Server is running on port 8000")
})