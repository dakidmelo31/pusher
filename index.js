const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const app = express()

const {MongoClient, ServerApiVersion} = require("mongodb")


const Uri = 'mongodb://localhost:27017/project?directConnection=true';



mongoose.connect(Uri)

app.use(bodyParser.json())

app.get("/", (req, res, next)=>{
    res.send({message: "Hello Mom"})


})

app.use((req, res)=>{
    res.setHeader("Content-Type", "text/json")
})

app.listen(3000, () =>{
    console.log("now running")
})