const express = require("express")
const bodyParser = require("body-parser")

const app = express()

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